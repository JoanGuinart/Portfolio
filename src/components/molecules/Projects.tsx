import React from 'react'
import styled from 'styled-components';
import ImageSlider from './ImageSlider';

function Projects() {

  const StyledGrid = styled.div`
    display: grid;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding-top: 120px;
    margin-left: 7vw;
    margin-right: 7vw;

    @media (max-width: 780px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
      text-align: center;
      margin-top: 10rem;
      padding-bottom: 10rem;
    }
  `;

  return (
    <StyledGrid id='PROJECTS'>
      <h1>Projects that I worked on:</h1>
      <ImageSlider />
    </StyledGrid>
  )
}

export default Projects;
