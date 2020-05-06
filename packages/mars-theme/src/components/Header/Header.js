import React, { useState } from "react";
import { connect } from "frontity";
import Nav from "../nav";
import Link from '../link';
import Button from '../Button';
import ImageLogo from '../../img/sb_logo.svg';
import { SIZE_MOBILE } from '../../const/responsive';
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

  const [isMenuOpen, setMenuOpen] = useState(false)
  function menuAction() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Container isMenuOpen={isMenuOpen}>
        <MenuBox>
          <LogoSection>
            <Link link="/">
              <img src={ImageLogo} alt="seatback logo" />
            </Link>
          </LogoSection>
          <NavSection>
            <Nav setMenuOpen={setMenuOpen} />
          </NavSection>
          <ButtonSection>
            <Button block >
              Get a Demo
            </Button>
          </ButtonSection>
          <NavIconSection>
            <NavIcon isOpen={isMenuOpen} onClick={() => menuAction()}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </NavIcon>
          </NavIconSection>
        </MenuBox>
        {isMenuOpen && (
          <ResposnsiveMenu>
            <Nav setMenuOpen={setMenuOpen} />
          </ResposnsiveMenu>
        )}
      </Container>
      <Space />
    </>
  );
};

export default connect(Header);