import styled from "styled-components";
import About from "../molecules/About";
import Contact from "../molecules/Contact";
import Home from "../molecules/Home";
import Projects from "../molecules/Projects";
import Skills from "../molecules/Skills";

function MainPage() {
  const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
  `;

  return (
    <StyledDiv>
      <Home />

      <About />

      <Skills />

      <Projects />
  
      <Contact />
    </StyledDiv>
  );
}

export default MainPage;
