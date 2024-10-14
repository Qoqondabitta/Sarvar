import React from "react";
import { Container, Item, List, Main } from "./style";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { experience } from "../../constants/experience";
import { AboutTitle } from "../about/style";

const Experience = () => {
  return (
    <Main className="column-center" id="experience">
      <AboutTitle>Experience</AboutTitle>
      <Container className="center">
        <VerticalTimeline>
          {experience.map((v, i) => (
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
              <List className="col-start-start">
                {v.l.map((val, i) => (
                  <Item key={i}>{val}</Item>
                ))}
              </List>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </Main>
  );
};

export default Experience;
