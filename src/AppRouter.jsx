import { Routes, Route } from "react-router-dom";
import { HomePage } from "./user/pages/HomePage";

export function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}
