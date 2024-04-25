"use client";
import Image from "next/image";
import { HotelWithRooms } from "../hotel/AddHotelForm";
import { Booking } from "@prisma/client";
import RoomCard from "./RoomCard";

const RoomListClient = ({
  hotel,
  bookings,
}: {
  hotel: HotelWithRooms;
  bookings?: Booking[];
}) => {
  return (
    <div className="">
      {!!hotel.rooms.length && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-20 ">
          {hotel.rooms?.map((room) => {
            return (
              <RoomCard
                hotel={hotel}
                room={room}
                key={room.id}
                bookings={bookings}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RoomListClient;
