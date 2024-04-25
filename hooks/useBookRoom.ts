import { Room } from "@prisma/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookRoomStore {
    bookingRoomData: RoomDataType | null;
    orderId: string | null;
    paymentId: string | null;
    setRoomData: (data: RoomDataType) => void;
    setOrderId: (orderId: string) => void;
    setPaymentId: (paymentId: string) => void;
    resetBookRoom: () => void;
}

type RoomDataType = {
    room: Room;
    totalPrice: number;
    breakFastIncluded: boolean;
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
    lunchIncluded: boolean;
    dinnerIncluded: boolean;
};

const useBookRoom = create<BookRoomStore>()(
    persist((set) => ({
        bookingRoomData: null,
        orderId: null,
        paymentId: null,
        setRoomData: (data: RoomDataType) => {
            set({ bookingRoomData: data });
        },
        setOrderId: (orderId: string) => {
            set({ orderId });
        },
        setPaymentId: (paymentId: string) => {
            set({ paymentId });
        },
        resetBookRoom: () => {
            set({
                bookingRoomData: null,
                orderId: null,
                paymentId: null,
            });
        },
    }),
        {
            name: 'BookRoom'
        })
);

export default useBookRoom;
