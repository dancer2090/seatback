/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import { connect } from 'frontity';
import Button from '../Button';
import HeaderBox from '../HeaderBox';
import ListPosts from './ListPosts';
import { Action } from './styles';

const List = ({ state, actions }) => {
  // Get the data of the current list.

  const articlesRef = useRef(null);

  const data = state.source.get(state.router.link);
  const { totalPages } = state.source.get(state.router.link);
  const nullItem = state.source[data.items[0].type][data.items[0].id];

  const options = state.seatbackapi.options.acf;

  const bannerPost = {
    title: nullItem.title.rendered,
    read: nullItem.acf.time_read,
    link: nullItem.link,
  };
  const mediaObj = state.source.attachment[nullItem.featured_media];

  const [loadMoreHidden, setLoadMoreHidden] = useState(false);

  let countSlice = 0;
  if (state.seatbackapi.pageNumber - 1 !== totalPages) countSlice = state.seatbackapi.pageNumber - 2;

  let megaItems = data.items.slice(1);
  let currentData;
  if (state.seatbackapi.pageNumber > 2) {
    for (let i = 2; i < state.seatbackapi.pageNumber; i++) {
      currentData = state.source.get(`/blog/page/${i}`);
      if (currentData.isReady) {
        megaItems = megaItems.concat(currentData.items);
      }
    }
    if (currentData.isReady) {
      const spliceCount = megaItems.length - countSlice;
      megaItems.splice(spliceCount);
    }
  }

  state.seatbackapi.customPostTotal = totalPages;
  const loadMore1 = () => {
    actions.source.fetch(`/blog/page/${state.seatbackapi.pageNumber}/`);
    state.seatbackapi.pageNumber += 1;
    if (state.seatbackapi.pageNumber - 1 === totalPages) setLoadMoreHidden(true);
  };

  return (
    <>
      <HeaderBox
        title={options.b_title}
        description={options.b_description}
        scrollRef={articlesRef}
        isArchive
        postObj={bannerPost}
        image={mediaObj.source_url}
      />
      <div ref={articlesRef}>
        <ListPosts items={megaItems} />
      </div>

      <Action>
        <Button mobile hidden={loadMoreHidden} onClick={() => loadMore1()}>
          Load More
        </Button>
      </Action>
    </>
  );
};

export default connect(List);
