/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'frontity';
import Equalizer from 'react-equalizer';
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


const Help = ({
  state,
  libraries,
  title = '',
  items = [],
}) => {
  const Html2React = libraries.html2react.Component;

  

  return (
    <Container>
      {title !== '' && (
        <Title>
          <Html2React html={title} />
        </Title>
      )}
      <Blocks>
        <Equalizer byRow={false}>
          {items.length > 0 && items.map((item, key) => (
            item.repeater.length > 0 && item.repeater.map((subItem, n) => (
              <Wow key={(key + 1) * n} offset={-100} delay={`${0.3 * n}s`} forceUpdate animation="fadeIn">
                <Block>
                  <BlockContent>
                    <Icon type={item.acf_fc_layout}>
                      {item.acf_fc_layout === 'blocks_with_icons' && (
                      <img src={subItem.icon.url} alt="description attribute" />
                      )}
                      {item.acf_fc_layout === 'blocks_with_text' && subItem.header}
                    </Icon>
                    <Description>
                      <Html2React html={subItem.text} />
                    </Description>
                  </BlockContent>
                </Block>
              </Wow>
            ))
          ))}
        </Equalizer>
      </Blocks>
    </Container>
  );
};

export default connect(Help);
