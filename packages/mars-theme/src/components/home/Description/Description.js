import React, { useEffect } from 'react';
import { styled, connect, fetch, URL } from "frontity";
import ImageSeatbackPlus from '../../../img/seatback_plus@2x.png';
import ImageSeatbackChair from '../../../img/seat-element-chair.png';
import ImageSeatbackProcessor from '../../../img/seat-element-processor.png';
import ImageSeatbackSeat from '../../../img/seat-element-seat.png';
import ImageSeatbackWatch from '../../../img/seat-element-watch.png';
import Button from '../../Button';
import Link from "../../link";
import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';
import { useSpring, animated } from 'react-spring'


import { 
  Container,
  Title,
  SubTitle,
  DescriptionParagraph,
  Action,
  Image,
  GlobalContainer,
} from './styles';



const Description = ({state, actions, libraries}) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const acf_blocks = post.acf.blocks;

  const Html2React = libraries.html2react.Component;

  // console.log("post acf: ");
  // console.log(post.acf);

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <GlobalContainer onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      {acf_blocks.map(d => {
        return (
          <Container key={d.header} alignImage={d.alignImage}>
            <ReactWOW offset={-300} animation='slideUp'>
              {d.header.length>0 &&
                <Title alignImage={d.alignImage}>
                  {d.header}
                </Title>
              }
            </ReactWOW>
            <ReactWOW offset={-300} animation='fadeIn'>
              {d.image.url.length>0 &&
                <Image alignImage={d.alignImage}>
                  <animated.img src={d.bg.url} width={660} alt="image" class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                  <animated.img src={d.image.url} width={660} class="card2" style={{ transform: props.xy.interpolate(trans2) }} alt="image" />
                </Image>
              }
            </ReactWOW>
            <ReactWOW offset={-300} animation='slideUp'>
              <div>
                {d.thumbnail.length>0 &&
                  <SubTitle alignImage={d.alignImage}>
                    {d.thumbnail}
                  </SubTitle>
                }
                {d.text.length>0 &&
                  <DescriptionParagraph alignImage={d.alignImage}>
                    <Html2React html={d.text} />
                  </DescriptionParagraph>
                }
                <Action>
                  {d.link.url && d.link.url !== '' && (
                    <Link link={d.link.url}>
                      <Button>{d.link.title}</Button>
                    </Link>
                  )}
                </Action>
              </div>
            </ReactWOW>
          </Container>
        );
      })}
    </GlobalContainer>
  );
}

export default connect(Description);