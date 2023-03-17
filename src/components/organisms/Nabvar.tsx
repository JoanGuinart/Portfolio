import styled from "styled-components";
import DarkLight from "../atoms/DarkLight";
import Logo from "../atoms/Logo";
import NavbarLinks from "../atoms/NavbarLinks";

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 98%,
    rgba(0, 0, 0, 0.95) 100%
  );
  width: 100vw;
  margin-top: -8px;
  position: fixed;
  z-index: 2;
  padding-top: 1vw;
  padding-bottom: 1vw;
  @media (max-width: 780px) {
    padding-top: 2vw;
  padding-bottom: 2vw;
  border-bottom: solid 0.2px black;
  }
`;

function Nabvar() {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarLinks />
      <DarkLight />
    </NavbarStyled>
  );
}

export default Nabvar;