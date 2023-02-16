import styled from "styled-components";

const Skill = styled.div`
  padding: 83px 0;
`;

const Title = styled.h2`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  margin-bottom: 48px;

  span {
    color: var(--textColor-danger);
  }
`;

const SkillBoxes = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;

export { Title, Skill, SkillBoxes };
