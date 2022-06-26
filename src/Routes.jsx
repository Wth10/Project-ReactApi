import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/App";
import Search from "./pages/Search";
import Erro404 from "./mistakes/Erro404";

export default function Browser() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Erro404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
