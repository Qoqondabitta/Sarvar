import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  gap: 100px;
  height: 90vh;
  text-align: center;

  @media only screen and (max-width: 1100px){
    height: 500px;
  }
  @media only screen and (max-width: 900px) {
    justify-content: space-around;
    gap: 0px;
    height: 400px;
    margin-top: 50px;
    padding-left: 20px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 50px;
    height: fit-content;
    margin-top: 50px;
  }
`;

export const HeroImage = styled.img`
  border-radius: 50%;
  width: 350px;
  height: 350px;
  object-fit: cover;
  object-position: center;

  @media only screen and (max-width: 900px) {
    width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;

export const HeroRight = styled.div`
  gap: 20px;
`;

export const HeroName = styled.h2`
  font-size: 40px;
  line-height: 41px;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 31px;
  }
`;

export const HeroText = styled.p`
  font-size: 16px;
  line-height: 17px;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 15px;
  }
`;
export const HeroTitle = styled.h3`
  font-size: 30px;
  line-height: 31px;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 25px;
  }
`;

export const Box = styled.div`
  gap: 20px;
`;

export const IconLink = styled.a`
  text-decoration: none;
`;

export const HeroButtons = styled.button`
  background-color: ${({ black }) => (black ? "black" : "white")};
  color: ${({ black }) => (black ? "white" : "black")};
  border: ${({ black }) => (black ? "1px solid white" : "1px solid black")};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s linear;
  width: 150px;
  height: 45px;
  font-weight: 600;

  &:hover {
    transform: scale(0.75);
  }

  @media only screen and (max-width: 600px) {
    width: 120px;
    height: 40px;
  }
`;
