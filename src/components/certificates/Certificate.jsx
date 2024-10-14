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
import { motion } from "framer-motion";

const Certificate = () => {
  const [show, setShow] = useState(false);
  const [digit, setDigit] = useState(0);
  const [objimg, setObjimg] = useState({});
  const changeShow = (dig) => {
    setShow(!show);
  };
  const changeDigit = (dig) => {
    setDigit(dig);
  };
  return (
    <Main className="column-center" id="certificate">
      <Container gap="10px" className="column-center">
        <AboutText>Browse My Certificates</AboutText>
        <AboutTitle>Certificates</AboutTitle>
      </Container>
      <Container className="center">
        {certificate.map((v, i) => (
          <CertificateWrappers className="cert" bg={v.imge}>
            <CertificateContent className="col-start-end topup" key={i}>
              {show && (
                <Topup className="center" onClick={()=>changeShow(false)}>
                  {digit == 0 ? (
                    <TopupImage
                      onClick={() => {
                        changeShow(true);
                        changeDigit(0);
                      }}
                      src={certificate[0].ti}
                    />
                  ) : digit == 1 ? (
                    <TopupImage
                      onClick={() => {
                        changeShow(true);
                        changeDigit(1);
                      }}
                      src={certificate[1].ti}
                    />
                  ) : (
                    <TopupImage
                      onClick={() => {
                        changeShow(true);
                        changeDigit(2);
                      }}
                      src={certificate[2].ti}
                    />
                  )}
                  {/* <TopupImage src={v.id == i && v.ti} /> */}
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
