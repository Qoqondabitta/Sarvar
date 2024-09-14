import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  background-color: black;
  padding-block: 50px;
  padding-inline: 20px;
  margin-top: 100px;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;

  @media only screen and (max-width: 600px){
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  gap: 10px;
`;

export const ListMain = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const Item = styled.li`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
