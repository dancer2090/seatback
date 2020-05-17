import React, { useRef } from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Button from '../Button';
import HeaderBox from './HeaderBox';
import ListPosts from './ListPosts';
import {
  Action,
} from './styles';

const List = ({ state, actions }) => {
  // Get the data of the current list.

  const articlesRef = useRef(null);

  const data = state.source.get(state.router.link);
//  const null_item_state = data.items.shift();

  const null_item = state.source[data.items[0].type][data.items[0].id];

  const options = state.seatbackapi.options.acf;

  const banner_post = {
    title:null_item.title.rendered,
    read:null_item.acf.time_read,
    link:null_item.link,
  }
  const media_obj = state.source.attachment[null_item.featured_media];

  const loadMore = () => {
    actions.seatbackapi.loadMore();
  }

  return (
    <>
      <HeaderBox 
        title={options.b_title}
        description={options.b_description}
        scrollRef={articlesRef}
        isArchive={true}
        postObj={banner_post}
        image={media_obj.source_url}
      />
      <div ref={articlesRef}>
        <ListPosts />
      </div>

      <Action>
        <Button>Load More</Button>
      </Action>

      <Pagination />
    </>
  );
};

export default connect(List);