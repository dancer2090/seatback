import React, { useEffect } from 'react';
import { styled, connect } from 'frontity';
import { 
  Container,
  Title,
  Blocks,
  Block,
  BlockContent,
  Icon,
  Description,

} from './styles';


const Help = ({state}) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const bo = post.acf.business_outcomes;

  return (
    <Container>
      <Title>
        Seatback can help 
        <br />
        <span>improve</span> business outcomes:
      </Title>
      <Blocks>
        {bo.length > 0 && bo.map((item, key) => {
          return (
            <Block key={key}>
              <BlockContent>
                <Icon>
                  <img src={item.image.url} alt="image" />
                </Icon>
                <Description>
                  {item.text}
                </Description>
              </BlockContent>
            </Block>
          );
        })}
      </Blocks>
    </Container>
  );
}

export default connect(Help);