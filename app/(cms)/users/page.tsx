import AdminLayout from "@/components/AdminLayout";
import { Protect } from "@clerk/nextjs";
import React from "react";

const Users = () => {
  return (
    <div>
      <Protect>
        <AdminLayout>This is User Section</AdminLayout>
      </Protect>
    </div>
  );
};

export default Users;
