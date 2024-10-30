import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  gap: 70px;
  margin-block: 100px;

  @media only screen and (max-width: 600px) {
    gap: 30px;
    margin-top: 50px;
  }
  @media only screen and (max-width: 400px) {
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

export const CertificateContent = styled.div``;

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
    width: 80%;
    height: 400px;
  }

  @media only screen and (max-width: 400px) {
    width: 90%;
    height: 400px;
    justify-content: flex-end;
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

  &:hover {
    transform: scale(0.9);
  }
`;

export const Topup = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 20000;
`;

export const TopupImage = styled.img`
  width: 300px;
  height: 400px;
  z-index: 200000;
  object-fit: cover;
  object-position: center;

  @media only screen and (max-width: 600px) {
    width: 80%;
    height: 450px;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
  }
`;
