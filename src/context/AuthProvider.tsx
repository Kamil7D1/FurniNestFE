import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";
import { Customer, AuthState } from "../types/auth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);

  const isLogged = !!accessToken && !!customer;

  const updateAuthState = (token: string) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);

    const decoded: any = jwtDecode(token);
    setCustomer({
      id: decoded.id,
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email,
      role: decoded.role,
    });

    const delay = decoded.exp * 1000 - Date.now() - 60_000;
    if (delay > 0) {
      setTimeout(refreshToken, delay);
    }
  };

  const refreshToken = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/customer/refresh`,
        {
          method: "GET",
          credentials: "include",
        },
      );
      const data = await res.json();
      updateAuthState(data.accessToken);
      console.log("refreshToken");
    } catch {
      logout();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) updateAuthState(token);
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
    setCustomer(null);
  };

  const authState: AuthState & { updateAuthState: (t: string) => void } = {
    accessToken,
    customer,
    isLogged,
    updateAuthState,
    logout,
  };

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
