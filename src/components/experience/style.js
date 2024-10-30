import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  margin-top: 100px;

  @media only screen and (max-width: 1100px) {
    height: 1000px;
    margin-top: 50px;
    gap: 30px;
  }
  @media only screen and (max-width: 900px) {
    height: 1050px;
    margin-top: 250px;
    gap: 0px;
  }
  @media only screen and (max-width: 600px) {
    height: 1350px;
    margin-top: 150px;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 150px;
    gap: 80px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;

  @media only screen and (max-width: 1100px) {
    height: 850px;
  }
  @media only screen and (max-width: 900px) {
    height: 1000px;
  }
  @media only screen and (max-width: 600px) {
    height: 1260px;
  }
`;

export const List = styled.ul`
  gap: 0px;
  margin-top: 15px;
  padding-left: 10px;
`;

export const Item = styled.li`
  font-size: 14px;
  line-height: 15px;
  font-weight: bold;
`;
