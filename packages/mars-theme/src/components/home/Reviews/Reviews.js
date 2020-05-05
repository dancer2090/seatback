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
  Container,
  ArrowIcon,
} from './styles';

const Reviews = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const data = [
    {
      image: 'https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      status: 'Eric Bernstain | President of Asset Management',
    },
    {
      image: 'https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      status: 'Eric Bernstain | President of Asset Management',
    },
    {
      image: 'https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png',
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      status: 'Eric Bernstain | President of Asset Management',
    },
  ];

  return (
    <Container>

      <SlickContainer>
        <Slider {...settings}>
          {data.map(d => (
            <Item>
              <ItemBox>
                <Picture>
                  <img alt="user name" src={d.image} />
                </Picture>
                <Description>
                  <Comment>
                    {d.comment}
                  </Comment>
                  <Status>
                    {d.status}
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

export default Reviews;