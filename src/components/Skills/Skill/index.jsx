import React from "react";
import { Card, CardHeader, Title, CardBody, Info } from "./styled";

const SkillCard = (props) => {
  const { title, info } = props.data;
  return (
    <Card>
      <CardHeader>
        <Title>{title}</Title>
      </CardHeader>
      <CardBody>
        <Info>{info}</Info>
      </CardBody>
    </Card>
  );
};

export default SkillCard;
