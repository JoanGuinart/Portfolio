import React, { useState } from "react";
import APP_METEOROLOGICA from "../../assets/APP_METEOROLOGICA.jpg";
import APP_TASKCARDS from "../../assets/APP_TASKCARDS_TYPESCRIPT.jpg";
import APP_SHOPPINGCART from "../../assets/APP_SHOPPINGCART.jpg";
import APP_STARWARS from "../../assets/APP_STARWARS.jpg";
import styled from "styled-components";
import WEB_OPTICA from "../../assets/WEB_OPTICA_1.jpg";
import Blastoestimulina from "../../assets/blastoestimulina.jpg"
import Digitalgarden from "../../assets/digitalgarden.jpg"
import Optiderm from "../../assets/optiderm.jpg"
import Hauthilfe from "../../assets/hauthilfe.jpg"
import Arrow from "/src/assets/arrow.png"

const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const StyledImage = styled.img`
  max-width: 60vw;
  border: solid 1px black;
  border-radius: 10px;
  @media (max-width: 780px) {
    max-width: 80vw;
  }
`;

const ArrowLeft = styled.img`
  width: 40px;
  height: 40px;
  transform: rotate(180deg);
  &:hover {
    transform: scale(0.9) rotate(180deg);
  }
`;

const ArrowRight = styled.img`
  width: 40px;
  height: 40px;
  &:hover {
    transform: scale(0.9);
  }
`;

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: Blastoestimulina,
      link: "https://www.blastoestimulina.com/",
    },
    {
      url: WEB_OPTICA,
      link: "https://www.opticaguinart.com",
    },
    {
      url: Digitalgarden,
      link: "https://www.almiralldigitalgarden.com/"
    },
    {
      url: Optiderm,
      link: "https://optiderm.de/"
    },
    {
      url: Hauthilfe,
      link: "https://hauthilfe.de/"
    },
    {
      url: APP_TASKCARDS,
      link: "https://codesandbox.io/p/github/JoanGuinart/TaskCards-React-Typescript-Joan_Guinart_Casas/master?workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfcedhwt000e356ixxt3kj1t%2522%253A%257B%2522key%2522%253A%2522clfcedhwt000e356ixxt3kj1t%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfcedhwt000f356i4r3suzvd%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfcedmle006z356iqxy35s6q%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clfcedl7e003f356ijprd4nd8%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfcedhwt000e356ixxt3kj1t%2522%252C%2522spacesOrder%2522%253A%255B%2522clfcedhwt000e356ixxt3kj1t%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D",
    },
    {
      url: APP_SHOPPINGCART,
      link: "https://codesandbox.io/p/github/JoanGuinart/Shopping-Cart-React-Typescript_Joan_Guinart_Casas/master?workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfcef9lt000g356iyx6r0x77%2522%253A%257B%2522key%2522%253A%2522clfcef9lt000g356iyx6r0x77%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfcef9lt000h356ior78ejni%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfcefel8006w356ipaq04hbq%2522%252C%2522isMinimized%2522%253Afalse%252C%2522path%2522%253A%2522%252Fstore%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clfcefcyi0029356iy402qlvc%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfcef9lt000g356iyx6r0x77%2522%252C%2522spacesOrder%2522%253A%255B%2522clfcef9lt000g356iyx6r0x77%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D",
    },
    {
      url: APP_STARWARS,
      link: "https://codesandbox.io/p/github/JoanGuinart/StarWars-Api-App_Joan_Guinart_Casas/master?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfcegix9000ag3kb01kucp4k%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfcegktf0015356ilze5lyzb%2522%253A%257B%2522key%2522%253A%2522clfcegktf0015356ilze5lyzb%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfcegktf0016356ibe75or5c%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfcehbta0084356i8269ou77%2522%252C%2522isMinimized%2522%253Afalse%252C%2522path%2522%253A%2522%252Fstarships%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clfceh90w004w356ixv7bbb9u%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfcegktf0015356ilze5lyzb%2522%252C%2522spacesOrder%2522%253A%255B%2522clfcegktf0015356ilze5lyzb%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + images.length - 1) % images.length
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <StyledButton style={{ left: "0" }} onClick={prevImage}>
        <ArrowLeft src={Arrow} alt="arrow left" />
      </StyledButton>
      <a
        href={images[currentImageIndex].link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledImage
          src={images[currentImageIndex].url}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </a>
      <StyledButton style={{ right: "0" }} onClick={nextImage}>
      <ArrowRight src={Arrow} alt="arrow right" />
      </StyledButton>
    </div>
  );
};

export default ImageSlider;
