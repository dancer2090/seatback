/* eslint-disable camelcase */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import Nav from '../nav';
import Link from '../link';
import Button from '../Button';
import ImageLogo from '../../img/sb_logo.svg';
import FullMenu from './FullMenu';
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
        actions.source.fetch(`/${item.slug}`);
        if (item.child_items && item.child_items.length > 0) {
          item.child_items.forEach((cItem) => {
            actions.source.fetch(`/${cItem.slug}`);
          });
          if (setItems.length === 0) setItems = item.child_items;
        }
      });
      setCategoryItems(setItems);
    }
  };

  const onClickParent = (parentSlug) => {
    const parent = items.find((item) => item.slug === parentSlug);
    setCategoryItems(parent.child_items);
    setCategoryOpen(true);
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
          <LogoSection>
            <Link link="/">
              <img src={ImageLogo} alt="seatback logo" />
            </Link>
          </LogoSection>
          <NavSection>
            <Nav setMenuOpen={setMenuOpen} onClickParent={onClickParent}  />
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
        {isMenuOpen && (
          <ResposnsiveMenu>
            <Nav setMenuOpen={setMenuOpen} />
          </ResposnsiveMenu>
        )}
        <FullMenu
          categoryItems={categoryItems}
          isOpen={isCategoryOpen}
          onClose={() => setCategoryOpen(false)}
        />
        {data.isPostType && data.link.indexOf('/blog') !== -1 && <Progress scroll={`${scrollPosition}%`} />}
      </Container>
      <Space />
    </>
  );
};

export default connect(Header);
