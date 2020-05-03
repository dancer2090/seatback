import React from 'react';
import { SlickContainer, Picture, Description, Comment } from './styles';

const Reviews = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <SlickContainer>
        <Slider {...settings}>
          <Item>
            <div>
              <Picture>
                <img src={} />
              </Picture>
              <Description>
                <Comment>

                </Comment>
                
              </Description>
            </div>
          </Item>
        </Slider>
      </SlickContainer>
    </div>
  );
}

export default Reviews;