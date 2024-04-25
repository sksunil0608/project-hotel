import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { Id: string } }) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }
        if (!params.Id) {
            return new NextResponse("Payment Intent Id required", { status: 400 });
        }

        const booking = await prismadb.booking.update({
            where: {
                paymentId: params.Id,
            },
            data: { paymentStatus: true },
        })

        return NextResponse.json(booking);
    } catch (error) {
        console.log('Error at /api/booking/Id PATCH', error);
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { Id: string } }) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }
        if (!params.Id) {
            return new NextResponse("Booking Id is required", { status: 400 });
        }
        console.log(userId)
        const booking = await prismadb.booking.delete({
            where: {
                id: params.Id,
            },
        })

        return NextResponse.json(booking);
    } catch (error) {
        console.log('Error at /api/booking/Id DELETE', error);
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}