import styled from "styled-components";
import selfieJoan from "../../assets/Joan_Guinart_Selfie.jpeg";

import bubbles from "../../bubbles.json";
import Lottie from "lottie-react";

function Home() {
  const StyledGrid = styled.div`
    display: grid;
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
            Hello! I'm a FrontEnd developer with a strong track record in
            effectively tackling complex challenges while pursuing new goals. My
            technical expertise and soft skills enable me to deliver innovative
            solutions, collaborate effectively in team settings, and meet tight
            deadlines, thus contributing to project success. worker.
          </StyledText>
        </StyledItem>
      </StyledGrid>
    </div>
  );
}

export default Home;
