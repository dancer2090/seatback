import React from 'react';
import { connect } from 'frontity';
import {
  GlobalContainer,
  Container,
  HeaderBoxContainer,
  DescriptionBox,
  CircleBg,
} from './styles';

const HeaderBoxGrey = ({
  title = '',
  libraries,
}) => {
  const Html2React = libraries.html2react.Component;
  return (
    <GlobalContainer>
      <CircleBg />
      <Container>
        <HeaderBoxContainer>
          <DescriptionBox>
            {title !== '' && (<h1><Html2React html={title} /></h1>)}
          </DescriptionBox>
        </HeaderBoxContainer>
      </Container>
    </GlobalContainer>
  );
};

export default connect(HeaderBoxGrey);
