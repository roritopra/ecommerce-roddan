import { Routes, Route } from "react-router-dom";
import { NavBar } from "./user/components/NavBar/NavBar";
import { HomePage } from "./user/pages/HomePage/HomePage";
import { ShopPage } from "./user/pages/ShopPage/ShopPage";
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
}
