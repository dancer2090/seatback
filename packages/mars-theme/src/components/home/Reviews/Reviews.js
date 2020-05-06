import React from 'react';
import { styled, connect, fetch, URL } from "frontity";
import HappyImage from '../../../img/emoji-happy.svg';
import Slider from "react-slick";
import { 
  SlickContainer, 
  Picture, 
  Description, 
  Comment,
  Item,
  ItemBox,
  Status,
  Container,
  ArrowIcon,
} from './styles';

const Reviews = ({state, actions}) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const acf_blocks = post.acf.feedbacks;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Container>

      <SlickContainer>
        <Slider {...settings}>
          {acf_blocks.map(d => (
            <Item>
              <ItemBox>
                <Picture>
                  <img alt={d.name} src={d.photo.url} />
                </Picture>
                <Description>
                  <Comment>
                    {d.text}
                  </Comment>
                  <Status>
                    {d.name}
                  </Status>
                </Description>
              </ItemBox>
            </Item>
          ))}
        </Slider>
      </SlickContainer>
    </Container>
  );
}

export default connect(Reviews);