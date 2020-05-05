import React, { useEffect } from 'react';
import { styled, connect, fetch, URL } from "frontity";
import ImageSeatbackPlus from '../../../img/seatback_plus@2x.png';
import ImageSeatbackChair from '../../../img/seat-element-chair.png';
import ImageSeatbackProcessor from '../../../img/seat-element-processor.png';
import ImageSeatbackSeat from '../../../img/seat-element-seat.png';
import ImageSeatbackWatch from '../../../img/seat-element-watch.png';
import Button from '../../Button';
import Link from "../../link";

import { 
  Container,
  Title,
  SubTitle,
  DescriptionParagraph,
  Action,
  Image,

} from './styles';



const Description = ({state, actions}) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const acf_blocks = post.acf.blocks;

  console.log("post acf: ");
  console.log(post.acf);

  return (
    <> 

      {acf_blocks.map(d => {
        return (
          <Container key={d.header} alignImage={d.alignImage}>
            {d.header.length>0 &&
              <Title alignImage={d.alignImage}>
                {d.header}
              </Title>
            }
            {d.image.url.length>0 &&
              <Image alignImage={d.alignImage}>
                <img src={d.image.url} width={660} alt="image" />
              </Image>
            }
            {d.thumbnail.length>0 &&
              <SubTitle alignImage={d.alignImage}>
                {d.thumbnail}
              </SubTitle>
            }
            {d.text.length>0 &&
              <DescriptionParagraph alignImage={d.alignImage}>
                {d.text}
              </DescriptionParagraph>
            }
            <Action>
              {d.link.url && d.link.url !== '' && (
                <Link link={d.link.url}>
                  <Button>{d.link.title}</Button>
                </Link>
              )}
            </Action>
          </Container>
        );
      })}
    </>
  );
}

export default connect(Description);