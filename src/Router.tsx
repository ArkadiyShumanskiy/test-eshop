import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
