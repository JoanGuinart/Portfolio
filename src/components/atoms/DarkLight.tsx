import React, { useState } from "react";
import styled from "styled-components";

function DarkLight() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkLight = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const Styledlabel = styled.label`
    width: 50px;
    height: 20px;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 200px;
    box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
      inset 0px -5px 15px rgba(255, 255, 255, 0.4);
    cursor: pointer;
    &:after {
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0px;
      left: 0px;
      background: linear-gradient(180deg, #777, #3a3a3a);
      border-radius: 180px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }
    &:active:after {
      width: 30px;
    }
    &:label,
    label:after {
      transition: 0.5s;
    }
    @media (max-width: 768px) {
      width: 65px;
      height: 30px;
      &:after {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      top: -0.5px;
      left: 0px;
      background: linear-gradient(180deg, #777, #3a3a3a);
      border-radius: 180px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }
    &:active:after {
      width: 15px;
    }
    } ;
  `;
  const StyledInput = styled.input`
    width: 0;
    height: 0;
    position: absolute;
    visibility: hidden;
    &:checked + label {
      background: #242424;
    }
    &:checked + label:after {
      left: 50px;
      top: -.5px;
      transform: translateX(-100%);
      background: linear-gradient(180deg, #fff6ea, #ffffff);
    }
    &:focus{
      display: none;
    }
    @media (max-width: 768px) {
      &:checked + label:after {
      left: 65px;
      top: 0px;
      transform: translateX(-100%);
      background: linear-gradient(180deg, #fff6ea, #ffffff);
    }}
  `;

  return (
    <>
      <StyledInput
        type="checkbox"
        checked={darkMode}
        onChange={() => {}}
        onClick={toggleDarkLight} // Cambiado de onChange a onClick
        id="darkmode-toggle"
      />
      <Styledlabel htmlFor="darkmode-toggle"></Styledlabel>
    </>
  );
}

export default DarkLight;
