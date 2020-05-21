import React from 'react';
import { connect } from "frontity";
import Link from '../../link';
import Button from '../../Button';
import {
  GlobalContainer,
  Container,
  HeaderBoxContainer,
  DescriptionBox,
  CircleBg,
} from './styles';

const HeaderBoxGrey = ({
  title = "",
  description = "",
  button={},
  libraries,
}) => {

  const scrollToRef = () => scrollRef ? window.scrollTo({
    top: scrollRef.current.offsetTop - 150,
    left: 0,
    behavior: 'smooth'
  }) : null;

  const Html2React = libraries.html2react.Component;

  return (
    <GlobalContainer>
      <CircleBg/>
      <Container>
        <HeaderBoxContainer>
          <DescriptionBox>
            {title != '' && (<h1><Html2React html={title} /></h1>)}
          </DescriptionBox>
        </HeaderBoxContainer>
      </Container>
    </GlobalContainer>
  );
}

export default connect(HeaderBoxGrey);