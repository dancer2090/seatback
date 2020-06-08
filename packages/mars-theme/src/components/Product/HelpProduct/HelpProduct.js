/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'frontity';
import Wow from '../../Wow';

import {
  Container,
  Blocks,
  Block,
  BlockContent,
  Icon,
  Description,

} from './styles';


const HelpProduct = ({ libraries, items = [] }) => {
  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      <Blocks>
        {items.length > 0 && items.map((item, key) => (
          <Wow animation="fadeIn" forceUpdate offset={-100} delay={`${0.2 * key}s`}>
            <Block key={key}>
              <BlockContent>
                <Icon>{key + 1}</Icon>
                <Description>
                  <Html2React html={item.text} />
                </Description>
              </BlockContent>
            </Block>
          </Wow>
        ))}
      </Blocks>
    </Container>
  );
};

export default connect(HelpProduct);
