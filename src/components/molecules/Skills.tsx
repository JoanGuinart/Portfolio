import React from "react";
import styled from "styled-components";
import GridSkills from "./GridSkills";

function Skills() {
  const StyledDiv = styled.div`
    display: grid;
    font-family: "Montserrat", sans-serif;
    padding-top: 20px;
    margin-left: 7vw;
    margin-right: 7vw;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-gap: 20px;
    align-items: center;
    @media (max-width: 781px) {
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      text-align: center;
      margin-top: 10px;
      font-size: 16px;
    }
  `;

  const StyledTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    margin-top: 60px;
  `;

  return (
    <div id="SKILLS">
    <StyledDiv>
      <StyledTitle>My Skills /*Editing Section*/</StyledTitle>
      <GridSkills />
    </StyledDiv>
    </div>
  );
}

export default Skills;
