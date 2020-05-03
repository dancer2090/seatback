import React from 'react';
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
} from './styles';

const Reviews = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const data = [
    {
      image: 'https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png',
      
    },
    {
      image: 'https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png',
    },
    {
      image: 'https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png',
    },
  ];

  return (
    <div>
      <SlickContainer>
        <Slider {...settings}>
          <Item>
            <ItemBox>
              <Picture>
                <img alt="user name" src="https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png" />
              </Picture>
              <Description>
                <Comment>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </Comment>
                <Status>
                  Eric Bernstain | President of Asset Management
                </Status>
              </Description>
            </ItemBox>
          </Item>
        </Slider>
      </SlickContainer>
    </div>
  );
}

export default Reviews;