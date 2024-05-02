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
  gap: 30px;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  transition: width 0.3s, height 0.3s;
`;

const SkillName = styled.span`
  display: block;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  visibility: visible; 
  transition: visibility 0.3s; 
`;

const SkillItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1vw;
  text-align: center;
  border: 0.2px solid #dedede;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background-color: white;
  color: black !important;
  padding: 10px;
  width: 100px;
  height: 100px;
  @media (max-width: 780px) {
    font-size: 16px;
  }
  &:hover {
    & > ${SkillImage} {
      width: 100%; 
      height: 100%; 
    }
    & > ${SkillName} {
      display: none;
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
