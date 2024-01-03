import { Navigate, useLocation } from "react-router-dom";
import getCookie from "../../../Components/Cookie/GetCookie";

export default function AdminPrivateRoute({ children }) {
  // const admin = localStorage.getItem("admin_access_token");
  const admin = getCookie("admin_access_token");

  const location = useLocation();

  return admin ? (
    children
  ) : (
    <Navigate to="/admin/login" replace state={{ from: location }} />
  );
}
