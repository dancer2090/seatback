/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'frontity';
import Link from '../../link';
import Button from '../../Button';
import Wow from '../../Wow';
import {
  GlobalContainer,
  Container,
  HeaderBoxContainer,
  DescriptionBox,
  BannerArticlesBox,
  Scroll,
  HeaderFooter,
  ImageContainer,
} from './styles';

const HeaderBoxProduct = ({
  title = '',
  description = '',
  scrollRef,
  button = {},
  libraries,
  // eslint-disable-next-line no-unused-vars
  bg_size = 'cover',
  offset = 100,
  image = {},
}) => {
  const scrollToRef = () => {
    // eslint-disable-next-line no-unused-expressions
    scrollRef ? window.scrollTo({
      top: scrollRef.current.offsetTop - offset,
      left: 0,
      behavior: 'smooth',
    }) : null;
  };
  const buttonColor = (Object.keys(button).length > 0 ? 'rgb(82, 222, 151, 0)' : '#52DE97');
  const textColor = (Object.keys(button).length > 0 ? '#2E293C' : '#fff');
  const buttonColorHover = (Object.keys(button).length > 0 ? '#52DE97' : '#2E293C');
  const textColorHover = (Object.keys(button).length > 0 ? '#fff' : '#52DE97');

  const Html2React = libraries.html2react.Component;

  return (
    <GlobalContainer>
      <Container>
        <HeaderBoxContainer>
          <Wow animation="slideUp">
            <DescriptionBox>
              {title !== '' && (<h1><Html2React html={title} /></h1>)}
              {description !== '' && (<Html2React html={'<p>'+description+'</p>'} />)}
              <HeaderFooter>
                {scrollRef && (
                  <Scroll
                    textColor={textColor}
                    buttonColor={buttonColor}
                    textColorHover={textColorHover}
                    buttonColorHover={buttonColorHover}
                  >
                    <button type="button" onClick={() => scrollToRef()}> Discover </button>
                  </Scroll>
                )}
                {Object.keys(button).length > 0 && (
                  <>
                    <Link link={button.url}>
                      <Button block>
                        {button.title}
                      </Button>
                    </Link>
                  </>
                )}
              </HeaderFooter>
            </DescriptionBox>
          </Wow>
          <Wow animation="fadeIn" delay="0.3s">
            <BannerArticlesBox>
              <ImageContainer>
                <img alt="description attribute" src={image} />
              </ImageContainer>
            </BannerArticlesBox>
          </Wow>
        </HeaderBoxContainer>
      </Container>
    </GlobalContainer>
  );
};

export default connect(HeaderBoxProduct);
