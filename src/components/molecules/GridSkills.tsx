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

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5vw;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 120px;
  height: 100px;
  @media (max-width: 780px) {
    font-size: 16px;
  }
`;

const SkillImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;

const SkillName = styled.span`
  display: block;
`;

function GridSkills() {
  const imageSrc = "/src/assets/G-letter.png";

  const skills = [
    { name: "HTML", image: imageSrc },
    { name: "CSS", image: imageSrc },
    { name: "JavaScript", image: imageSrc },
    { name: "TypeScript", image: imageSrc },
    { name: "React JS", image: imageSrc },
    { name: "Vue (v3)", image: imageSrc },
    { name: "Nuxt JS", image: imageSrc },
    { name: "Redux", image: imageSrc },
    { name: "Bootstrap", image: imageSrc },
    { name: "Tailwind", image: imageSrc },
    { name: "Styled Components", image: imageSrc },
    { name: "Firebase", image: imageSrc },
    { name: "Twig", image: imageSrc },
    { name: "Git", image: imageSrc },
    { name: "GitHub", image: imageSrc },
    { name: "GitLab", image: imageSrc },
    { name: "Npm", image: imageSrc },
    { name: "Pnpm", image: imageSrc },
    { name: "Yarn", image: imageSrc },
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
