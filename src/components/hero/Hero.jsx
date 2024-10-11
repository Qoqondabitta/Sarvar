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
import { motion } from "framer-motion";
import "./hero.css";

const ContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const kidVariants = {hidden:{opacity:0}, show:{opacity:1}}

const Hero = () => {
  return (
    <Main className="center">
      <Container className="center">
        <motion.div
          // variants={ContainerVariants}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
          className="center"
        >
          <HeroImage src={sarvar} />
        </motion.div>
        <motion.div
          variants={ContainerVariants}
          initial="hidden"
          animate="show"
          className="column-center hero-right"
        >
          <motion.div variants={kidVariants} className="center">
            <HeroText>Hello, I'm</HeroText>
          </motion.div>
          <motion.div variants={kidVariants} className="center">
            <HeroName>Turgunaliev Sarvar</HeroName>
          </motion.div>
          <motion.div variants={kidVariants} className="center">
            <HeroTitle>Dilligent Financier with Big Potential</HeroTitle>
          </motion.div>
          <motion.div variants={kidVariants} className="center box">
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
          </motion.div>
          <motion.div variants={kidVariants} className="center box">
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
            <a href="tel:+998909621180" style={{ textDecoration: "none" }}>
              <FaPhoneAlt size="1.4rem" color="yellowgreen" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Main>
  );
};

export default Hero;
