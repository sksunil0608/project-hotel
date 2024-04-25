import { auth } from "@clerk/nextjs/server";
import AdminSidebar from "./AdminSidebar";
import AuthorizationError from "./AuthorizationError";
import UserSidebar from "./UserSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const user = auth();
  const isAdmin = user.orgRole === "org:admin";
  if (!user.userId)
    return (
      <>
        <AuthorizationError />
      </>
    );
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {user.userId && isAdmin ? (
            <>
              <AdminSidebar />
            </>
          ) : (
            <>
              <UserSidebar />
            </>
          )}
        </div>
        <div>Content title be here</div>
      </div>
      <div className="pt-10">{children}</div>
    </div>
  );
};

export default AdminLayout;
