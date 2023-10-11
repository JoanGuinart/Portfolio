import React from "react";
import styled from "styled-components";
import Insta from "../../assets/insta-logo.png";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/icons8-github-512.png";
import Logo from "../../assets/logo-dev.png"

const FooterWrapper = styled.footer`
  display: grid;
  bottom: 0;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #333;
  color: #fff;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 250px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Name = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SocialLink = styled.a`
  display: inline-block;
  margin-right: 1rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ContactLink = styled.a`
  display: inline-block;
  margin-bottom: 0.5rem;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff8777;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LeftSection>
        <img style={{width: '100px', filter: 'invert(100%)'}} src={Logo} alt="" />
      </LeftSection>
      <CenterSection>
        <Name>Joan Guinart Casas</Name>
        <SocialMedia>
          <SocialLink href="https://www.instagram.com/joanguinart_/"  target="_blank">
            <img style={{ width: "30px" }} src={Insta} alt="logo instagram" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/joan-guinart-casas/" target="_blank">
            <img
              style={{ width: "30px" }}
              src={LinkedIn}
              alt="logo linkedin"
            />
          </SocialLink>
          <SocialLink href="https://github.com/JoanGuinart" target="_blank">
            <img style={{ width: "30px" }} src={GitHub} alt="logo github" />
          </SocialLink>
        </SocialMedia>
      </CenterSection>
      {/* -------------------------------------------------------------- */}
      <RightSection>
        <ContactInfo>
          <ContactLink href={"tel: +34617056810"}>
            Tlf: +34 617 05 68 10
          </ContactLink>
          <ContactLink href={"mailto: guinartcasasjoan@gmail.com"}>
            Email: guinartcasasjoan@gmail.com
          </ContactLink>
        </ContactInfo>
      </RightSection>
    </FooterWrapper>
  );
};

export default Footer;
