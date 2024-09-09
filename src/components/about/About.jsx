import React from "react";
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

const About = () => {
  return (
    <Main>
      <Container className="column-center" gap="10px">
        <AboutText>Get To Know More</AboutText>
        <AboutTitle>About Me</AboutTitle>
      </Container>
      <Container className="center" gap="50px">
        <ImageWrapper>
          <AboutImage src={aboutimage} />
        </ImageWrapper>
        <AboutRight className="column-center">
          <VerticalBox className="center">
            <AboutBoxes className="column-center">
              <BsSuitcaseLgFill color="black" size="1.5rem" />
              <Subtitle>Experience</Subtitle>
              <AboutText>1+ year</AboutText>
              <AboutText>English and Math Instructor</AboutText>
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
