import React from "react";
import { Container, Item, List, ListMain, Main } from "./style";
import { foter } from "../../constants/footer";

const Footer = () => {
  return (
    <Main className="center">
      <Container className="space-bet">
        {foter.map((v, i) => (
          <List className="column-center" key={i}>
            <ListMain>{v.m}</ListMain>
            {v.p.map((val, i) => (
              <Item key={i}>{val}</Item>
            ))}
          </List>
        ))}
      </Container>
    </Main>
  );
};

export default Footer;