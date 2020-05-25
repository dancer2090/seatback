import React from 'react';
import { connect } from "frontity";
import Link from '../../link';
import Button from '../../Button';
import {
  GlobalContainer,
  Container,
  HeaderBoxContainer,
  DescriptionBox,
  BannerArticlesBox,
  Scroll,
  BannerArticlesContainer,
  BannerArticlesDescription,
  New,
  Article,
  HeaderFooter,
} from './styles';

const HeaderBoxProduct = ({
  title = "", 
  description = "", 
  scrollRef, 
  button={},
  libraries,
  bg_size="cover",
  offset = 100,
  image = {},
}) => {

  const scrollToRef = () => {
    console.log(scrollRef);
    scrollRef ? window.scrollTo({
      top: scrollRef.current.offsetTop - offset,
      left: 0,
      behavior: 'smooth'
    }) : null;
  }

  const Html2React = libraries.html2react.Component;

  return (
    <GlobalContainer>
      <Container>
        <HeaderBoxContainer>
          <DescriptionBox>
            {title != '' && (<h1><Html2React html={title} /></h1>)}
            {description != '' && (<p>{description}</p>)}
              <HeaderFooter>
              {scrollRef && (
                <Scroll>
                  <button onClick={() => scrollToRef()}> Discover </button>
                </Scroll>
              )}
              {Object.keys(button).length>0 && (
                <>
                  <Link link={button.url}>
                    <Button block >
                      {button.title}
                    </Button>
                  </Link>
                </>
              )}
              </HeaderFooter>
          </DescriptionBox>
          <BannerArticlesBox>
            <BannerArticlesContainer imgSrc={image} bg_size={bg_size} />
          </BannerArticlesBox>
        </HeaderBoxContainer>
      </Container>
    </GlobalContainer>
  );
}

export default connect(HeaderBoxProduct);