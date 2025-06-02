import { loginRequest } from "../services/customerService";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useCustomer = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is undefined");
  }

  const { updateAuthState } = authContext;

  const loginMutate = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      const { accessToken } = data;
      updateAuthState(accessToken);
      navigate("/");
    },
    onError: (err) => {
      console.error("Login error:", err);
    },
  });

  return { login: loginMutate.mutate };
};
