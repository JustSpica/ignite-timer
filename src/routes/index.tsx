import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "pages";

import { DefaultLayout } from "layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" />
      </Route>
    </Routes>
  );
}
