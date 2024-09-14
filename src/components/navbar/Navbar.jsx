import React, { useState } from "react";
import {
  Burger,
  BurgerList,
  Container,
  List,
  Main,
  Name,
  NavItems,
} from "./style";
import { navbarItems } from "../../constants/navbar";
// =============Icons=================
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoLinkedin } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
// =============Icons=================
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const chageShow = () => {
    setShow(!show);
  };
  return (
    <Main className="center">
      <Container className="space-bet">
        <Name className="center">Sarvar Turgunaliev</Name>
        <List className="center">
          {navbarItems.map((v, i) => (
            <NavItems key={i}>{v.title}</NavItems>
          ))}
        </List>
        {show ? (
          <Burger className="col-start-space">
            <IoMdClose onClick={chageShow} color="black" />
            <BurgerList className="col-start">
              {navbarItems.map((v, i) => (
                <NavItems key={i}>{v.title}</NavItems>
              ))}
            </BurgerList>
            <BurgerList className="center">
              <IoLogoLinkedin color="blue" size="1.5rem" />
              <BiLogoTelegram color="blue" size="1.4rem" />
              <FaXTwitter color="black" size="1.3rem" />
              <FaPhoneAlt color="yellowgreen" size="1.3rem" />
            </BurgerList>
          </Burger>
        ) : (
          <RxHamburgerMenu
              color="white"
              size="1.4rem"
            className="burger"
            onClick={chageShow}
          />
        )}
      </Container>
    </Main>
  );
};

export default Navbar;
