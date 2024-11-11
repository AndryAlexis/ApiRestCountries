"use client";

import { useTheme } from "next-themes";

import { NavMenu, NavMenuItem } from "./NavMenu";
import { Switch } from "./Switch";
import { Container } from "./Container";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Container>
          <a className="navbar-brand fw-bold fs-6" href="/">
            Where in the world?
          </a>

          <NavMenu>
            <NavMenuItem>
              <Switch setTheme={handleThemeChange} />
            </NavMenuItem>
          </NavMenu>
        </Container>
      </nav>
    </header>
  );
};

export default Header;