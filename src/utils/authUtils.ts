import { jwtDecode } from "jwt-decode";

export const isValidToken = (token: string) => {
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000);
    return exp && exp > now;
  } catch (err) {
    console.error("Błąd podczas sprawdzania tokena:", err);
    return false;
  }
};

export const refreshToken = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/customer/refresh`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    if (!res) {
      throw new Error("Login failed");
    }

    return res;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
