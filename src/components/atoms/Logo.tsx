import React from "react";
import styled from "styled-components";
import LaptopDos from "../../LaptopDos.json";
import "../../assets/bubble.css";
import Lottie from "lottie-react";
import tagLottie from "../../tagLottie.json";

function Logo() {
  const DivImageStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 18vw;
    height: 18vw;
    overflow: hidden;
    position: absolute;
    top: -6vw;
    left: 0vw;
    filter: hue-rotate(20deg) brightness(2.2) contrast(250%);
    @media (max-width: 780px) {
      display: flex;
      position: absolute;
      width: 37vw;
      height: 47vw;
      top: -18vw;
      left: -10vw;
    }

    /* filter: brightness(1.1);
    mix-blend-mode: multiply; */
  `;
  return (
    <DivImageStyled>
      <Lottie animationData={tagLottie} />
    </DivImageStyled>
  );
  /* <DivImageStyled>
       <ImageStyled src={logo} alt="imagen-logo" />
     </DivImageStyled> */
}

export default Logo;
