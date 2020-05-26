import React from 'react';
import { connect } from 'frontity';
import Slider from "react-slick";
import Wow from '../../Wow';
import {
  Title,
  Container, 
  CarouselContainer,
  Item,
  ImageBox,
  SlickContainer,
} from './styles';


const Parthers = ({state, libraries, bgColor}) => {

  const Html2React = libraries.html2react.Component;

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];


  const data1 = post.acf.customers;
  const title = post.acf.c_header;


  const settings = {
    dots: false,
    infinite: true,
    speed: 120000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 10,
    slidesToScroll: -10,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 8
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <Container bgColor={bgColor}>
        <Wow  offset={-200} animation='slideUp'>
          <Title>
            <Html2React html={title} />
          </Title>
        </Wow>
        <Wow offset={-200}  animation='slideUp' delay="0.3s">
          <CarouselContainer>
            <SlickContainer>
              <Slider {...settings}>
                  {data1 && data1.length > 0 && data1.map((d, n) => (
                    <Item key={n}>
                      <ImageBox>
                        <img className="zoom animated"  style={
                          {
                            animationName: 'zoom',
                            animationDelay: (n*0.3)+"s" ,
                            animationIterationCount: 'infinite',
                            visibility: 'visible',
                          }
                        } src={d.url} />
                      </ImageBox>
                    </Item>
                  ))}
              </Slider>
            </SlickContainer>
          </CarouselContainer>
        </Wow>
    </Container>
  )
}

export default connect(Parthers);