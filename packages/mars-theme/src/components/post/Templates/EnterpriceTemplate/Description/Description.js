import React from 'react';
import { connect } from 'frontity';
import Button from '../../../../Button';
import Link from '../../../../link';
import Wow from '../../../../Wow';

import {
  Container,
  Title,
  SubTitle,
  DescriptionParagraph,
  Action,
  Image,
  GlobalContainer,
} from './styles';

const Description = ({
  libraries, blocks, bgColor, circleColor,
}) => {
  const Html2React = libraries.html2react.Component;

  return (
    <GlobalContainer bgColor={bgColor} circleColor={circleColor}>
      {blocks
        && blocks.length > 0
        && blocks.map((d) => (
          <Container key={d.header} alignImage={d.alignimage}>
            {d.header.length > 0 && (
              <Title circleColor={circleColor} alignImage={d.alignimage}>
                {d.header}
              </Title>
            )}
            <Wow offset={-100} forceUpdate animation="fadeIn">
              {d.image && d.image.url.length > 0 && (
                <Image alignImage={d.alignimage}>
                  {!d.animated && (
                    <>
                      <img
                        src={d.image.url}
                        width={660}
                        alt="description attribute"
                      />
                    </>
                  )}
                </Image>
              )}
            </Wow>
            <div>
              {d.thumbnail.length > 0 && (
                <SubTitle alignImage={d.alignimage}>{d.thumbnail}</SubTitle>
              )}
              {d.text.length > 0 && (
                <DescriptionParagraph
                  circleColor={circleColor}
                  alignImage={d.alignimage}
                >
                  <Html2React html={d.text} />
                </DescriptionParagraph>
              )}
              <Action>
                {d.link.url && d.link.url !== '' && (
                  <Link link={d.link.url}>
                    <Button mode="dark">{d.link.title}</Button>
                  </Link>
                )}
              </Action>
            </div>
          </Container>
        ))}
    </GlobalContainer>
  );
};

export default connect(Description);
