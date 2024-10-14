import React, { useEffect, useRef } from "react";
import {
  AboutBoxes,
  AboutImage,
  AboutRight,
  AboutText,
  AboutTitle,
  Container,
  ImageWrapper,
  Main,
  Subtitle,
  VerticalBox,
} from "./style";
import { BsSuitcaseLgFill } from "react-icons/bs";
import aboutimage from "../../assets/sarvar.jpg";
import { PiStudentFill } from "react-icons/pi";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import "./about.css";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const textControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const titleOneValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  // const titleTwoValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  useEffect(() => {
    if (isInView) {
      textControls.start("visible");
    }
  }, [isInView]);
  return (
    <Main id="about">
      <Container className="column-center" gap="10px" ref={containerRef}>
        <motion.p className="about-text" style={{ translateX: titleOneValue }}>
          Get To Know More
        </motion.p>
        <motion.h2
          className="about-title"
          animate={textControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.3 }}
        >
          About Me
        </motion.h2>
      </Container>
      <Container className="center" gap="50px">
        <ImageWrapper>
          <AboutImage src={aboutimage} />
        </ImageWrapper>
        <AboutRight className="column-center">
          <VerticalBox className="center">
            <AboutBoxes className="column-center">
              <BsSuitcaseLgFill color="black" size="1.5rem" />
              <Subtitle>Internship</Subtitle>
              <AboutText>3+ months</AboutText>
              <AboutText>Financial Accountant</AboutText>
            </AboutBoxes>
            <AboutBoxes className="column-center">
              <PiStudentFill color="black" size="1.7rem" />
              <Subtitle>Education</Subtitle>
              <AboutText>195 High School</AboutText>
              <AboutText>IELTS/SAT in BRO Educational Center</AboutText>
            </AboutBoxes>
          </VerticalBox>
          <AboutText>
            A dilligent IELTS/SAT/Math/English Intructor with almost 2 years of
            experiece who mentored almost 150 students and managed to qualify
            them to get sufficient scores in global test organizations.
            Specialized in teaching school students and preparing them for
            applying to abroad top-ranked universities by guiding them in how to
            write strong motivational essays with their background and bulding
            perfect CV's showcasing their skills and strong features.
          </AboutText>
        </AboutRight>
      </Container>
    </Main>
  );
};

export default About;
