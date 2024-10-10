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
import sarvar from "../../assets/profilephoto.jpg";
// =============Icons=================
import { IoLogoLinkedin } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
// =============Icons=================
import resume from "../../assets/Resume of Turgunaliev Sarvar.pdf";

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
            <a
              style={{ textDecoration: "none" }}
              href={resume}
              download="Turgunaliev_Sarvar_CV.pdf"
            >
              <HeroButtons className="center">Download CV</HeroButtons>
            </a>
            <a href="#footer" style={{ textDecoration: "none" }}>
              <HeroButtons className="center" black="true">
                Contact Info
              </HeroButtons>
            </a>
          </Box>
          <Box className="center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sarvar-turgunaliev-648001331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              style={{ textDecoration: "none" }}
            >
              <IoLogoLinkedin size="1.5rem" color="blue" />
            </a>
            <a
              target="_blank"
              href="https://t.me/turgunalievsarvar"
              style={{ textDecoration: "none" }}
            >
              <BiLogoTelegram size="1.4rem" color="blue" />
            </a>
            <a
              target="_blank"
              href="https://x.com/iamsarvarjon"
              style={{ textDecoration: "none" }}
            >
              <FaXTwitter size="1.4rem" color="black" />
            </a>
            <a
              href="tel:+998909621180"
              style={{ textDecoration: "none" }}
            >
              <FaPhoneAlt size="1.4rem" color="yellowgreen" />
            </a>
          </Box>
        </HeroRight>
      </Container>
    </Main>
  );
};

export default Hero;
