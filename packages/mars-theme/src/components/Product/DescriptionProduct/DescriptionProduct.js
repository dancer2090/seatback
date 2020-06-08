import React from 'react';
import { connect } from 'frontity';
import Wow from '../../Wow';

import {
  Container,
  Title,
  DescriptionParagraph,
  Image,
  GlobalContainer,
} from './styles';

const DescriptionProduct = ({
  libraries,
  title = '',
  description = '',
  image = {},
  circleColor = '#F5F6FA',
  bgColor = 'transparent',
  zIndex = 1,
}) => {
  const Html2React = libraries.html2react.Component;

  return (
    <GlobalContainer zIndex={zIndex} bgColor={bgColor} circleColor={circleColor}>
      <Container>
        {title.length > 0 && (
          <Title>{title}</Title>
        )}
        {image && image.url && image.url.length > 0 && (
          <Wow forceUpdate animation="fadeIn" offset={-200}>
            <Image>
              <img
                src={image.url}
                width={660}
                alt="description attribute"
              />
            </Image>
          </Wow>
        )}
        <div>
          {description.length > 0 && (
            <DescriptionParagraph>
              <Html2React html={description} />
            </DescriptionParagraph>
          )}
        </div>
      </Container>
    </GlobalContainer>
  );
};

export default connect(DescriptionProduct);
