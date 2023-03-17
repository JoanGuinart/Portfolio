import styled from "styled-components";
import FormularioContacto from "./FormularioContacto";

function Contact() {
  const StyledGrid = styled.div`
    display: grid;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    margin-left: 7vw;
    margin-right: 7vw;
    margin-top: 1vw;
    @media (min-width: 780px) {
      grid-template-rows: 100vh;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 781px) {
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      text-align: center;
    }
  `;
  const StyledH1 = styled.h1`
    order: 2;
    @media (max-width: 780px) {
      order: -1;
    }
  `;

  return (
    <StyledGrid id="CONTACT">
      <FormularioContacto />
      <StyledH1>CONTACT ME</StyledH1>
    </StyledGrid>
  );
}

export default Contact;
