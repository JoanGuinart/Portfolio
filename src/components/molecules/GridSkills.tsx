import React from "react";
import styled from "styled-components";

import HtmlSvg from "/src/assets/skills/Html_svg.svg";
import CssSvg from "/src/assets/skills/Css_svg.svg";
import JavaScriptSvg from "/src/assets/skills/JavaScript_svg.svg";
import TypeScriptSvg from "/src/assets/skills/TypeScript_svg.svg";
import ReactSvg from "/src/assets/skills/React_svg.svg";
import VueSvg from "/src/assets/skills/Vue_svg.svg";
import NuxtSvg from "/src/assets/skills/Nuxt_svg.svg";
import ReduxSvg from "/src/assets/skills/Redux_svg.svg";
import BootstrapSvg from "/src/assets/skills/Bootstrap_svg.svg";
import TailwindSvg from "/src/assets/skills/Tailwind_svg.svg";
import StyledComponentsSvg from "/src/assets/skills/StyledComponents_svg.svg";
import FirebaseSvg from "/src/assets/skills/Firebase_svg.svg";
import TwigSvg from "/src/assets/skills/Twig_svg.svg";
import GitSvg from "/src/assets/skills/Git_svg.svg";
import GithubSvg from "/src/assets/skills/Github_svg.svg";
import GitLabSvg from "/src/assets/skills/GitLab_svg.svg";
import AzureSvg from "/src/assets/skills/Azure_svg.svg";
import NpmSvg from "/src/assets/skills/Npm_svg.svg";
import PnpmSvg from "/src/assets/skills/Pnpm_svg.svg";
import YarnSvg from "/src/assets/skills/Yarn_svg.svg";
import AgileSvg from "/src/assets/skills/Agile_svg.svg";
import ResponsiveSvg from "/src/assets/skills/Responsive_svg.svg";
import FigmaSvg from "/src/assets/skills/Figma_svg.svg";
import EslintSvg from "/src/assets/skills/Eslint_svg.svg";

const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  transition: width 0.3s, height 0.3s; /* Transición suave */
`;

const SkillName = styled.span`
  display: block;
  position: absolute; /* Posicionamiento absoluto para estar encima de la imagen */
  bottom: 10px; /* Alineación con el borde inferior */
  left: 0; /* Alineación con el borde izquierdo */
  right: 0; /* Alineación con el borde derecho */
  visibility: visible; /* Hacer el título visible por defecto */
  transition: visibility 0.3s; /* Transición suave */
`;

const SkillItem = styled.div`
  position: relative; /* Agregado para posicionar el título */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1vw;
  text-align: center;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 10px;
  width: 120px;
  height: 100px;
  @media (max-width: 780px) {
    font-size: 16px;
  }
  &:hover {
    & > ${SkillImage} {
      width: 100%; /* La imagen ocupa todo el ancho */
      height: 100%; /* La imagen ocupa todo el alto */
    }
    & > ${SkillName} {
      display: none; /* El título se hace invisible */
    }
  }
`;

function GridSkills() {
  const skills = [
    { name: "HTML", image: HtmlSvg },
    { name: "CSS", image: CssSvg },
    { name: "JavaScript", image: JavaScriptSvg },
    { name: "TypeScript", image: TypeScriptSvg },
    { name: "React JS", image: ReactSvg },
    { name: "Vue (v3)", image: VueSvg },
    { name: "Nuxt JS", image: NuxtSvg },
    { name: "Redux", image: ReduxSvg },
    { name: "Bootstrap", image: BootstrapSvg },
    { name: "Tailwind", image: TailwindSvg },
    { name: "Styled Components", image: StyledComponentsSvg },
    { name: "Firebase", image: FirebaseSvg },
    { name: "Twig", image: TwigSvg },
    { name: "Git", image: GitSvg },
    { name: "GitHub", image: GithubSvg },
    { name: "GitLab", image: GitLabSvg },
    { name: "Azure", image: AzureSvg },
    { name: "Npm", image: NpmSvg },
    { name: "Pnpm", image: PnpmSvg },
    { name: "Yarn", image: YarnSvg },
    { name: "Agile", image: AgileSvg },
    { name: "Responsive Web Design", image: ResponsiveSvg },
    { name: "Figma", image: FigmaSvg },
    { name: "Eslint", image: EslintSvg },
  ];

  return (
    <StyledFlexContainer>
      {skills.map((skill, index) => (
        <SkillItem key={index}>
          <SkillImage src={skill.image} alt={"Imagen de " + skill.name} />
          <SkillName>{skill.name}</SkillName>
        </SkillItem>
      ))}
    </StyledFlexContainer>
  );
}

export default GridSkills;
