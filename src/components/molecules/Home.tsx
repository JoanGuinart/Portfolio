import styled from "styled-components";
import selfieJoan from "../../assets/joan3comprimida.jpg";

import bubbles from "../../bubbles.json";
import Lottie from "lottie-react";

function Home() {
  const StyledGrid = styled.div`
    display: grid;
    grid-template-rows: 100vh;
    font-family: "Montserrat", sans-serif;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    margin-top: 120px;
    margin-left: 7vw;
    margin-right: 7vw;
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
    }
  `;
  const StyledItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  `;
  const StyledSelfie = styled.img`
    display: flex;
    width: 30vw;
    justify-content: center;
    border-radius: 50%;
  `;

  const StyledText = styled.div`
    text-align: justify;
    font-weight: 10px;
    font-size: 1.5vw;
    font-family: "Montserrat", sans-serif;
    @media (max-width: 768px) {
      font-weight: 12px;
      margin-top: 90px;
      font-size: 16px;
    }
  `;

  return (
    <div id="HOME">
      <StyledGrid>
        <StyledItem>
          <div
            style={{
              position: "absolute",
              zIndex: "-1",
              filter: "hue-rotate(230deg) brightness(1.25)",
            }}
          >
            <Lottie animationData={bubbles} />
          </div>
          <StyledSelfie src={selfieJoan} alt="bubbleDos" />
        </StyledItem>
        <StyledItem>
          <StyledText>
            <h1>Joan Guinart</h1>
            <h5>FrontEnd Developer</h5>
            <hr />
            <br />
            Hello, my name is Joan Guinart Casas, I come from working as a
            technical engineer at vueling and I wanted to retrain myself as a
            FrontEnd programmer and I am specialized in React Js. I believe that
            I can provide mutual benefits, on the one hand I will contribute all
            my knowledge and soft skills to be able to solve problems and create
            new goals, on the other hand I know that thanks to the company that
            wants to hire me I can grow a lot as a programmer in their company
            and this It will provide us with feedback as a company and as a
            worker.
          </StyledText>
        </StyledItem>
      </StyledGrid>
    </div>
  );
}

export default Home;
