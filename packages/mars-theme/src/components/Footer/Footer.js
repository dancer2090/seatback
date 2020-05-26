import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Nav from "../nav";
import Link from '../link';
import Button from '../Button';
import ImageLogo from '../../img/sb_logo.svg';
import { SIZE_MOBILE } from '../../const/responsive';
import { 
  GlobalContainer,
  Container,
  MenuContainer,
  MenuColumnHeader,
  SubMenuContainer,
  SubMenuElement,
} from './styles';

const Footer = ({ state, data, bgColor="#FFFFFF", circleColor="#FFFFFF" }) => {
  const {
    menu=[],
    subscribe="",
    tw="#",
    lin="#",
    fb="#",
  } = state.seatbackapi.options.acf;
  console.log(menu);
  return (
    <GlobalContainer bgColor={bgColor} circleColor={circleColor}>
      <Container>
        {menu && menu.length > 0 && (
          <MenuContainer>
            {menu.map((i, key) => {
              return (
                <>
                  <MenuColumnHeader>
                    <Link link={i.link}>{i.name}</Link>
                  </MenuColumnHeader>
                  {i.sub_menu && i.sub_menu.length > 0 && (
                    <SubMenuContainer>
                      {i.sub_menu.map((sub_i, j) => (
                         <SubMenuElement>
                           <Link link={sub_i.link.url}>
                             {sub_i.link.title}
                           </Link>
                         </SubMenuElement>
                      ))}
                    </SubMenuContainer>
                  )}
                </>
              )
            })}
          </MenuContainer>
        )}
      </Container>
    </GlobalContainer>
  );
};

export default connect(Footer);