/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import Link from '../../link';
import Button from '../../Button';
import Collapse from './Collapse';
import {
  NavContainer,
  NavItem,
  MobileButton,
  ResposnsiveMenu,
  SubMenu,
} from './styles';

const MobileMenu = ({
  state,
  libraries,
  actions,
  isOpen = true,
  closeMenu = () => {},
}) => {
  const Html2React = libraries.html2react.Component;
  const { header_button = {} } = state.seatbackapi.options.acf;
  const { seatbackapi: { menu: { items = [] } } } = state;
  const [activeMenu, setActiveMenu] = useState(null);

  const clickSubMenu = (key) => {
    const newKey = activeMenu === key ? null : key;
    setActiveMenu(newKey);
  };

  const clickLink = (link) => {
    actions.router.set(link);
    window.scrollTo(0, 0);
    closeMenu();
  };

  useEffect(() => {
    setActiveMenu(null);
  }, [isOpen]);

  return (
    <ResposnsiveMenu>
      <NavContainer isOpen={isOpen}>
        {items && items.length > 0 && (
          <>
            {items.map((i, key) => (
              <NavItem key={key} isOpen={activeMenu === key}>
                {!i.child_items ? (
                  <span onClick={() => clickLink(i.urlFrontity)}>
                    <Link link={`${i.urlFrontity}`}>
                      <Html2React html={`${i.title}`} />
                    </Link>
                  </span>
                ) : (
                  <>
                    {i.child_items && i.child_items.length > 0 && (
                      <Collapse i={i} key={key}>
                        <SubMenu isOpen>
                          {i.child_items.map((cItem, ckey) => (
                            <li key={ckey} onClick={() => clickLink(cItem.urlFrontity)}>
                              <Link link={cItem.urlFrontity}>
                                <Html2React html={`${cItem.title}`} />
                              </Link>
                            </li>
                          ))}
                        </SubMenu>
                      </Collapse>
                    )}
                  </>
                )}
              </NavItem>
            ))}
          </>
        )}
        <MobileButton>
          {header_button && (
            <Button
              mobile
              onClick={() => clickLink(header_button.url.replace(state.frontity.adminUrl, state.frontity.url))}
            >
              {header_button.title}
            </Button>
          )}
        </MobileButton>
      </NavContainer>
    </ResposnsiveMenu>
  );
};

export default connect(MobileMenu);
