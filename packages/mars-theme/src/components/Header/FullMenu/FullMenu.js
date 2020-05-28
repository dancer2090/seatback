import React from 'react';
import { connect } from 'frontity';
import Button from '../../Button';
import Loader from '../../Loader';
import {
  Contaiter,
  Blocks,
  Block,
  Picture,
  Action,
  Title,
  Description,
  Item,
  ItemBox,
  CloseBlock,
} from './styles';

const FullMenu = ({
  state,
  actions,
  libraries,
  categoryItems = [],
  isOpen,
  onClose = () => {},
}) => {
  const Html2React = libraries.html2react.Component;
  const followLink = (link) => {
    actions.router.set(link);
  };
  return (
    <Contaiter show={isOpen}>
      <CloseBlock onClick={() => onClose()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
          <g id="Chevron" transform="translate(8) rotate(90)">
            <path d="M10,1A1,1,0,0,0,8.293.293L5,3.586,1.707.293A1,1,0,1,0,.293,1.707l4,4a1,1,0,0,0,1.415,0l4-4A1,1,0,0,0,10,1Z" transform="translate(2 8) rotate(-90)"/>
          </g>
        </svg>
      </CloseBlock>
      <Blocks>
        {categoryItems.length > 0 && categoryItems.map((item) => {
          const dataP = state.source.get(`/${item.slug}`);
          const post = !dataP.isFetching ? state.source[dataP.type][dataP.id] : null;
          const {
            acf = {},
            featured_media = null,
          } = post || {};
          const media = state.source.attachment[featured_media];
          const { shortDescription = '' } = acf;
          return post ? (
            <Block key={dataP.id}>
              <Item>
                <ItemBox>
                  <Title onClick={() => followLink(dataP.link)}>
                    <Html2React html={post.title.rendered} />
                  </Title>
                  <Description>{shortDescription}</Description>
                  <Picture onClick={() => followLink(dataP.link)} src={media ? media.source_url : null} />
                  <Action>
                    <Button mode="transparent" onClick={() => followLink(dataP.link)}>Learn More</Button>
                  </Action>
                </ItemBox>
              </Item>
            </Block>
        ): (<Loader />) })}
      </Blocks>
    </Contaiter>
  );
};

export default connect(FullMenu);