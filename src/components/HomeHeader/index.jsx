import React from "react";
import { Container, Content, Dots, Img, Info, Logo, Title } from "./style";
import Button from "../Generic/Button";
import ImgPerson from "../../assets/img/person.png";
import logo from "../../assets/img/Logo.png";
import dots from "../../assets/img/Dots.png";

const HomeHeader = () => {
  return (
    <Container>
      <Content>
        <Title>
          Javokhir is a <span className="danger__color">front-end</span>{" "}
          developer
        </Title>
        <Info className="info">
          He crafts responsive websites where technologies <br /> meet
          creativity
        </Info>
        <Button width="138" height="37" display="none">
          Contact me!!
        </Button>
      </Content>
      <Content>
        <Logo src={logo} />
        <Img src={ImgPerson} />
        <Dots src={dots} />
      </Content>
    </Container>
  );
};

export default HomeHeader;
