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

const List = ({ state }) => {
  // Get the data of the current list.

  const articlesRef = useRef(null);

  const data = state.source.get(state.router.link);
  const null_item = state.source[data.items[0].type][data.items[0].id];

const data_p = state.source.get("/blog");

  console.log(state.source);
  const banner_post = {
    title:null_item.title.rendered,
    read:null_item.acf.time_read+" min read",
    link:null_item.link,
  }

  return (
    <>
      <HeaderBox 
        title="Blog"
        description="Learn more about the best ways to get active and stay healthy."
        scrollRef={articlesRef}
        isArchive={true}
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