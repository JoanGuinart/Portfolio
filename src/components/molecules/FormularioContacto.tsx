import React, { useState } from "react";
import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 180px;
  padding: 60px;
  margin: 0 auto;
  border: solid 0.2px #212121;
  border-radius: 10px;
  background-color: white;
  color: black;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
`;

const Boton = styled.button`
  background-color: #ff8777;
  color: white;
  border: none;
  padding: 5px 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ff6b6b;
  }
`;
const BotonCall = styled.button`
  background-color: #ff8777;
  color: white;
  border: none;
  padding: 5px 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: none;

  &:hover {
    background-color: #ff6b6b;
  }
  @media (max-width: 780px) {
    display: flex;
  }
`;

const DivStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  @media (max-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledLabel = styled.label`
  
`

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarCorreoElectronico = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:guinartcasasjoan@gmail.com?subject=${nombre} te ha enviado un mensaje desde el formulario de contacto&body=${mensaje} - Correo electrónico de contacto: ${correoElectronico}`;
    window.location.href = mailtoLink;
  };

  /* const enviarWhatsapp = (e) => {
    e.preventDefault();
    const whatsappLink = `https://wa.me/0034617056811?text=${nombre} te ha enviado un mensaje desde el formulario de contacto: ${mensaje} - Correo electrónico de contacto: ${correoElectronico}`;
    window.open(whatsappLink, "_blank");
  }; */

  const enviarWhatsapp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const whatsappLink = `https://wa.me/0034617056811?text=${nombre} te ha enviado un mensaje desde el formulario de contacto: ${mensaje} - Correo electrónico de contacto: ${correoElectronico}`;
    window.open(whatsappLink, "_blank");
  };
  

  const llamar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const numeroTelefono = "0034617056810";
    window.open(`tel:${numeroTelefono}`);
  };

  return (
    <Formulario>
      <StyledLabel>Nombre:</StyledLabel>
      <Input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        style={{border: "solid 0.2px #212121"}}
      />
      <StyledLabel>Correo electrónico:</StyledLabel>
      <Input
        type="email"
        value={correoElectronico}
        onChange={(e) => setCorreoElectronico(e.target.value)}
        required
        style={{border: "solid 0.2px #212121"}}
      />
      <StyledLabel>Mensaje:</StyledLabel>
      <Textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
        style={{border: "solid 0.2px #212121"}}
      />
      <DivStyled>
        <Boton onClick={enviarCorreoElectronico}>
          <HiOutlineMail />
        </Boton>
        <Boton onClick={enviarWhatsapp}>
          <BsWhatsapp />
        </Boton>
        <BotonCall onClick={llamar}>
          <FiPhoneCall />
        </BotonCall>
      </DivStyled>
    </Formulario>
  );
}

export default FormularioContacto;
