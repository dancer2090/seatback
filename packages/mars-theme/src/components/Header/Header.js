import React, { useState } from "react";
import { connect } from "frontity";
import Nav from "../nav";
import Button from '../Button';
import ImageLogo from '../../img/sb_logo.svg';
import { 
  Container,
  MenuBox,
  LogoSection,
  NavSection,
  ButtonSection,
  NavIcon,
  NavIconSection,
  ResposnsiveMenu,
  Space
} from './styles';

const Header = ({ state }) => {

  console.log(state);
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Container isMenuOpen={isMenuOpen}>
        <MenuBox>
          <LogoSection>
            <img src={ImageLogo} alt="seatback logo" />
          </LogoSection>
          <NavSection>
            <Nav />
          </NavSection>
          <ButtonSection>
            <Button block >
              Get a Demo
            </Button>
          </ButtonSection>
          <NavIconSection>
            <NavIcon isOpen={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </NavIcon>
          </NavIconSection>
        </MenuBox>
        {isMenuOpen && (
          <ResposnsiveMenu>
            <Nav />
          </ResposnsiveMenu>
        )}
      </Container>
      <Space />
    </>
  );
};

export default connect(Header);