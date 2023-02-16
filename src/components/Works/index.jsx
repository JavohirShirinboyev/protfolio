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
import Footer from "../Footer";

const Works = () => {
  return (
    <>
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
              return <Card key={item.id} data={item} />;
            })}
          </WorksCard>
        </WorksContainer>
      </Container>

      <Footer />
    </>
  );
};

export default Works;
