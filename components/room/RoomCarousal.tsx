"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HotelWithRooms } from "../hotel/AddHotelForm";
import Image from "next/image";
import AmenityItem from "../AmenityItem";
import {
  Bath,
  BedIcon,
  BugPlay,
  Castle,
  Tv,
  Users,
  UtensilsCrossed,
  VolumeX,
  Wifi,
} from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "react-day-picker";
import { useRouter } from "next/navigation";

export function RoomCarosual({ hotel }: { hotel: HotelWithRooms }) {
  const router = useRouter();
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <Carousel className="w-full max-w-[90%]">
        <CarouselContent className="-ml-1">
          {hotel &&
            hotel.rooms.length &&
            hotel.rooms.map((room) => (
              <CarouselItem
                key={room.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Card key={room.id}>
                  <CardHeader>
                    <CardTitle>{room?.title}</CardTitle>
                    <CardDescription>{room?.description} </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="aspect-square overflow-hidden relative h-[200px] rounded">
                      <Image
                        fill
                        src={room.image}
                        alt={room.title}
                        className="object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 content-start text-sm">
                      <AmenityItem>
                        <BedIcon className="h-4 w-4" />
                        {room.bedCount} Bed{"(s)"}
                      </AmenityItem>

                      <AmenityItem>
                        <Users className="h-4 w-4" />
                        {room.guestCount} Guest{"(s)"}
                      </AmenityItem>

                      <AmenityItem>
                        <Bath className="h-4 w-4" />
                        {room.bathroomCount} Bathroom{"(s)"}
                      </AmenityItem>
                      {room.roomService && (
                        <AmenityItem>
                          <UtensilsCrossed className="h-4 w-4" />
                          {room.roomService}24x7 Services
                        </AmenityItem>
                      )}

                      {room.TV && (
                        <AmenityItem>
                          <Tv className="h-4 w-4" />
                          {room.TV}TV
                        </AmenityItem>
                      )}

                      {room.freeWifi && (
                        <AmenityItem>
                          <Wifi className="h-4 w-4" />
                          {room.freeWifi}Free Wifi
                        </AmenityItem>
                      )}

                      {room.airCondition && (
                        <AmenityItem>
                          <UtensilsCrossed className="h-4 w-4" />
                          {room.airCondition}AC
                        </AmenityItem>
                      )}

                      {room.soundProffed && (
                        <AmenityItem>
                          <VolumeX className="h-4 w-4" />
                          {room.soundProffed}soundProffed
                        </AmenityItem>
                      )}

                      {room.cityView && (
                        <AmenityItem>
                          <Castle className="h-4 w-4" />
                          {room.cityView}City View
                        </AmenityItem>
                      )}
                    </div>
                    <Separator />
                    <div className="flex justify-between gap-4">
                      <div>
                        Room Price:{" "}
                        <span className="font-bold">₹{room.roomPrice}</span>
                        <span className="text-xs"> /24 Hours</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div
                      onClick={() => {
                        router.push("/rooms");
                      }}
                      className="flex flex-row justify-center items-center text-center border-2 border-purple-500 rounded-lg py-2 px-10 w-full"
                    >
                      <BugPlay className="mr-2 " />
                      <div>Go to Booking Page</div>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
