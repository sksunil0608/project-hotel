import AdminLayout from "@/components/AdminLayout";
import AuthorizationError from "@/components/AuthorizationError";
import BookRoomClient from "@/components/booking/BookRoomClient";
import { Protect } from "@clerk/nextjs";
import React from "react";

const BookRoom = () => {
  return (
    <div className="p-8">
      <AdminLayout>
        <Protect
          permission="org:booking:access"
          fallback={
            <>
              <AuthorizationError />
            </>
          }
        >
          <BookRoomClient />
        </Protect>
      </AdminLayout>
    </div>
  );
};

export default BookRoom;
