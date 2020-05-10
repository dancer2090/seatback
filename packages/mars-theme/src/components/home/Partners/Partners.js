import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import Slider from "react-slick";
import GrammarlyImage from '../../../img/grammarly.svg';
import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';
import {
  Title,
  Container, 
  CarouselContainer,
  Item,
  ImageBox,
  SlickContainer,
} from './styles';


const Parthers = ({state, libraries}) => {

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
    <Container>
        <ReactWOW  offset={-200} animation='slideUp'>
          <Title>
            <Html2React html={title} />
          </Title>
        </ReactWOW>
        <ReactWOW offset={-200}  animation='slideUp' delay="0.3s">
          <CarouselContainer>
            <SlickContainer>
              <Slider {...settings}>
                  {data1.length > 0 && data1.map((d, n) => (
                    <Item key={n}>
                      <ImageBox>
                        <ReactWOW animation='zoom' delay={(n*0.3)+"s"} iteration="infinite">
                          <img src={d.url} />
                        </ReactWOW>
                      </ImageBox>
                    </Item>
                  ))}
              </Slider>
            </SlickContainer>

            {/* <ItemsCarousel
              // Placeholder configurations
              enablePlaceholder={false}
              numberOfPlaceholderItems={5}
              minimumPlaceholderTime={1000}
              placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

              // Carousel configurations
              infiniteLoop={true}
              numberOfCards={10}
              gutter={0}
              showSlither={true}
              firstAndLastGutter={true}
              freeScrolling={true}

              // Active item configurations
              requestToChangeActive={(index) => changeActiveItem(index)}
              activeItemIndex={activeItemIndex}
              activePosition={'center'}

              chevronWidth={24}
              rightChevron={'>'}
              leftChevron={'<'}
              outsideChevron={false}
            >
              {data.length > 0 && data.map((d, n) => (
                <Item key={n}>
                  <ImageBox>
                    <img src={d.image} />
                  </ImageBox>
                </Item>
              ))}
              
            </ItemsCarousel> */}
          </CarouselContainer>
        </ReactWOW>
    </Container>
  )
}

export default connect(Parthers);