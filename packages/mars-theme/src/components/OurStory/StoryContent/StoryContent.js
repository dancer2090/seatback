/* eslint-disable react/no-array-index-key */

import React from 'react';
import { connect } from 'frontity';
import {
  Container,
  ImagesContainer,
  Content,
  Image,
  ContentBox,
} from './styles';

const StoryContent = ({
  images = [],
  content = '',
  libraries,
}) => {
  const Html2React = libraries.html2react.Component;
  return (
    <ContentBox>
      <Container>
        {images.length > 0 && (
          <ImagesContainer>
            {images.map((image, key) => (
              <Image key={key} src={image.url} />
            ))}
          </ImagesContainer>
        )}
        <Content>
          <Html2React html={content} />
        </Content>

      </Container>
    </ContentBox>
  );
};

export default connect(StoryContent);
