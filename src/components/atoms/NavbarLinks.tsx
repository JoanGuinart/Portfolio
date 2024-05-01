import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20vw;
  margin-right: 1vw;
  @media (max-width: 780px){
    display: none
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 14px;
  color: black;
  text-decoration: none;
  height: 3vw;
  text-align: center;
  padding-left: 1vw;
  padding-right: 1vw;
  margin-left: 1vw;
  margin-right: 1vw;
  &:hover {
    border-radius: 7px;
    cursor: pointer;
    color: whitesmoke;
    background-color: black;
    transition: background-color 0.3s linear, color 0.5s linear,
      border-radius 0.4s linear;
  }
  &.active {
    background: black;
    color: white;
    border-radius: 7px;
  }
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

function NavbarLinks() {
  const [activeLink, setActiveLink] = useState("#HOME");
  
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (targetId) {
      const targetElement = document.querySelector<HTMLElement>(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("HOME");
      const aboutSection = document.getElementById("ABOUT");
      const skillsSection = document.getElementById("SKILLS");
      const projectsSection = document.getElementById("PROJECTS");
      const contactSection = document.getElementById("CONTACT");

      const sections = [
        { id: "HOME", ref: homeSection },
        { id: "ABOUT", ref: aboutSection },
        { id: "SKILLS", ref: skillsSection },
        { id: "PROJECTS", ref: projectsSection },
        { id: "CONTACT", ref: contactSection },
      ];

      const currentSection = sections.find(({ ref }) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return rect.top < 100 && rect.bottom > 0;
        }
        return false;
      });

      setActiveLink(currentSection ? `#${currentSection.id}` : "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  console.log(activeLink);

  return (
    <StyledNav>
      <StyledLink
        href="#HOME"
        onClick={handleLinkClick}
        className={activeLink === "#HOME" ? "active" : ""}
      >
        HOME
      </StyledLink>
      <StyledLink
        href="#ABOUT"
        onClick={handleLinkClick}
        className={activeLink === "#ABOUT" ? "active" : ""}
      >
        ABOUT
      </StyledLink>
      <StyledLink
        href="#SKILLS"
        onClick={handleLinkClick}
        className={activeLink === "#SKILLS" ? "active" : ""}
      >
        SKILLS
      </StyledLink>
      <StyledLink
        href="#PROJECTS"
        onClick={handleLinkClick}
        className={activeLink === "#PROJECTS" ? "active" : ""}
      >
        PROJECTS
      </StyledLink>
      <StyledLink
        href="#CONTACT"
        onClick={handleLinkClick}
        className={activeLink === "#CONTACT" ? "active" : ""}
      >
        CONTACT
      </StyledLink>
    </StyledNav>
  );
}

export default NavbarLinks;
