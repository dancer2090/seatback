import React from 'react';
import { connect } from 'frontity';
import Background2 from './Background2';
import Background3 from './Background3';
import Button from '../../Button';
import Link from '../../link';
import Wow from '../../Wow';
import { parseURL } from '../../../utils/func';

import {
  Container,
  Title,
  SubTitle,
  DescriptionParagraph,
  Action,
  Image,
  GlobalContainer,
} from './styles';

const Description = ({ state, libraries }) => {
  const urlObject = state.frontity.rendering === 'csr' ? parseURL(state.router.link) : {};
  const aminationType = urlObject.searchObject && urlObject.searchObject.animation
    ? urlObject.searchObject.animation
    : 'first';

  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  const acfBlocks = post.acf.blocks;

  const Html2React = libraries.html2react.Component;

  return (
    <GlobalContainer>
      {acfBlocks.map((d) => (
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
              {aminationType === 'first' && (
              <Background3
                alignImage={d.alignImage}
                reverse={d.alignImage === 'right'}
              />
              )}
              {aminationType === 'second' && (
              <Background2
                alignImage={d.alignImage}
                reverse={d.alignImage === 'right'}
              />
              )}
              {aminationType === 'third' && (
              <Background3
                alignImage={d.alignImage}
                reverse={d.alignImage === 'right'}
              />
              )}
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
            <div>
              {d.thumbnail.length > 0 && (
              <SubTitle alignImage={d.alignImage}>{d.thumbnail}</SubTitle>
              )}
              {d.text.length > 0 && (
              <DescriptionParagraph alignImage={d.alignImage}>
                <Html2React html={d.text} />
              </DescriptionParagraph>
              )}
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
      ))}
    </GlobalContainer>
  );
};

export default connect(Description);
