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