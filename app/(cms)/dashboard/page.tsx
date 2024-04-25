import AdminLayout from "@/components/AdminLayout";
import { Protect } from "@clerk/nextjs";
import React from "react";

const Dashboard = () => {
  return (
    <div className="">
      <AdminLayout>
        <Protect>
          <div className="py-32 text-4xl text-cent">DASHBOARD</div>
        </Protect>
      </AdminLayout>
    </div>
  );
};

export default Dashboard;
