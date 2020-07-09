/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'frontity';
import Slider from 'react-slick';
import Wow from '../../Wow';
import {
  SlickContainer,
  Picture,
  Description,
  Comment,
  Item,
  ItemBox,
  Status,
  Container,
} from './styles';

const Reviews = ({ state, libraries }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  const Html2React = libraries.html2react.Component;

  const acfBlocks = post.acf.feedbacks;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Container>
      <Wow offset={-200} animation="slideUp">
        <SlickContainer>
          <Slider {...settings}>
            {acfBlocks && acfBlocks.length > 0 && acfBlocks.map((d, key) => (
              <Item key={key}>
                <ItemBox>
                  <Picture>
                    <img alt={d.name} src={d.photo.url} />
                  </Picture>
                  <Description>
                    <Comment>
                      <Html2React html={d.text} />
                    </Comment>
                    <Status>
                      <Html2React html={d.name} />
                    </Status>
                  </Description>
                </ItemBox>
              </Item>
            ))}
          </Slider>
        </SlickContainer>
      </Wow>
    </Container>
  );
};

export default connect(Reviews);
