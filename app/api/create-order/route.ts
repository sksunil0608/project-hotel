import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const keyId = process.env.NEXT_PUBLIC_RAZORPAY_ID;
const keySecret = process.env.NEXT_PUBLIC_RAZORPAY_KEY;

if (!keyId) {
    throw new Error('RAZORPAY_ID environment variable is not defined.');
}
if (!keyId) {
    throw new Error('RAZORPAY_ID environment variable is not defined.');
}

const razorpay = new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
});
export async function POST(req: Request) {
    const user = await currentUser();
    if (!user) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { booking, orderId } = body;
    try {
        const bookingData = {
            ...booking,
            userEmail: user.emailAddresses[0].emailAddress,
            userName: user.firstName || "Unable to get",
            userId: user.id,
            currency: "INR",
            orderId: orderId,
        };
        let foundBooking;
        if (orderId) {
            foundBooking = await prismadb.booking.findFirst({
                where: {
                    orderId: orderId as string,
                    userId: user.id as string,
                },
            });
        }

        if (foundBooking && orderId) {
            //update
        }
        else {
            //create
            const options = {
                amount: booking.totalPrice * 100,
                currency: bookingData.currency,
                receipt: shortid.generate(),
                payment_capture: true,
                notes: {
                    paymentFor: "Room Booking",
                    userId: user.id,
                }
            }
            try {
                const order = await razorpay.orders.create(options)
                bookingData.orderId = order.id;
                await prismadb.booking.create({
                    data: bookingData,
                });
                return NextResponse.json(order);
            }
            catch (error: any) {
                return new NextResponse("Can't create order", { status: 500 });
            }
        }
    }
    catch (error: any) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}


