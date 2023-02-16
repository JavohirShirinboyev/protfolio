import React from "react";
import SkillCard from "./Skill";
import { Skill, SkillBoxes, Title } from "./styled";
import { skillsData } from "./skillsData";

const Skills = () => {
  return (
    <Skill>
      <Title>
        <span>#</span>skills
      </Title>

      <SkillBoxes>
        {skillsData.map((value) => {
          return <SkillCard key={value.id} data={value} />;
        })}
      </SkillBoxes>
    </Skill>
  );
};

export default Skills;
