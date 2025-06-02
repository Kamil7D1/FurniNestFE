export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export type AuthState = {
  accessToken: string | null;
  customer: Customer | null;
  isLogged: boolean;
  updateAuthState: (token: string) => void;
  logout: () => void;
};
