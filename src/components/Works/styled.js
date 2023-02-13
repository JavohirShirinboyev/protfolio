import styled from "styled-components";

const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 30px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Title = styled.h2`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 42px;
  color: var(--textColor-white);

  span {
    color: var(--textColor-danger);
  }
`;

const Line = styled.div`
  width: 511px;
  height: 1px;
  background-color: var(--textColor-danger);

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

// Works Cards Style

const WorksCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
`;

export { WorksContainer, TitleContainer, Title, Line, WorksCard };
