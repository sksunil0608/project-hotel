"use client";

import { usePathname } from "next/navigation";
import { HotelWithRooms } from "./AddHotelForm";

const HotelCard = ({ hotels }: { hotels: HotelWithRooms }) => {
  const pathname = usePathname();
  const isMyHotels = pathname.includes("my-hotels");

  return <div className=""></div>;
};

export default HotelCard;
