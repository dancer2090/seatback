import React from 'react';
import { connect } from "frontity";
import {
  Container,
  ImageContainer,
  Content,
  Image,
  Title,
  GlobalContainer,
} from './styles';

const StoryBottom = ({
  image = {},
  content = "",
  title = "",
  libraries,
}) => {

  const Html2React = libraries.html2react.Component;
  return (
    <GlobalContainer>
      <Container>
        {title != '' && (
          <Title><Html2React html={title} /></Title>
        )}
        {Object.keys(image).length != '' && (
          <ImageContainer>
            <Image src={image.url}/>
          </ImageContainer>
        )}
        {content != '' && (
          <Content>
            <Html2React html={content} />
          </Content>
        )}
      </Container>
    </GlobalContainer>
  );
}

export default connect(StoryBottom);