import styled from "styled-components";
import Nabvar from "./components/organisms/Nabvar";
import "./assets/Main.css";
import MainPage from "./components/organisms/MainPage";


function App() {
  const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <StyledDiv>     
      <Nabvar />
      <MainPage />
    </StyledDiv>
  );
}

export default App;
