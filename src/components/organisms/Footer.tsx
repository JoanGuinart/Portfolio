import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: grid;
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
    color: #ff8777;
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
  margin-top: 1rem;
`;

const ContactLink = styled.a`
  display: inline-block;
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff8777;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LeftSection>Left</LeftSection>
      {/* -------------------------------------------------------------- */}
      <CenterSection>
        <Name>Joan Guinart Casas</Name>
        <SocialMedia>
          <SocialLink>insta</SocialLink>
          <SocialLink>linkdin</SocialLink>
          <SocialLink>blog</SocialLink>
        </SocialMedia>
      </CenterSection>
      {/* -------------------------------------------------------------- */}
      <RightSection>
        <ContactInfo>
          telef, mail, number
          <ContactLink>github, portfolio</ContactLink>
        </ContactInfo>
      </RightSection>
    </FooterWrapper>
  );
};

export default Footer;
