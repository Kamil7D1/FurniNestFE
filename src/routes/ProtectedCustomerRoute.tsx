import { Outlet, Navigate } from "react-router-dom";
import { isValidToken, refreshToken } from "../utils/authUtils";
import { useAuth } from "../hooks/useAuth";

export const ProtectedCustomerRoute = () => {
  const authContext = useAuth();

  const { accessToken, updateAuthState } = authContext;

  // if (loading) return null;

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  const isValid = isValidToken(accessToken);

  if (!isValid) {
    const newAccessToken = refreshToken();
    //updateAuthState(newAccessToken);
    console.log("newAccessToken", newAccessToken);
  }

  return isValid ? <Outlet /> : <Navigate to="/login" replace />;
};
