import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/Layout";

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  </BrowserRouter>
);
