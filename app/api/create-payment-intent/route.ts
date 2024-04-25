import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-04-10",
});

export async function POST(req: Request) {
    const user = await currentUser();
    if (!user) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { booking, payment_intent_id } = body;

    const bookingData = {
        ...booking,
        userEmail: user.emailAddresses[0].emailAddress,
        userName: user.firstName || "Unable to get",
        userId: user.id,
        currency: "usd",
        paymentIntentId: payment_intent_id,
    };

    let foundBooking;

    if (payment_intent_id) {
        foundBooking = await prismadb.booking.findUnique({
            where: {
                paymentIntentId_userId: {
                    paymentIntentId: payment_intent_id,
                    userId: user.id,
                },
            },
        });
    }

    if (foundBooking && payment_intent_id) {
        console.log("Found DAta");
        //update booking
        const current_intent = await stripe.paymentIntents.retrieve(
            payment_intent_id
        );
        if (current_intent) {
            const updated_intent = await stripe.paymentIntents.update(
                payment_intent_id,
                {
                    amount: booking.totalPrice * 100,
                }
            );
            const res = await prismadb.booking.update({
                where: {
                    paymentIntentId_userId: {
                        paymentIntentId: payment_intent_id,
                        userId: user.id,
                    },
                },
                data: bookingData,
            });
            if (!res) {
                throw NextResponse.error();
            }
            return NextResponse.json({ payementIntent: updated_intent });
        }
    } else {
        //create booking
        const paymentIntent = await stripe.paymentIntents.create({
            amount: booking.totalPrice * 100,
            currency: bookingData.currency,
            automatic_payment_methods: { enabled: true },
        });

        bookingData.paymentIntentId = paymentIntent.id;

        await prismadb.booking.create({
            data: bookingData,
        });

        return NextResponse.json(paymentIntent);
    }
    return new NextResponse("Internal Server Error", { status: 500 });
}
