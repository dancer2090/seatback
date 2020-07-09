
import { styled, css } from 'frontity';

import {
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  HEADER_HEIGHT,
  HEADER_HEIGHT_RESPONSIVE,
  PADDING_MOBILE,
  getPxSize,
  SIZE_MOBILE,
} from '../../../const/responsive';

export const MobileButton = styled.li`
  display: block;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
`;

export const NavContainer = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  opacity: 1;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};

  flex-wrap: wrap;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  /* box-shadow: 2px 2px 8px #0000000D; */
  opacity: 1;
`;

export const NavItem = styled.li`
  position: relative;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  width: 100%;
  flex-wrap: wrap;

  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 0;
  padding-right: 0;

  border-bottom: 1px solid #CCCCCC;

  > span {
    width: 100%;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;

    ${(props) => props.isOpen && css`
      font-weight: 600;
    `}
  }

  & > a {
    padding: 10px 0; 
    color: #2E293C;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: all 0.3s ease-in-out;

    flex-wrap: wrap;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
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
    width: 100%;
    min-width: 200px;
    margin: 0;
    padding: 0;
    background-color: white;
    box-shadow: 4px 4px 8px #00000014;
    border: 1px solid #00000014;

    ${(props) => props.isOpen && css`
      padding: 15px 0 0 0;
    `}

    & > li {
      list-style: none;
      border-bottom: 1px solid #00000014;
      @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
        border: none;
      }
      & > a {
        display: block;
        font-size: 14px;
        line-height: 24px;
        color: #2E293C;
        &:hover {
          color: #52DE97;
        }
        text-align: left;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
      }

      &:last-of-type {
        & > a {
          padding-bottom: 0;
        }
      }
    }

      width: 100%;
      display: block;
      position: static;
      border: none;
      box-shadow: none;
  }
`;

export const ResposnsiveMenu = styled.div`
  position: static;
  top: ${HEADER_HEIGHT}px;
  right: 0;
  z-index: 102;
  display: block; 
  top: ${HEADER_HEIGHT}px;
  width: 100%;
`;

export const SubMenu = styled.ul`
  transition: all 0.3s ease-in-out;
  height: 0;
  opacity: 0;
  z-index: -1;
  ${props => props.isOpen && css`
    height: auto;
    opacity: 1;
    z-index: initial;
  `}
`;
