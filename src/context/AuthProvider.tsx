import { useState, ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<
    | {
        email: string;
        role: string;
        accessToken: string;
      }
    | undefined
  >(undefined);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
