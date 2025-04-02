import { createContext } from "react";

interface IAuthContext {
  email: string;
  role: string;
  accessToken: string;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);
