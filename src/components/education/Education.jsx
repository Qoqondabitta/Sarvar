import React from "react";
import { Container, Main } from "./style";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AboutTitle } from "../about/style";
import { education } from "../../constants/education";

const Education = () => {
  return (
    <Main className="column-center">
      <AboutTitle>Education</AboutTitle>
      <Container className="center">
        <VerticalTimeline>
          {education.map((v, i) => (
            <VerticalTimelineElement
              contentStyle={{ border: "1px solid black", color: "black" }}
              icon={v.i}
              key={i}
              iconStyle={{
                color: "black",
                background: "white",
                border: "1px solid black",
              }}
            >
              <h2 style={{ color: "black" }}>{v.j}</h2>
              <h4 style={{ color: "grey" }}>{v.p}</h4>
              <p style={{ fontWeight: "600" }}>{v.l}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </Main>
  );
};

export default Education;
