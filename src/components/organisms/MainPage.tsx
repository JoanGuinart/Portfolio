import styled from "styled-components";
import About from "../molecules/About";
import Contact from "../molecules/Contact";
import Home from "../molecules/Home";
import Projects from "../molecules/Projects";
import Skills from "../molecules/Skills";
import Footer from "./Footer";

function MainPage() {
  const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
  `;

  return (
    <StyledDiv>
      <Home />

      <About />

      <Skills />

      <Projects />
  
      <Contact />

      <Footer />
    </StyledDiv>
  );
}

export default MainPage;
