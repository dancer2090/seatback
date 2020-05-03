import React from 'react';
import { styled, css } from "frontity";

const StyledButton = styled.button`
  background: #52DE97 0% 0% no-repeat padding-box;
  border: 1px solid #52DE97;
  border-radius: 29px;
  opacity: 1;
  min-height: 58px;
  padding: 0 49px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${props => props.size === 'large' && css`
    font-size: 24px;
    line-height: 29px;
  `}

  &:hover {
    background: #2bad6b;
    border: 1px solid #2bad6b;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
