import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  gap: 70px;
  margin-block: 100px;

  @media only screen and (max-width: 600px){
    gap: 30px;
    margin-block: 50px;
  }
  @media only screen and (max-width: 350px){
    margin-top: 150px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  gap: ${({ gap }) => (gap ? gap : "30px")};

  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 600px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const CertificateContent = styled.div`
`;

export const CertificateWrappers = styled.div`
  width: 250px;
  height: 300px;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media only screen and (max-width: 600px){
    width: 90%;
    height: 400px;
  }
`;

export const CertificateTitle = styled.h3`
  font-weight: 600;
  width: 100%;
`;

export const CertificateButton = styled.button`
  border: 1px solid white;
  color: white;
  font-weight: 600;
  background-color: transparent;
  width: 120px;
  height: 40px;
  border-radius: 30px;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover{
    transform: scale(0.9);
  }
`;
