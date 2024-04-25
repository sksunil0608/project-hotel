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
  Wand,
  Wifi,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";

import AddRoomForm from "./AddRoomForm";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { DatePickerWithRange } from "../DateRangePicker";
import { DateRange } from "react-day-picker";
import {
  differenceInCalendarDays,
  differenceInHours,
  eachDayOfInterval,
} from "date-fns";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useAuth } from "@clerk/nextjs";
import useBookRoom from "@/hooks/useBookRoom";
import calculateTimeDifference from "@/services/calculateTimeDifference";
import Razorpay from "razorpay";
import { User, currentUser } from "@clerk/nextjs/server";

interface AddRoomFormProps {
  hotel: Hotel & {
    rooms: Room[];
  };
  room: Room;
  bookings?: Booking[];
}

const RoomCard = ({ hotel, room, bookings = [] }: AddRoomFormProps) => {
  const { setRoomData, paymentId, setPaymentId, orderId, setOrderId } =
    useBookRoom();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const [openAddRoom, setOpenAddRoom] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>();
  const [time, setTime] = useState<{
    from: string | undefined;
    to: string | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [totalPrice, setTotalPrice] = useState(room.roomPrice);
  const [includeDinner, setIncludeDinner] = useState(false);
  const [includeLunch, setIncludeLunch] = useState(false);
  const [includeBreakFast, setIncludeBreakFast] = useState(false);
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(1);
  const [bookingIsLoading, setBookingIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isRoomDeleting, setIsRoomDeleting] = useState(false);
  const { toast } = useToast();
  const { userId } = useAuth();

  const router = useRouter();
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_ID;
  if (!keyId) {
    toast({
      variant: "destructive",
      description: "Payment not authorized",
    });
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await currentUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const calculatePrice = () => {
      if (date?.from && date?.to && time?.from && time?.to) {
        const dayCount = differenceInCalendarDays(date.to, date.from);
        setDays(dayCount);

        const timeCount = calculateTimeDifference(time.to, time.from);
        if (timeCount === null) {
          toast({
            variant: "destructive",
            description: "Select a valid time range",
          });
          return;
        }
        setHours(timeCount);

        let totalPrice = 0;

        if (dayCount > 0) {
          // Calculate price based on full days
          totalPrice += days * room.roomPrice;

          if (includeBreakFast && room.breakFastPrice) {
            totalPrice += days * room.breakFastPrice;
          }
          if (includeLunch && room.lunchPrice) {
            totalPrice += days * room.lunchPrice;
          }
          if (includeDinner && room.dinnerPrice) {
            totalPrice += days * room.dinnerPrice;
          }
        } else {
          // Calculate price based on hourly rate for same-day stays
          totalPrice += hours * room.perHourPrice;

          if (includeBreakFast && room.breakFastPrice) {
            totalPrice += room.breakFastPrice;
          }
          if (includeLunch && room.lunchPrice) {
            totalPrice += room.lunchPrice;
          }
          if (includeDinner && room.dinnerPrice) {
            totalPrice += room.dinnerPrice;
          }
        }

        setTotalPrice(totalPrice);
      } else {
        toast({
          variant: "destructive",
          description: "Ensure you have selected Date and Time",
        });
        setTotalPrice(room.roomPrice);
      }
    };

    calculatePrice();
  }, [
    date?.from,
    date?.to,
    time.from,
    time.to,
    days,
    hours,
    room.dinnerPrice,
    room.roomPrice,
    room.breakFastPrice,
    room.perHourPrice,
    room.lunchPrice,
    includeBreakFast,
    includeLunch,
    includeDinner,
    toast,
  ]);

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    const roomBookings = bookings.filter(
      (booking) => booking.roomId === room.id
    );

    roomBookings.forEach((booking) => {
      const range = eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });

      dates = [...dates, ...range];
    });
    return dates;
  }, [bookings]);
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
  const handleBookRoom = async () => {
    if (!userId) {
      toast({
        variant: "destructive",
        description: "Oops! Make sure you are logged In",
      });
      return router.push("/sign-in");
    }

    if (!hotel.userId) {
      toast({
        variant: "destructive",
        description: "Something went wrong! Refresh the page",
      });
      return;
    }

    if (date?.from && date?.to && time?.from && time?.to) {
      setBookingIsLoading(true);
      const bookingRoomData = {
        room,
        totalPrice,
        breakFastIncluded: includeBreakFast,
        lunchIncluded: includeLunch,
        dinnerIncluded: includeDinner,
        startDate: date.from,
        endDate: date.to,
        startTime: time.from,
        endTime: time.to,
      };

      setRoomData(bookingRoomData);

      try {
        const response = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            booking: {
              hotelOwnerId: hotel.userId,
              Hotel: { connect: { id: hotel.id } },
              Room: { connect: { id: room.id } },
              startDate: date.from,
              endDate: date.to,
              startTime: date.from,
              endTime: date.to,
              lunchIncluded: includeLunch,
              dinnerIncluded: includeDinner,
              breakFastIncluded: includeBreakFast,
              totalPrice: totalPrice,
            },
            orderId: orderId,
          }),
        });

        if (response.status === 401) {
          router.push("/login");
          return;
        }

        const order = await response.json();
        if (order && order.id) {
          setOrderId(order.id);

          const orderData = {
            key_id: keyId as string,
            amount: totalPrice,
            currency: "INR",
            order_id: order.id,
            handler: function (response: any) {
              console.log(response);
              // Handle successful payment response
              toast({
                variant: "success",
                description: "Payment Successfull",
              });
              // Redirect or perform further actions after successful payment
              router.push(`/book-room/${orderId}`);
            },
            prefill: {
              name: user?.firstName || "",
              email: user?.emailAddresses[0].emailAddress || "",
            },
          };
        } else {
          // Existing order with successful payment
          // Handle successful payment (optional: display confirmation message)
          toast({
            variant: "success",
            description: "Booking confirmed!",
          });
        }
      } catch (error: any) {
        console.log(error);
        toast({
          variant: "destructive",
          description: `Error ${error.message}`,
        });
      } finally {
        setBookingIsLoading(false);
      }
    } else {
      toast({
        variant: "destructive",
        description: "Oops! Date or Time not selected",
      });
    }
  };

  const isRoomDetailsPage = pathname.includes("rooms");
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
        <div className="flex justify-center gap-4">
          <div>
            Room Price: <span className="font-bold">₹{room.roomPrice}</span>
            <span className="text-xs"> /24 Hours</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center">
        <div className="w-full">
          {isRoomDetailsPage ? (
            <div className="">
              {/* Grid 1 */}
              <div>
                <div className="mb-4">Select the date range of your stay!</div>
                <DatePickerWithRange
                  date={date}
                  setDate={setDate}
                  time={time}
                  setTime={setTime}
                  disabledDates={disabledDates}
                />
              </div>
              {/* Grid 2 */}
              <div>
                <div className="mt-4 mb-2">Do you Want Food?</div>
                <div className="grid grid-cols-2 md:grid cols-3">
                  {room.breakFastPrice > 0 && (
                    <div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="breakFast"
                          onCheckedChange={(value) =>
                            setIncludeBreakFast(!!value)
                          }
                        />
                        <label htmlFor="breakFast">Include BreakFast</label>
                      </div>
                    </div>
                  )}
                  {room.lunchPrice > 0 && (
                    <div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="lunch"
                          onCheckedChange={(value) => setIncludeLunch(!!value)}
                        />
                        <label htmlFor="lunch">Include Lunch</label>
                      </div>
                    </div>
                  )}
                  {room.dinnerPrice > 0 && (
                    <div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="dinner"
                          onCheckedChange={(value) => setIncludeDinner(!!value)}
                        />
                        <label htmlFor="dinner">Include Dinner</label>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="py-4 w-full text-center">
                Total Price: <span className="font-bold">{totalPrice}</span> for
                <span className="text-bold">{days} Days</span>
              </div>
              <Button
                className="w-full"
                disabled={bookingIsLoading}
                onClick={() => {
                  handleBookRoom();
                }}
              >
                {bookingIsLoading ? (
                  <Loader2 className="mr-2 w-4 h-4" />
                ) : (
                  <Wand className="mr-2 w-4 h-4" />
                )}

                {bookingIsLoading ? "Loding" : "Book Room"}
              </Button>
            </div>
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
                    <AddRoomForm
                      hotel={hotel}
                      room={room}
                      handleDialougueOpen={() => ""}
                    />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
