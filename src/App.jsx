import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Erro404 from "./pages/mistakes/Erro404";

export default function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/details/:id" element={<Details />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Erro404 />} />
      </Route>
    </Routes>
  );
}
