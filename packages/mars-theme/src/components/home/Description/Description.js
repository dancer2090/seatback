import React, { useEffect } from 'react';
import { styled, connect, fetch, URL } from "frontity";
import ImageSeatbackPlus from '../../../img/seatback_plus@2x.png';
import ImageSeatbackChair from '../../../img/seat-element-chair.png';
import ImageSeatbackProcessor from '../../../img/seat-element-processor.png';
import ImageSeatbackSeat from '../../../img/seat-element-seat.png';
import ImageSeatbackWatch from '../../../img/seat-element-watch.png';
import Button from '../../Button';
import Link from "../../link";
import Wow from './../../Wow';

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


  return (
    <GlobalContainer>
      {acf_blocks.map(d => {
        return (
          <Container key={d.header} alignImage={d.alignImage}>
            <Wow offset={-300} animation='slideUp'>
              {d.header.length>0 &&
                <Title alignImage={d.alignImage}>
                  {d.header}
                </Title>
              }
            </Wow>
            <Wow offset={-300} animation='fadeIn'>
              {d.image.url.length>0 &&
                <Image alignImage={d.alignImage}>
                    {d.animated &&
                      <>
                        <img src={d.bg.url} width={660} alt="image" className="card1" />
                        <img src={d.image.url} width={660} className="card2" alt="image" />
                      </>
                    }
                    {!d.animated &&
                      <>
                        <img src={d.image.url} width={660} alt="image" />
                      </>
                    }
                </Image>
              }
            </Wow>
            <Wow offset={-150} animation='slideUp'>
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
            </Wow>
          </Container>
        );
      })}
    </GlobalContainer>
  );
}

export default connect(Description);