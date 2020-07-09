/* eslint-disable camelcase */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import Nav from '../nav';
import Link from '../link';
import Button from '../Button';
import ImageLogo from '../../img/sb_logo.svg';
import FullMenu from './FullMenu';
import MobileMenu from './MobileMenu';
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
  Progress,
} from './styles';

const Header = ({ data, state, actions }) => {
  const { header_button = {} } = state.seatbackapi.options.acf;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);
  const { seatbackapi: { menu: { items = [] } } } = state;
  const [categoryItems, setCategoryItems] = useState([]);

  function menuAction() {
    setMenuOpen(!isMenuOpen);
  }

  const getDocHeight = () => Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
  );

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - windowHeight;
    const newScrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);
    setScrollPosition(newScrollPostion);
  };

  const listenToScrollEvent = () => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  const loadSubMenus = () => {
    if (items.length > 0) {
      let setItems = [];
      items.forEach((item) => {
        actions.source.fetch(item.urlFrontity);
        if (item.child_items && item.child_items.length > 0) {
          item.child_items.forEach((cItem) => {
            actions.source.fetch(cItem.urlFrontity);
          });
          if (setItems.length === 0) setItems = item.child_items;
        }
      });
      setCategoryItems(setItems);
    }
  };

  const onClickParent = (parentUrl) => {
    const parent = items.find((item) => item.urlFrontity === parentUrl);
    setCategoryItems(parent.child_items);
    setCategoryOpen(true);
  };

  const closeFillScreen = () => {
    setCategoryOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    calculateScrollDistance();
    listenToScrollEvent();
    loadSubMenus();
  }, []);

  return (
    <>
      <Container isMenuOpen={isMenuOpen}>
        <MenuBox>
          <LogoSection onClick={() => closeFillScreen()}>
            <Link link="/">
              <img src={ImageLogo} alt="seatback logo" />
            </Link>
          </LogoSection>
          <NavSection>
            <Nav
              setMenuOpen={setMenuOpen}
              onClickParent={onClickParent}
              closeMenu={() => closeFillScreen()}
            />
          </NavSection>
          <ButtonSection>
            {header_button ? (
              <Link link={header_button.url.replace(state.frontity.adminUrl, state.frontity.url)}>
                <Button block>
                  {header_button.title}
                </Button>
              </Link>
            ) : (
              <Button block>
                Get a Demo
              </Button>
            )}
          </ButtonSection>
          <NavIconSection>
            <NavIcon
              isOpen={isMenuOpen}
              onClick={() => menuAction()}
            >
              <span />
              <span />
              <span />
              <span />
            </NavIcon>
          </NavIconSection>
        </MenuBox>
        {data.isPostType && data.link.indexOf('/blog') !== -1 && <Progress scroll={`${scrollPosition}%`} />}
        <MobileMenu
          isOpen={isCategoryOpen || isMenuOpen}
          closeMenu={() => closeFillScreen()}
        />
      </Container>
      <Space />
      <FullMenu
        categoryItems={categoryItems}
        isFfullItems={isMenuOpen}
        isOpen={isCategoryOpen || isMenuOpen}
        onClose={() => closeFillScreen()}
      />
    </>
  );
};

export default connect(Header);
