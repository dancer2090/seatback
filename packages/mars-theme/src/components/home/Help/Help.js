/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'frontity';
import Wow from '../../Wow';
import {
  Container,
  Title,
  Blocks,
  Block,
  BlockContent,
  Icon,
  Description,

} from './styles';


const Help = ({ state, libraries }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  const bo = post.acf.business_outcomes;
  const title = post.acf.bo_header;

  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      <Wow offset={-200} animation="slideUp">
        <Title>
          <Html2React html={title} />
        </Title>
      </Wow>
      <Blocks>
        {bo.length > 0 && bo.map((item, key) => (
          <Wow animation="slideUp" delay={`${(key * 0.3) + 0.3}s`} key={key}>
            <Block key={key}>
              <BlockContent>
                <Icon>
                  <img src={item.image.url} alt="description attribute" />
                </Icon>
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

export default connect(Help);
