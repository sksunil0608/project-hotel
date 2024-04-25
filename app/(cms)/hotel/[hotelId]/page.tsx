import AdminLayout from "@/components/AdminLayout";
import AuthenticationError from "@/components/AuthenticationError";
import AuthorizationError from "@/components/AuthorizationError";
import PermissionError from "@/components/AuthorizationError";
import AddHotelForm from "@/components/hotel/AddHotelForm";
import { getHotelById } from "@/services/getHotelById";
import { Protect } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

interface HotelPageProps {
  params: {
    hotelId: string;
  };
}

const Hotel = async ({ params }: HotelPageProps) => {
  const hotel = await getHotelById(params.hotelId);
  const { userId } = auth();

  if (!userId)
    return (
      <div>
        <AuthorizationError />
      </div>
    );
  if (hotel && hotel.userId !== userId)
    return (
      <div>
        <AuthenticationError />
      </div>
    );
  return (
    <div>
      <AdminLayout>
        <Protect
          permission="org:hotel:create"
          fallback={
            <>
              <PermissionError />
            </>
          }
        >
          <AddHotelForm hotel={hotel} />
        </Protect>
      </AdminLayout>
    </div>
  );
};

export default Hotel;
