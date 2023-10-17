import styled from "styled-components";
import pdf from "../../assets/CV-Joan_Guinart_Casas.pdf";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets//icons8-github-512.png";
import laptopLottie from "../../laptopLottie.json";
import Lottie from "lottie-react";
import TimeExperience from "./TimeExperience";

const About = () => {
  const StyledGrid = styled.div`
    display: grid;
    align-items: center;
    grid-template-rows: 100vh;
    font-family: "Montserrat", sans-serif;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-left: 7vw;
    margin-right: 7vw;
    margin-top: 1vw;
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
    }
  `;

  const StyledTitle = styled.h2``;

  const StyledItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  `;

  const StyledText = styled.div`
    text-align: justify;
    font-weight: 10px;
    font-size: 1.5vw;
    @media (max-width: 768px) {
      font-weight: 16px;
      margin-top: 90px;
      font-size: 16px;
    }
  `;

  const StyledLink = styled.div`
    background: linear-gradient(to bottom right, #d17b6f, #ff9a5a);
    border: 0;
    border-radius: 8px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    height: auto;
    margin: 0;
    width: 110px;
    font-size: 16px;
    font-weight: 500;
    line-height: 2;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    &:focus {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
        0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
    }
    &:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
        0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
    }
  `;

  const StyledImage = styled.div`
    display: inline-block;
    width: 35vw;
    z-index: -1;
  `;

  const StyledImg = styled.img`
    width: 31px;
    height: auto;
    margin: 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
      rgba(3, 32, 61, 0.35) 0px -2px 6px 0px inset;
    border-radius: 5px;
    &:hover {
      width: 30px;
    }
    @media (max-width: 768px) {
      &:active {
        width: 30px;
      }
    }
  `;

  const TimeDiv = styled.div`
    margin-top: -280px;
    @media (max-width: 950px) {
      margin-top: -70px;
    }
  `;

  return (
    <div>
      <StyledGrid id="ABOUT">
        <StyledItem>
          <StyledText>
            <StyledTitle>About Me</StyledTitle>
            <hr />
            I'm FrontEnd Developer that is curious and competent. I see myself
            as a life-long learner, that is driven to solve complex problems,
            programming is my choice of medium to stimulate my mind
            <br />
            <div style={{ width: "18vw" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridGap: "5px",
                  paddingTop: "2rem",
                }}
              >
                <a href="https://github.com/JoanGuinart" target="_blank">
                  <StyledImg src={GitHub} alt="imgLogoGithub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joan-guinart-casas/"
                  target="_blank"
                >
                  <StyledImg src={LinkedIn} alt="imgLogoLinkedin" />
                </a>
                <a
                  href={pdf}
                  rel="noopener noreferrer"
                  download="CV-Joan_Guinart_Casas"
                >
                  <StyledLink>Download CV</StyledLink>
                </a>
              </div>
            </div>
          </StyledText>
        </StyledItem>

        <StyledItem>
          <StyledImage>
            <Lottie animationData={laptopLottie} />
          </StyledImage>
        </StyledItem>
      </StyledGrid>
      <TimeDiv>
        <h2 style={{ marginBottom: "-30px", marginTop: "90px" }}>Experience</h2>
        <TimeExperience />
      </TimeDiv>
    </div>
  );
};
setTimeout(About, 1000);

export default About;
