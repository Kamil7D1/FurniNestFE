import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "../components/Footer";

export const Layout: React.FC = () => {
  return (
    <div className="pd-10vh">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
