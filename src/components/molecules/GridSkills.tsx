import React from 'react'
import styled from 'styled-components';
import "../../assets/graphBar.css";


const StyledGrid = styled.div`
  display: grid;
  font-family: "Montserrat", sans-serif;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.5vw;
  font-family: "Montserrat", sans-serif;
  padding: 0;
  border-radius: 50px;
  z-index: -1;
  @media (max-width: 780px) {
    width: 100%;
    height: auto;
    justify-content: flex-start;
    margin-left: 25%;
  }
`;

function GridSkills() {
  
  
  return (

<StyledGrid>
        <StyledItem>
          <div>
            <div>
              <tbody>
                <tr>
                  <td className="barrasGrafic">
                    <td className="skillGraphItem">HTML</td>
                    <div className="yellowBarFull"></div>
                  </td>
                </tr>
                <tr>
                  <td className="barrasGrafic">
                    <td className="skillGraphItem">CSS</td>
                    <div className="blueBarHigh"></div>
                  </td>
                </tr>
                <tr>
                  <td className="barrasGrafic">
                    <td className="skillGraphItem">JAVASCRIPT</td>
                    <div className="yellowBarHigh"></div>
                  </td>
                </tr>
                <tr>
                  <td className="barrasGrafic">
                    <td className="skillGraphItem">TYPESCRIPT</td>
                    <div className="blueBarLow"></div>
                  </td>
                </tr>
                <tr>
                  <td className="barrasGrafic">
                    <td className="skillGraphItem">REACT JS</td>
                    <div className="yellowBarHigh"></div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </StyledItem>
        <StyledItem>
          <div>
            <div>
              <tbody>
                <tr>
                  <td className="barrasGrafic">
                    <td className="skillGraphItem">BOOTSTRAP</td>
                    <div className="blueBarLowMed"></div>
                  </td>
                </tr>
                <tr>
                  <td className="barrasGrafic">
                    <td className="skillGraphItem">TAILWIND</td>
                    <div className="yellowBarLow"></div>
                  </td>
                </tr>
                <tr>
                  <td className="barrasGrafic">
                    <td className="skillGraphItem">STYLED COMPONENTS</td>
                    <div className="blueBarHalf"></div>
                  </td>
                </tr>
                <tr>
                  <td className="barrasGrafic">
                    <td className="skillGraphItem">FIREBASE</td>
                    <div className="yellowBarLow"></div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </StyledItem>
      </StyledGrid>
      )}

      export default GridSkills