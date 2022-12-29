import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components/Header";

import { RootDefaultLayout } from "./styles";

export function DefaultLayout() {
  return (
    <RootDefaultLayout>
      <Header />
      <Outlet />
    </RootDefaultLayout>
  );
}
