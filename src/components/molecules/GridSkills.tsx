import styled from "styled-components";

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
  const imageSrc = "/src/assets/skills/";

  const skills = [
    { name: "HTML", image: imageSrc + "Html_svg.svg" },
    { name: "CSS", image: imageSrc + "Css_svg.svg" },
    { name: "JavaScript", image: imageSrc + "JavaScript_svg.svg" },
    { name: "TypeScript", image: imageSrc + "TypeScript_svg.svg" },
    { name: "React JS", image: imageSrc + "React_svg.svg" },
    { name: "Vue (v3)", image: imageSrc + "Vue_svg.svg" },
    { name: "Nuxt JS", image: imageSrc + "Nuxt_svg.svg" },
    { name: "Redux", image: imageSrc + "Redux_svg.svg" },
    { name: "Bootstrap", image: imageSrc + "Bootstrap_svg.svg" },
    { name: "Tailwind", image: imageSrc + "Tailwind_svg.svg" },
    { name: "Styled Components", image: imageSrc + "StyledComponents_png.png" },
    { name: "Firebase", image: imageSrc + "Firebase_svg.svg" },
    { name: "Twig", image: imageSrc + "Twig_svg.svg" },
    { name: "Git", image: imageSrc + "Git_svg.svg" },
    { name: "GitHub", image: imageSrc + "Github_svg.svg" },
    { name: "GitLab", image: imageSrc + "GitLab_svg.svg" },
    { name: "Azure", image: imageSrc + "Azure_svg.svg" },
    { name: "Npm", image: imageSrc + "Npm_svg.svg" },
    { name: "Pnpm", image: imageSrc + "Pnpm_svg.svg" },
    { name: "Yarn", image: imageSrc + "Yarn_svg.svg" },
    { name: "Agile", image: imageSrc + "Agile_svg.svg" },
    { name: "Responsive Web Design", image: imageSrc + "Responsive_svg.svg" },
    { name: "Figma", image: imageSrc + "Figma_svg.svg" },
    { name: "Eslint", image: imageSrc + "Eslint_svg.svg" },
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
