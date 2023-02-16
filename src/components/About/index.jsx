import React from "react";
import { Container } from "reactstrap";
import Skills from "../Skills";
// import Images
import avatar2 from "../../assets/img/about/avatar2.jpg";
import dot from "../../assets/img/about/dot1.png";
import square from "../../assets/img/about/square.png";
import dot2 from "../../assets/img/about/dot2.png";
// import styled components
import {
  TitleBox,
  Title,
  Description,
  MainContainer,
  Contend,
  Info,
  Img,
  Effect1,
  Effect2,
  Effect3,
} from "./styled";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <Container>
        <TitleBox>
          <Title>
            <span>/</span>about-me
          </Title>
          <Description>Who am i?</Description>
        </TitleBox>

        <MainContainer>
          <Contend left>
            <Info>
              Hello, I’m Javokhir!
              <br />
              <br />
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </Info>
          </Contend>
          <Contend right>
            <Img src={avatar2} />
          </Contend>
        </MainContainer>

        <Effect1 src={dot} />
        <Effect2 src={square} />
        <Effect3 src={dot2} />

        <Skills />
      </Container>

      <Footer />
    </>
  );
};

export default About;
