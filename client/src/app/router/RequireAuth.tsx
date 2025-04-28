import { Navigate, Outlet, useLocation } from "react-router";
import { useAccount } from "../../lib/hooks/useAccount";

function RequireAuth() {
  const { currentUser, loadingUserInfo } = useAccount();
  const location = useLocation();

  if (loadingUserInfo) return <div>Loading...</div>;

  if (!currentUser) return <Navigate to="/login" state={{ from: location }} />;

  return <Outlet />;
}

export default RequireAuth;
