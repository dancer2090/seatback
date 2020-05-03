import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 * 
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link, sub], key) => {
      const isCurrentPage = state.router.link === link;
      return (
        <NavItem key={key}>
          <Link link={link}>
            {name} {sub && sub.length > 0 && ' › '}
            {sub && sub.length > 0 && (
              <ul>
                {sub.map(([s_name, s_link], n) => (
                  <li key={n}>
                    <Link link={s_link}>{s_name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.li`
  padding: 0 25px;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  

  & > a {
    padding: 10px 0; 
    position: relative;
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

    &:hover {
      color: #52DE97;
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
      top: 100px;
      left: 0;
      background-color: white;
      box-shadow: 4px 4px 8px #00000014;
      z-index: 20;
      padding: 0;
      border: 1px solid #00000014;

      & > li {
        list-style: none;
        border-bottom: 1px solid #00000014;
        & > a {
          padding: 10px 0;
          display: block;
          font-size: 18px;
          line-height: 22px;
          color: #2E293C;
          &:hover {
            color: #52DE97;
          }
        }
      }

    }
  }

`;
