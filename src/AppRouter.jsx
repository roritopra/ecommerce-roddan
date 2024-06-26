import { Routes, Route } from "react-router-dom";
import { NavBar } from "./user/components/NavBar/NavBar";
import { LoginPage } from "./auth/pages/LoginPage/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage/RegisterPage";
import { HomePage } from "./user/pages/HomePage/HomePage";
import { ShopPage } from "./user/pages/ShopPage/ShopPage";
import { ItemDetailsPage } from "./user/pages/ItemDetailsPage/ItemDetailsPage";
import { ContactUsPage } from "./user/pages/ContactUsPage/ContactUsPage";
import { AboutUsPage } from "./user/pages/AboutUsPage/AboutUsPage";
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:productId" element={<ItemDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
