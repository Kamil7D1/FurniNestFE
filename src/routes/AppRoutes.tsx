import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Registration } from "../pages/Registration";
import { Orders } from "../sections/Orders";
import { Favourite } from "../sections/Favourite";
import { AccountSettings } from "../sections/AccountSettings";
import { ProtectedCustomerRoute } from "./ProtectedCustomerRoute";
import { ProductDetails } from "../pages/ProductDetails";
import { Cart } from "../pages/Cart";

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="product" element={<ProductDetails />}></Route>
        <Route element={<ProtectedCustomerRoute />}>
          <Route path="profile/" element={<Profile />}>
            <Route index path="orders" element={<Orders />}></Route>
            <Route path="favourite" element={<Favourite />}></Route>
            <Route path="account-settings" element={<AccountSettings />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
