import React from "react";
import { IconContext } from "react-icons/lib";
import { WiSunrise } from "react-icons/wi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavbarLeftSide,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <IconContext.Provider value={{ color: "#FCEBB6" }}>
        <NavbarContainer>
          <NavbarLeftSide>
            <WiSunrise style={{ height: "100%", width: "50%" }} />
            <NavLogo to="/">Weather APP</NavLogo>
          </NavbarLeftSide>
        </NavbarContainer>
      </IconContext.Provider>
    </Nav>
  );
};

export default Navbar;
