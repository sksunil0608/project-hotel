"use client";

import useBookRoom from "@/hooks/useBookRoom";
import React, { useState } from "react";
import RoomCard from "../room/RoomCard";
import RoomPaymentForm from "./RoomPaymentForm";

const BookRoomClient = () => {
  const { bookingRoomData, clientSecret } = useBookRoom();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSuccess = (value: boolean) => {
    setPaymentSuccess(value);
  };
  return (
    <div className="max-w-[700px] mx-auto">
      {clientSecret && bookingRoomData && (
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">
              Complete Paymetn to reserve this room
            </h3>
            <div>
              <RoomCard room={bookingRoomData.room} />
            </div>

            <div>
              <RoomPaymentForm
                clientSecret={clientSecret}
                handlePaymentSuccess={handlePaymentSuccess}
              />
            </div>
          </div>
        </div>
      )}

      {/* Load Payment Promise */}
    </div>
  );
};

export default BookRoomClient;
