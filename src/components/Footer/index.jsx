import React from "react";
import { Container } from "reactstrap";
import {
  FooterBox,
  Line,
  FooterTop,
  FooterBottom,
  FooterContet,
  Content,
  Logo,
  Title,
  Email,
  Location,
} from "./styled";
import logo from "../../assets/icons/logo.png";

import { AiFillGithub } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  // Contacts Links Function

  const onClickGitHub = () => {
    window.location.href = "https://github.com/JavohirShirinboyev";
  };

  const onClickTelegram = () => {
    window.location.href = "https://t.me/javohir_shirinboyev";
  };

  const onClickPhoneNumber = () => {
    window.location.href = "tel:+998940076678";
  };
  return (
    <>
      <Line />
      <Container>
        <FooterBox>
          <FooterTop>
            <FooterContet>
              <Content>
                <Logo src={logo} />
                <Title>Javokhir</Title>
                <Email>javohirshirinboyev.dev@gmail.com</Email>
              </Content>
              <Location>Front-end developer based in Uzbekistan</Location>
            </FooterContet>
            <FooterContet>
              <Title right>Media</Title>
              <Content>
                <AiFillGithub
                  onClick={onClickGitHub}
                  className="contact__icon"
                />
                <AiTwotonePhone
                  onClick={onClickPhoneNumber}
                  className="contact__icon"
                />
                <BsTelegram
                  onClick={onClickTelegram}
                  className="contact__icon"
                />
              </Content>
            </FooterContet>
          </FooterTop>
          <FooterBottom>
            <p>© Copyright {new Date().getFullYear()}. Made by Javokhir</p>
          </FooterBottom>
        </FooterBox>
      </Container>
    </>
  );
};

export default Footer;
