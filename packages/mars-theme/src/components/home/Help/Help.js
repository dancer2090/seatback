import React, { useEffect } from 'react';
import { styled, connect } from 'frontity';
import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';
import { 
  Container,
  Title,
  Blocks,
  Block,
  BlockContent,
  Icon,
  Description,

} from './styles';


const Help = ({state, libraries}) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const bo = post.acf.business_outcomes;
  const title = post.acf.bo_header;

  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      <ReactWOW animation='slideUp'>
        <Title>
          <Html2React html={title}/>
        </Title>
      </ReactWOW>
      <Blocks>
        {bo.length > 0 && bo.map((item, key) => {
          return (
            <ReactWOW animation='slideUp' delay={((key*0.3) + 0.3)+"s"}>
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
            </ReactWOW>
          );
        })}
      </Blocks>
    </Container>
  );
}

export default connect(Help);