import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Button from './Button';

const Header = ({ state }) => {
  return (
    <>
      <Container>
<<<<<<< HEAD
        
=======
        <MenuBox>
          <LogoSection>
            <img />
          </LogoSection>
          <NavSection>
            <Nav />
          </NavSection>
          <ButtonSection>
            <Button>
              Get a Demo
            </Button>
          </ButtonSection>
        </MenuBox>
>>>>>>> cb24718e61dffcb83b6295c5e073e1f31d22b109
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  padding-left: 150px;
  padding-right: 150px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 8px #0000000D;
  opacity: 1;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: 100px;
  position: relative;
`;