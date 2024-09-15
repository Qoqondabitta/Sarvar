import React, { useState } from "react";
import {
  CertificateButton,
  CertificateContent,
  CertificateTitle,
  CertificateWrappers,
  Container,
  Main,
  Topup,
  TopupImage,
} from "./style";
import "./certificate.css";
import { AboutText, AboutTitle } from "../about/style";
import { certificate } from "../../constants/certificate";

const Certificate = () => {
  const [show, setShow] = useState(false);
  const [digit, setDigit] = useState(null);
  const [objimg, setObjimg] = useState({})
  const changeShow = (dig) => {
    setShow(!show);
  };
  const changeDigit = (dig) => {
    setDigit(dig);
    
  };
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
              {show && (
                <Topup className="center" onClick={changeShow}>
                  <TopupImage
                    onClick={() => changeShow(true)}
                    src={v.id == i + 1 && v.ti}
                  />
                </Topup>
              )}
              <CertificateTitle>{v.t}</CertificateTitle>
              <CertificateButton
                onClick={() => {
                  changeDigit(v.id);
                  changeShow();
                }}
                className="center"
              >
                See Certificate
              </CertificateButton>
            </CertificateContent>
          </CertificateWrappers>
        ))}
      </Container>
    </Main>
  );
};

export default Certificate;
