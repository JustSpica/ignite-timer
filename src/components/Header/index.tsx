import React from "react";
import { NavLink } from "react-router-dom";
import { Timer, Scroll } from "phosphor-react";

import logoIgnite from "assets/svg/logo-ignite-timer.svg";

import { RootHeader } from "./styles";

export function Header() {
  return (
    <RootHeader>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </RootHeader>
  );
}
