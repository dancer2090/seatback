import React, { useEffect } from 'react';
import { styled, connect } from "frontity";
import ImageSeatbackPlus from '../../../img/seatback_plus@2x.png';
import ImageSeatbackChair from '../../../img/seat-element-chair.png';
import ImageSeatbackProcessor from '../../../img/seat-element-processor.png';
import ImageSeatbackSeat from '../../../img/seat-element-seat.png';
import ImageSeatbackWatch from '../../../img/seat-element-watch.png';
import Button from '../../Button';
import Link from "../../link";

const Container = styled.div`
  background: #F5F6FA 0% 0% no-repeat padding-box;
  padding-top: 205px;
  padding-bottom: 205px;
  padding-right: 150px;
  padding-left: ${props => props.alignImage === 'left' ? '50%' : '150px'};
  position: relative;
  width: 100%;

`;

const Title = styled.h2`
  margin: 0;
  padding-bottom: 15px;
  text-align: left;
  font-size: 50px;
  line-height: 70px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
  position: relative;
  z-index: 2;
`;

const SubTitle = styled.h2`
  margin: 0;
  padding-top: 15px;
  text-align: left;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
  position: relative;
  z-index: 2;
`;

const DescriptionParagraph = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #A09D9D;
  max-width: 817px;
  margin: 0;
  position: relative;
  z-index: 2;
`;


const Action = styled.div`
  margin-top: 45px;
  position: relative;
  z-index: 2;
`;


const Image = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  right: ${props => props.alignImage === 'left' ? 'auto' : '150px'};
  top: 0;
  left: ${props => props.alignImage === 'left' ? '150px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignImage === 'left' ? 'flex-start' : 'flex-end'};
`;

const Description = ({state}) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const acf_blocks = post.acf.blocks;

  console.log(post.acf);

  return (
    <>
      {acf_blocks.map(d => {
        return (
          <Container key={d.header} alignImage={d.alignImage}>
            {d.header.length>0 &&
              <Title>
                {d.header}
              </Title>
            }
            {d.image.url.length>0 &&
              <Image alignImage={d.alignImage}>
                <img src={d.image.url} width={660} alt="image" />
              </Image>
            }
            {d.thumbnail.length>0 &&
              <SubTitle>
                {d.thumbnail}
              </SubTitle>
            }
            {d.text.length>0 &&
              <DescriptionParagraph>
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