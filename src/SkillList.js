import React from "react";
import data from "./data";
import Skill from "./Skill";

function SkillList() {
  const skill = data;

  return (
    <div className="skill-list">
      {skill.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

export default SkillList;
