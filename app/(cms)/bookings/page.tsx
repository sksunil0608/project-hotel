import AdminLayout from "@/components/AdminLayout";
import { Protect } from "@clerk/nextjs";
import React from "react";

const Bookings = () => {
  return (
    <div>
      <Protect>
        <AdminLayout>This is Booking Section</AdminLayout>
      </Protect>
    </div>
  );
};

export default Bookings;
