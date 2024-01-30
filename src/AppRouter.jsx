import { Routes, Route } from "react-router-dom";
import { NavBar } from "./user/components/NavBar/NavBar";
import { LoginPage } from "./user/pages/LoginPage/LoginPage";
import { RegisterPage } from "./user/pages/RegisterPage/RegisterPage";
import { HomePage } from "./user/pages/HomePage/HomePage";
import { ShopPage } from "./user/pages/ShopPage/ShopPage";
import { ItemDetailsPage } from "./user/pages/ItemDetailsPage/ItemDetailsPage";
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/item" element={<ItemDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
