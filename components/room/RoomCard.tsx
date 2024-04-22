"use client";
import { Hotel, Booking, Room } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import AmenityItem from "../AmenityItem";
import {
  Bath,
  BedIcon,
  Castle,
  Loader2,
  PencilIcon,
  Plus,
  Trash,
  Tv,
  Users,
  UtensilsCrossed,
  VolumeX,
  Wifi,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";

import AddRoomFrom from "./AddRoomFrom";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

interface AddRoomFormProps {
  hotel: Hotel & {
    rooms: Room[];
  };
  room: Room;
  bookings?: Booking[];
}

const RoomCard = ({ hotel, room, bookings = [] }: AddRoomFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const [openAddRoom, setOpenAddRoom] = useState(false);
  const [isRoomDeleting, setIsRoomDeleting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const handleDialougueOpen = () => {
    setOpenAddRoom((prev) => !prev);
  };

  const handleRoomDelete = async (hotel: Room) => {
    setIsRoomDeleting(true);
    const getImageKey = (src: string) =>
      src.substring(src.lastIndexOf("/") + 1);
    try {
      const imageKey = getImageKey(room.image);
      axios.post("/api/uploadthing/delete", { imageKey });
      await axios.delete(`/api/room/${room.id}`);
      setIsRoomDeleting(false);
      toast({
        variant: "success",
        description: "Room Deleted",
      });
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: `Room Deletion could not be completed:${error.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isHotelDetailsPage = pathname.includes("hotel-details");
  return (
    <Card>
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
            Room Price: <span className="font-bold">₹{room.roomPrice}</span>
            <span className="text-xs"> /24 Hours</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        {isHotelDetailsPage ? (
          <div>Hotel Details Page</div>
        ) : (
          <div className="flex w-full justify-between">
            <Button
              disabled={isLoading}
              type="button"
              variant="ghost"
              onClick={() => handleRoomDelete(room)}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash className=" mr-2 h-4 w-4" />
                  Delete
                </>
              )}
            </Button>
            <Dialog open={openAddRoom} onOpenChange={setOpenAddRoom}>
              <DialogTrigger>
                <Button
                  type="button"
                  variant="outline"
                  className="max-w-[150px]"
                >
                  <PencilIcon className="mr-2 h-4 w-4" />
                  Update Room
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[900px] w-[90%]">
                <DialogHeader className="px-2">
                  <DialogTitle>Update Room</DialogTitle>
                  <DialogDescription>
                    Make Changes to the Room
                  </DialogDescription>
                  <AddRoomFrom
                    hotel={hotel}
                    room={room}
                    handleDialougueOpen={handleDialougueOpen}
                  />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
