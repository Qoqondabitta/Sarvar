import React from "react";
import {
  CertificateButton,
  CertificateContent,
  CertificateTitle,
  CertificateWrappers,
  Container,
  Main,
} from "./style";
import "./certificate.css";
import { AboutText, AboutTitle } from "../about/style";
import { certificate } from "../../constants/certificate";

const Certificate = () => {
  return (
    <Main className="column-center">
      <Container gap="10px" className="column-center">
        <AboutText>Browse My Certificates</AboutText>
        <AboutTitle>Certificates</AboutTitle>
      </Container>
      <Container className="center">
        {certificate.map((v, i) => (
          <CertificateWrappers className="cert" bg={v.imge}>
            <CertificateContent className="col-start-end topup" key={i}>
              <CertificateTitle>{v.t}</CertificateTitle>
              <CertificateButton className="center">See Certificate</CertificateButton>
            </CertificateContent>
          </CertificateWrappers>
        ))}
      </Container>
    </Main>
  );
};

export default Certificate;
