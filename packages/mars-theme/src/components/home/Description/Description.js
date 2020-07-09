import React from 'react';
import { connect } from 'frontity';
import Button from '../../Button';
import Link from '../../link';
import Wow from '../../Wow';

import {
  Container,
  Title,
  SubTitle,
  DescriptionParagraph,
  Action,
  Image,
  GlobalContainer,
  DescriptionBox,
} from './styles';

const Description = ({ state, libraries }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  const acfBlocks = post.acf.blocks;

  const Html2React = libraries.html2react.Component;

  return (
    <GlobalContainer>
      {acfBlocks && acfBlocks.length > 0 && acfBlocks.map((d) => (
        <Container key={d.header} alignImage={d.alignImage}>
          <Wow offset={-300} animation="slideUp">
            {d.header.length > 0 && (
            <Title alignImage={d.alignImage}>{d.header}</Title>
            )}
          </Wow>
          {d.image && d.image.url && d.image.url.length > 0 && (
          <Image alignImage={d.alignImage}>
            {d.animated && (
            <>
              <img
                src={d.image.url}
                width={660}
                className="card2"
                alt="description attribute"
              />
            </>
            )}
            {!d.animated && (
            <>
              <img src={d.image.url} width={660} alt="description attribute" />
            </>
            )}
          </Image>
          )}
          <Wow offset={-150} animation="slideUp">
            {d.thumbnail.length > 0 && (
              <SubTitle alignImage={d.alignImage}>{d.thumbnail}</SubTitle>
            )}
            <DescriptionBox>
              {d.text.length > 0 && (
              <DescriptionParagraph alignImage={d.alignImage}>
                <Html2React html={d.text} />
              </DescriptionParagraph>
              )}
            </DescriptionBox>
            <Action>
              {d.link.url && d.link.url !== '' && (
              <Link link={d.link.url}>
                <Button mobile>{d.link.title}</Button>
              </Link>
              )}
            </Action>
          </Wow>
        </Container>
      ))}
    </GlobalContainer>
  );
};

export default connect(Description);
