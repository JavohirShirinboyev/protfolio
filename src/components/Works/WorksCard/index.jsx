import React from "react";
import {
  ButtonBox,
  Container,
  Img,
  Info,
  TechnologyContainer,
  TitleWork,
} from "./styled";
// Import Generic Button
import Button from "../../Generic/Button";

const WorksCard = (props) => {
  const { imgSrc, technology, title, info, liveSrc, codeSrc } = props.data;

  const onClickLive = () => {
    window.location.href = `${liveSrc}`;
  };

  const onClickCode = () => {
    window.location.href = `${codeSrc}`;
  };

  return (
    <Container>
      <Img src={imgSrc} />
      <TechnologyContainer>
        <p>{technology}</p>
      </TechnologyContainer>
      <TitleWork>{title}</TitleWork>
      <Info>{info}</Info>
      <ButtonBox>
        <Button onClick={onClickLive} />
        <Button onClick={onClickCode}>{"Code >="}</Button>
      </ButtonBox>
    </Container>
  );
};

export default WorksCard;
