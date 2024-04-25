import AmenityItem from "@/components/AmenityItem";
import { HotelWithRooms } from "@/components/hotel/AddHotelForm";
import RoomCard from "@/components/room/RoomCard";
import RoomListClient from "@/components/room/RoomListClient";
import { getBookings } from "@/services/getBookings";
import { getHotelById } from "@/services/getHotelById";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Bath,
  Bike,
  Dumbbell,
  Hotel,
  MapPin,
  ShoppingBag,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import React from "react";

interface HotelDetailsProps {
  params: {
    hotel: HotelWithRooms;
  };
}
const RoomList = async () => {
  const hotelId = process.env.NEXT_PUBLIC_PRISMA_HOTEL_ID;
  if (!hotelId) return <div>Please provide a valid hotelId!</div>;
  const hotel = await getHotelById(hotelId);
  if (!hotel) return <div>OOps Hotel with given Id not found!</div>;
  const bookings = await getBookings(hotel.id);

  return (
    <div>
      <div className="grid grid-rows-2 text-white text-center py-12 max-h-[40vh] rounded-lg bg-[#2e1065]">
        <h1 className="text-4xl  font-bold">Book Rooms</h1>
        <p className="mx-10 lg:mx-60 text-sm">
          Plan your perfect getaway or business trip with [Your Hotel Name]. Use
          our easy online booking system to secure your preferred dates and room
          type. Benefit from exclusive deals and packages when you book directly
          with us.
        </p>
      </div>
      <div className="flex flex-col gap-6 pb-20 pt-10">
        <div className="apespect-square overflow-hidden relative w-fulll h-[200px] md:h-[400px] rounded-lg">
          <Image
            fill
            src={hotel.image}
            alt={hotel.title}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-xl md:text-3xl">{hotel.title}</h3>
          <div className="font-semibold mt-4">
            <AmenityItem>
              <MapPin className="h-4 w-4" />
              Jharkhand, Ranchi
            </AmenityItem>
          </div>
          <h3 className="font-semibold text-lg mt-4 mb-2">Description</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 content-start text-sm">
          <AmenityItem>
            <Bike className="h-4 w-4" />
            Free Parking
          </AmenityItem>

          <AmenityItem>
            <Dumbbell className="h-4 w-4" />
            {hotel.gym} Gym
          </AmenityItem>

          <AmenityItem>
            <Hotel className="h-4 w-4" />
            {hotel.restaurant} Restaurant
          </AmenityItem>
          {hotel.shopping && (
            <AmenityItem>
              <ShoppingBag className="h-4 w-4" />
              Shopping
            </AmenityItem>
          )}

          {hotel.swimmingPool && (
            <AmenityItem>
              <Bath className="h-4 w-4" />
              Swimming Pool
            </AmenityItem>
          )}
          {hotel.freeWifi && (
            <AmenityItem>
              <Wifi className="h-4 w-4" />
              Free Wifi
            </AmenityItem>
          )}
        </div>
      </div>

      <RoomListClient hotel={hotel} bookings={bookings} />
    </div>
  );
};

export default RoomList;
