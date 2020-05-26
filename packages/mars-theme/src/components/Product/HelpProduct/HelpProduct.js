import React from 'react';
import { connect } from 'frontity';
import Wow from './../../Wow';
import { 
  Container,
  Title,
  Blocks,
  Block,
  BlockContent,
  Icon,
  Description,

} from './styles';


const HelpProduct = ({state, libraries, items=[]}) => {

  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      <Blocks>
        {items.length > 0 && items.map((item, key) => {
          return (
            <Block key={key}>
              <BlockContent>
                <Icon>{key+1}</Icon>
                <Description>
                  <Html2React html={item.text}/>
                </Description>
              </BlockContent>
            </Block>
          );
        })}
      </Blocks>
    </Container>
  );
}

export default connect(HelpProduct);