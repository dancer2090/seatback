import React from 'react';
import { connect } from "frontity";
import Link from '../../link';
import Button from '../../Button';
import {
  Container,
  ImagesContainer,
  Content,
  Image,
} from './styles';

const StoryContent = ({
  images = [],
  content = "",
  libraries,
}) => {

  const Html2React = libraries.html2react.Component;
  console.log(images);
  return (
    <Container>
      {images.length > 0 && (
        <ImagesContainer>
          {images.map((image, key) => {
            return (
              <Image src={image.url} />
            )
          })}
        </ImagesContainer>
      )}
      <Content>
        <Html2React html={content} />
      </Content>

    </Container>
  );
}

export default connect(StoryContent);