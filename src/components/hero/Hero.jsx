import React from "react";
import {
  Main,
  Container,
  HeroImage,
  HeroRight,
  HeroText,
  HeroName,
  HeroTitle,
  Box,
  HeroButtons,
} from "./style";
import sarvar from "../../assets/sarvar.jpg";
// =============Icons=================
import { IoLogoLinkedin } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
// =============Icons=================

const Hero = () => {
  return (
    <Main className="center">
      <Container className="center">
        <HeroImage src={sarvar} />
        <HeroRight className="column-center">
          <HeroText>Hello, I'm</HeroText>
          <HeroName>Turgunaliev Sarvar</HeroName>
          <HeroTitle>Dilligent Financier with Big Potential</HeroTitle>
          <Box className="center">
            <HeroButtons className="center">Download CV</HeroButtons>
            <HeroButtons className="center" black="true">
              Contact Info
            </HeroButtons>
          </Box>
          <Box className="center">
            <IoLogoLinkedin size="1.5rem" color="blue" />
            <BiLogoTelegram size="1.4rem" color="blue" />
            <FaXTwitter size="1.4rem" color="black" />
            <FaPhoneAlt size="1.4rem" color="yellowgreen" />
          </Box>
        </HeroRight>
      </Container>
    </Main>
  );
};

export default Hero;
