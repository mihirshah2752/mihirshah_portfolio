import React from "react";
import {
  BASE_SVG_URL,
  SKILLS_SVG,
} from "../../constants/skills-svgs.constants";
import {
  SKILLS_HEADER,
  SKILLS_TITLE,
  GITHUB_BUTTON_TEXT,
  GITHUB_HREF,
  SKILLS_PARA_HEADER,
  SKILLS_PARA_TEXT1,
  SKILLS_SET,
} from "../../constants/skills.constants";
import "./SkillsSection.scss";
import SectionHeader from "../Custom/SectionHeader/SectionHeader";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <SectionHeader title={SKILLS_TITLE} subtitle={SKILLS_HEADER} />
      <div className="skills-content">
        <div className="skills-text">
          <h2>{SKILLS_PARA_HEADER}</h2>
          <p>{SKILLS_PARA_TEXT1}</p>
          {SKILLS_SET.map((skill) => (
            <p key={skill.name}>
              <b>{skill.name}</b> <span>{skill.value}</span>
            </p>
          ))}
          <a
            href={GITHUB_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="skills-button"
          >
            {GITHUB_BUTTON_TEXT}
          </a>
        </div>
        <div className="skills-logos">
          {SKILLS_SVG.map((skill) => (
            <a
              key={skill.alt}
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt={skill.alt} src={BASE_SVG_URL + skill.svg} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
