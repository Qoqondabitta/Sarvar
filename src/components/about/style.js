import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 50px;

  @media only screen and (max-width: 1100px) {
    gap: 30px;
    height: 500px;
  }

  @media only screen and (max-width: 900px) {
    height: 600px;
  }
  @media only screen and (max-width: 600px) {
    height: 1000px;
    margin-top: 50px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  gap: ${({ gap }) => gap};

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const AboutRight = styled.div`
  gap: 20px;
  width: 60%;



  @media only screen and (max-width: 900px){
    width: 100%;
    padding-inline: 20px;
  }
`;

export const VerticalBox = styled.div`
  gap: 20px;


  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const AboutText = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: 600;
`;

export const AboutBoxes = styled.div`
  border-radius: 25px;
  width: 400px;
  height: 200px;
  border: 1px solid black;
  gap: 10px;
  
  @media only screen and (max-width: 1100px) {
    width: 300px;
  }
  @media only screen and (max-width: 900px) {
    width: 350px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    /* padding-inline: 10px; */
    text-align: center;
  }
`;

export const AboutTitle = styled.p`
  font-size: 45px;
  line-height: 40px;
  font-weight: 600;
  color: #333;

  @media only screen and (max-width: 1100px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 35px;
    line-height: 35px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

export const Subtitle = styled(AboutTitle)`
  font-size: 20px;
  line-height: 25px;
  font-weight: 600;
`;

export const AboutImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 20px;
  object-fit: cover;

  @media only screen and (max-width: 1100px) {
    width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;

export const ImageWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 900px) {
    justify-content: center;
    padding-inline: 20px;
    width: 100%;
  }
`;
