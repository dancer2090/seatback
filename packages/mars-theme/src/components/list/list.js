import React, { useRef, useEffect, useState } from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Button from '../Button';
import HeaderBox from './HeaderBox';
import ListPosts from './ListPosts';
import {
  Action,
} from './styles';

const List = ({ state, actions, libraries }) => {
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

  const [newPosts, setNewPosts] = useState([]);

  const { api } = libraries.source;

  const loadMore1 = () => {
    console.log(123)
    const data_send = {
      offset : (state.seatbackapi.pageNumber * 8 + 1),
      per_page : 8,
    };
    actions.theme.loadMore(data_send);

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
        <ListPosts/>
      </div>

      <Action>
        <Button onClick={()=>loadMore1()}>Load More</Button>
      </Action>
    </>
  );
};

export default connect(List);