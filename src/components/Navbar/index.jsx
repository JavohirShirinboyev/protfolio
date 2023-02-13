import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import {
  Logo,
  Wrapper,
  Content,
  Link,
  MenuContainer,
  ContactContainer,
  ContactFixedBox,
  Line,
} from "./styled";
import logoImg from "../../assets/icons/logo.png";
import { navbar } from "../../utils/navbar";

// import icons
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();

  // Navbar toggle
  const [isMobile, setIsMobile] = useState(false);
  // Contacts Links Function

  const onClickGitHub = () => {
    window.location.href = "https://github.com/JavohirShirinboyev";
  };

  const onClickTelegram = () => {
    window.location.href = "https://t.me/javohir_shirinboyev";
  };

  const onClickLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/javohirshirinboyev/";
  };

  const onClickPhoneNumber = () => {
    window.location.href = "tel:+998940076678";
  };

  return (
    <nav>
      <ContactFixedBox>
        <Line />
        <AiFillGithub onClick={onClickGitHub} className="contact__icon" />
        <AiFillLinkedin onClick={onClickLinkedin} className="contact__icon" />
        <AiTwotonePhone
          onClick={onClickPhoneNumber}
          className="contact__icon"
        />
        <BsTelegram onClick={onClickTelegram} className="contact__icon" />
      </ContactFixedBox>
      <Container>
        <Wrapper>
          <Content onClick={() => navigate("/home")} logo>
            <Logo src={logoImg} />
            <h3>Javokhir</h3>
          </Content>
          <Content navbarLinks>
            {navbar.map(({ title, path }, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}
                >
                  <span>#</span>
                  {title}
                </Link>
              );
            })}
          </Content>
          <Content menu onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <AiOutlineClose className="icon" />
            ) : (
              <RxHamburgerMenu className="icon" />
            )}
          </Content>
        </Wrapper>

        <MenuContainer isMobile={isMobile} onClick={() => setIsMobile(false)}>
          {navbar.map(({ title, path }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                to={path}
                key={index}
              >
                <span>#</span>
                {title}
              </Link>
            );
          })}
          <ContactContainer>
            <AiFillGithub onClick={onClickGitHub} className="contact__icon" />
            <AiFillLinkedin
              onClick={onClickLinkedin}
              className="contact__icon"
            />
            <AiTwotonePhone
              onClick={onClickPhoneNumber}
              className="contact__icon"
            />
            <BsTelegram onClick={onClickTelegram} className="contact__icon" />
          </ContactContainer>
        </MenuContainer>
      </Container>

      <Outlet />
    </nav>
  );
};

export default Navbar;
