import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import Slider from "react-slick";
import GrammarlyImage from '../../../img/grammarly.svg';
import {
  Title,
  Container, 
  CarouselContainer,
  Item,
  ImageBox,
  SlickContainer,
} from './styles';


const Parthers = ({state}) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const data1 = post.acf.customers;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
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
    <>
      <Title>
        Customers and partners already use Seatback to <span>lead</span> more active lives.
      </Title>
      <Container>
        <CarouselContainer>
          <SlickContainer>
            <Slider {...settings}>
                {data1.length > 0 && data1.map((d, n) => (
                  <Item key={n}>
                    <ImageBox>
                      <img src={d.url} />
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
      </Container>
    </>
  )
}

export default connect(Parthers);