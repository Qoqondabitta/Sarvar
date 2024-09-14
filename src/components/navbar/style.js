import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  background-color: black;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    padding-top: 20px;
  }
`;

export const List = styled.div`
  gap: 20px;
  list-style-type: none;

  @media only screen and (max-width: 800px) {
    gap: 15px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Burger = styled.div`
  display: none;
  padding: 20px;
  background-color: white;
  position: absolute;
  color: black;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;

  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;

export const BurgerList = styled.div`
  gap: 15px;
  list-style-type: none;
  display: none;
  width: 100%;

  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;

export const NavItems = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: white;
  line-height: 19px;
  font-weight: 400;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 17px;
    color: black;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const Name = styled.h2`
  font-size: 30px;
  line-height: 31px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  text-transform: capitalize;

  @media only screen and (max-width: 800px) {
    font-size: 27px;
    line-height: 28px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    width: fit-content;
    line-height: 25px;
  }
`;
