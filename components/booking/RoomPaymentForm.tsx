import useBookRoom from "@/hooks/useBookRoom";
import React, { useEffect, useState } from "react";

interface RoomPaymentFormProps {
  clientSecret: string;
  handlePaymentSuccess: (value: boolean) => void;
}
const RoomPaymentForm = ({
  clientSecret,
  handlePaymentSuccess,
}: RoomPaymentFormProps) => {
  const { bookingRoomData, resetBookRoom } = useBookRoom();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if(!paymentplatform){
    //     return
    // }
    if (!clientSecret) {
      return;
    }
    handlePaymentSuccess(false);
    setIsLoading(false);
  }, []);
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <h2>Billing Address</h2>
      {/* Payment element */}

      <div className="">
        Your Booking summary
        <div>You will check in on </div>
        <div>You will check out on</div>
        <div>You will be served breast,dinner and ...</div>
        <div className="">total Price</div>
        {/* Confirm Payment then redirect to admin */}
        {isLoading && (
          <div>
            Please Stay on this page... untill your payment is processed
          </div>
        )}
      </div>
    </form>
  );
};

export default RoomPaymentForm;
