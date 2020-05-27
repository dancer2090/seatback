/* eslint-disable react/no-array-index-key */

import React from 'react';
import { connect } from 'frontity';
import {
  Container,
  ImagesContainer,
  Content,
  Image,
} from './styles';

const StoryContent = ({
  images = [],
  content = '',
  libraries,
}) => {
  const Html2React = libraries.html2react.Component;
  return (
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
  );
};

export default connect(StoryContent);
