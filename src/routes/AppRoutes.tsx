import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
