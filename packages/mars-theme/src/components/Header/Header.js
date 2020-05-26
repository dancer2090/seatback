import React, { useState, useEffect } from "react";
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
  Space,
  Progress
} from './styles';

const Header = ({ data }) => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  function menuAction() {
    setMenuOpen(!isMenuOpen);
  }

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const  totalDocScrollLength  =  docHeight  -  windowHeight;
    const  newScrollPostion  =  Math.floor(scrollTop  /  totalDocScrollLength  *  100);
    setScrollPosition(newScrollPostion);
  }

  const getDocHeight  =  ()  =>  {
    return Math.max(
      document.body.scrollHeight,  document.documentElement.scrollHeight,
      document.body.offsetHeight,  document.documentElement.offsetHeight,
      document.body.clientHeight,  document.documentElement.clientHeight
    );
  }

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };


  useEffect(() => {
    calculateScrollDistance();
    listenToScrollEvent();
  },[])

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
        {data.isPostType && data.link.indexOf('/blog') !== -1 && <Progress scroll={`${scrollPosition}%`} />}
      </Container>
      <Space />
    </>
  );
};

export default connect(Header);