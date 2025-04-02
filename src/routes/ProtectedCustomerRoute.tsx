import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const auth = useContext(AuthContext);

  return auth?.email && auth?.role && auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};
