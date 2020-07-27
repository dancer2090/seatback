/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'frontity';
import Wow from '../../Wow';
import Slider from 'react-slick';

import {
  Container,
  Blocks,
  Block,
  BlockContent,
  Icon,
  Description,
  SliderBox,
  Item,
  ItemBox,
} from './styles';

const settings = {
  infinite: true,
  dots: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  customPaging: (i) => (<button>{i + 1}</button>),
  centerPadding: "30px",
};


const HelpProduct = ({ libraries, items = [] }) => {
  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      <Blocks>
        {items.length > 0 && items.map((item, key) => (
          <Wow key={key} animation="fadeIn" forceUpdate offset={-100} delay={`${0.2 * key}s`}>
            <Block key={key}>
              <BlockContent>
                <Icon>{key + 1}</Icon>
                <Description>
                  <Html2React html={item.text} />
                </Description>
              </BlockContent>
            </Block>
          </Wow>
        ))}
      </Blocks>
      <SliderBox>
        <Slider {...settings}>
          {items.length > 0 && items.map((item, key) => (
            <Item key={key}>
              <ItemBox>
                <Html2React html={item.text} />
              </ItemBox>
            </Item>
          ))}
        </Slider>
      </SliderBox>
    </Container>
  );
};

export default connect(HelpProduct);
