import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 64px;
`

const Q = styled.p`
  border: solid 0.5px black;
  background-color: #333333;
  border: solid 2px white;
  border-radius: 8px;
  padding: 5px;
  margin-right: 5px;
  margin-bottom: -9px;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const P = styled.p`
  font-size: 16px !important;
  
`

const TimeExperience = () => {
  let fa: Date = new Date("12/01/2021");
  let fb: Date = new Date();

  let totdias: number = fa.getTime() - fb.getTime();
  totdias /= 3600000;
  totdias /= 24;
  totdias = Math.floor(totdias);
  totdias = Math.abs(totdias);

  var ans, meses, dias, m2, m1, d3, d2, d1;
  var f2 = new Date();
  var f1 = new Date();

  if (fa > fb) {
    f2 = fa;
    f1 = fb;
  } else {
    var f2 = fb;
    f1 = fa;
  } //Siempre f2 > f1
  ans = f2.getFullYear() - f1.getFullYear(); // dif de años inicial
  m2 = f2.getMonth();
  m1 = f1.getMonth();
  meses = m2 - m1;
  if (meses < 0) {
    meses += 12;
    --ans;
  }

  d2 = f2.getDate();
  d1 = f1.getDate();
  dias = d2 - d1;

  var f3 = new Date(f2.getFullYear(), m2, 1);
  f3.setDate(f3.getDate() - 1);
  d3 = f3.getDate();

  if (d1 > d2) {
    dias += d3;
    --meses;
    if (meses < 0) {
      meses += 12;
      --ans;
    }
    if (fa > fb) {
      //corrección por febrero y meses de 30 días
      f3 = new Date(f1.getFullYear(), m1 + 1, 1);
      f3.setDate(f3.getDate() - 1);
      d3 = f3.getDate();
      if (d3 == 30) dias -= 1;
      if (d3 == 29) dias -= 2;
      if (d3 == 28) dias -= 3;
    }
  }

  let hours = fb.getHours();
let minutes: any = fb.getMinutes();
let seconds: any = fb.getSeconds();
if (hours < 10) hours = 0 + hours;
if (minutes < 10) {
  minutes = "0" + minutes;
}
if (seconds < 10) {
  seconds = "0" + seconds;
}

  return (
    <DIV>
      <div>  <Q>{ans}</Q><P>Years</P>  </div>
      <p style={{marginRight: "5px"}}>:</p>
      <div>  <Q>{meses}</Q><P>Months</P>  </div>
      <p style={{marginRight: "5px"}}>:</p>
      <div>  <Q>{dias}</Q><P>Days</P>  </div>   
    </DIV>
  );
};

export default TimeExperience;
