/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { connect } from 'frontity';
import ReactResizeDetector from 'react-resize-detector';
import Button from '../../Button';
import Loader from '../../Loader';
import Wow from '../../Wow';
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
  LinkTitle,
} from './styles';

const FullMenu = ({
  state,
  actions,
  libraries,
  categoryItems = [],
  isOpen,
  onClose = () => {},
}) => {
  const { seatbackapi: {
      menu: {
        items = [],
      },
      options = {},
    }
  } = state;
  const { acf: optionsAcf = {}} = options;
  const [isFullMenu, setFullMenu] = useState(false);
  const Html2React = libraries.html2react.Component;
  const followLink = (link) => {
    onClose();
    actions.router.set(link);
    window.scrollTo(0, 0);
  };
  const updateWidth = (width) => (width < 1200 ? setFullMenu(true) : setFullMenu(false));
  return (
    <ReactResizeDetector
      handleWidth
      onResize={updateWidth}
    >
      <Contaiter show={isOpen}>
        <CloseBlock onClick={() => onClose()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
            <g id="Chevron" transform="translate(8) rotate(90)">
              <path d="M10,1A1,1,0,0,0,8.293.293L5,3.586,1.707.293A1,1,0,1,0,.293,1.707l4,4a1,1,0,0,0,1.415,0l4-4A1,1,0,0,0,10,1Z" transform="translate(2 8) rotate(-90)" />
            </g>
          </svg>
        </CloseBlock>
        {isFullMenu ? (
          <>
            {items && items.length > 0 && items.map((item, key) => (
              <div key={key}>
                <LinkTitle onClick={() => !item.child_items && followLink(item.urlFrontity)}>
                  {item.title}
                </LinkTitle>
                <Blocks>
                  {item.child_items && item.child_items.map((cItem) => {
                    const dataP = state.source.get(cItem.urlFrontity);
                    let post = !dataP.isFetching && dataP.isReady
                      ? state.source[dataP.type][dataP.id]
                      : null;
                    const {
                      acf = {},
                      featured_media = null,
                    } = post || {};
                    let media = state.source.attachment[featured_media];
                    if (cItem.urlFrontity === '/blog/') {
                      post = {};
                      post.title = {};
                      post.title.rendered = optionsAcf.b_title;
                      post.title.rendered = optionsAcf.b_title;
                      media = {};
                      media.source_url = optionsAcf.blog_image.url;
                    }
                    const { sub_title = '' } = acf;
                    return (
                      <Block key={dataP.id}>
                        {!dataP.isFetching ? (
                          <Item>
                            <ItemBox>
                              <Title onClick={() => followLink(dataP.link)}>
                                <Html2React html={post.title.rendered} />
                              </Title>
                              <Description><Html2React html={sub_title} /></Description>
                              <Picture
                                onClick={() => followLink(dataP.link)}
                                src={media ? media.source_url : null}
                              />
                              <Action>
                                <Button mode="transparent" onClick={() => followLink(dataP.link)}>Learn More</Button>
                              </Action>
                            </ItemBox>
                          </Item>
                        ) : (
                          <Loader />
                        )}
                      </Block>
                    );
                  })}
                </Blocks>
              </div>
            ))}
          </>
        ) : (
          <Blocks>
            {categoryItems.length > 0 && categoryItems.map((item) => {
              const dataP = state.source.get(item.urlFrontity);
              let post = !dataP.isFetching && dataP.isReady
                ? state.source[dataP.type][dataP.id]
                : null;
              const {
                acf = {},
                featured_media = null,
              } = post || {};
              let { sub_title = '', header_image = {} } = acf;
              let media = state.source.attachment[featured_media];
              if(Object.keys(header_image).length > 0 && header_image.url !== ''){
                media = {};
                media.source_url = header_image.url;
              }
              if (item.urlFrontity === '/blog/') {
                post = {};
                post.title = {};
                post.title.rendered = optionsAcf.b_title;
                post.title.rendered = optionsAcf.b_title;
                media = {};
                media.source_url = optionsAcf.blog_image.url;
                sub_title = optionsAcf.sub_title;
              }
              return (
                <Block key={dataP.id}>
                  {!dataP.isFetching ? (
                    <Item>
                      <ItemBox>
                        <Title onClick={() => followLink(dataP.link)}>
                          <Html2React html={post.title.rendered} />
                        </Title>
                        <Description><Html2React html={sub_title} /></Description>
                        <Picture
                          onClick={() => followLink(dataP.link)}
                          src={media ? media.source_url : null}
                        />
                        <Action>
                          <Button mode="transparent" onClick={() => followLink(dataP.link)}>Learn More</Button>
                        </Action>
                      </ItemBox>
                    </Item>
                  ) : (
                    <Loader />
                  )}
                </Block>
              );
            })}
          </Blocks>
        )}
      </Contaiter>
    </ReactResizeDetector>
  );
};

export default connect(FullMenu);
