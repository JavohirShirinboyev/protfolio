import React from "react";
import { Container } from "reactstrap";
import {
  TitleContainer,
  WorksContainer,
  Title,
  Line,
  WorksCard,
} from "./styled";
// import works card
import Card from "./WorksCard";
// import worksData
import { items } from "./WorksCard/worksData";

const Works = () => {
  return (
    <Container>
      <WorksContainer>
        <TitleContainer>
          <Title>
            <span>#</span>projects
          </Title>
          <Line />
        </TitleContainer>

        <WorksCard>
          {items.map((item) => {
            return <Card data={item} />;
          })}
        </WorksCard>
      </WorksContainer>
    </Container>
  );
};

export default Works;
