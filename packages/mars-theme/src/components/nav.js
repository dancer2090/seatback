import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Button from "./Button";
import  {
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  HEADER_HEIGHT,
  HEADER_HEIGHT_RESPONSIVE,
  getPxSize,
  SIZE_MOBILE,
} from '../const/responsive';
/**
 * Navigation Component
 * 
 * It renders the navigation links
 */
const Nav = ({
   state,
   libraries,
   setMenuOpen  = () => {console.log('set action')},
  }) => {

  const Html2React = libraries.html2react.Component;

  const { seatbackapi: { menu: { items = [] } } } = state;
  return (
    <NavContainer>
      {items && items.length > 0 && (
        <>
          {items.map((i, key) => (
            <NavItem key={key} onClick={() => setMenuOpen(false)}>
              <Link link={`/${i.slug}`}>
                <Html2React html={`${i.title} ${i.child_items && i.child_items.length > 0 ? ' › ' : ''}`} />        
              </Link>
              {i.child_items && i.child_items.length > 0 && (
                <ul>
                  {i.child_items.map((i_c, n) => (
                    <li key={n}>                      
                      <Link link={`/${i_c.slug}`}><Html2React html={i_c.title} /></Link>
                    </li>
                  ))}
                </ul>
              )}
            </NavItem>
          ))}
        </>
      )}
      <MobileButton>
        <Link link="/">
          <Button>
            Get a Demo
          </Button>
        </Link>
      </MobileButton>
    </NavContainer>
  );

};

export default connect(Nav);

const MobileButton = styled.li`
  display: block;
  padding-top: 20px;
  padding-bottom: 30px;

  @media (min-width: ${SIZE_MOBILE+1}px) {
    display: none;
  }
`;

const NavContainer = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;


  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    flex-wrap: wrap;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 8px #0000000D;
    opacity: 1;
    padding: 0;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const NavItem = styled.li`
  position: relative;
  padding: 0 25px;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }
  
  & > a {
    padding: 10px 0; 
    color: #2E293C;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: all 0.3s ease-in-out;

    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
      font-size: 18px;
      line-height: 22px;
    }
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
      font-size: 16px;
      line-height: 20px;
    }

    @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
      flex-wrap: wrap;
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
    }


  }
  &:hover {

    & > a {
      color: #52DE97;
    }
    & > ul {
      display: block;
    }
  }

  & > ul {
    display: none;
    position: absolute;
    width: 100%;
    min-width: 200px;
    margin: 0;
    padding: 10px 25px;
    top: ${HEADER_HEIGHT}px;
    left: 0;
    background-color: white;
    box-shadow: 4px 4px 8px #00000014;
    z-index: 20;
    padding: 0;
    border: 1px solid #00000014;

    & > li {
      list-style: none;
      border-bottom: 1px solid #00000014;
      @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
        border: none;
      }
      & > a {
        padding: 10px 0;
        display: block;
        font-size: 18px;
        line-height: 22px;
        color: #2E293C;
        &:hover {
          color: #52DE97;
        }

        @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
          font-size: 18px;
          line-height: 22px;
        }
        @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
          font-size: 16px;
          line-height: 20px;
        }

        @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
          flex-wrap: wrap;
          width: 100%;
          font-size: 16px;
          line-height: 20px;
          padding-top: 15px;
          padding-bottom: 15px;
        }
      }
    }

    @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
      padding-bottom: 0;
      width: 100%;
      display: block;
      position: static;
      border: none;
      box-shadow: none;
    }

    

  }
`;
