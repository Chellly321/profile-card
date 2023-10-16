import React from "react";
import Skill from "./Skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="✓" color="red" />
      <Skill skill="HTML&CSS" emoji="✓" color="orange" />
      <Skill skill="Javascript" emoji="✓" color="pink" />
      <Skill skill="Firebase" emoji="✓" color="yellow" />
      <Skill skill="SCRUM" emoji="✓" color="green" />
    </div>
  );
}

export default SkillList;
