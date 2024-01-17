import { Routes, Route } from "react-router-dom";
import { NavBar } from "./user/components/NavBar/NavBar";
import { HomePage } from "./user/pages/HomePage/HomePage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
