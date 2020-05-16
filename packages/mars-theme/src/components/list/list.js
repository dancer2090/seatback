import React, { useRef } from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import HeaderBox from './HeaderBox';
import {
  Container,
} from './styles';

const List = ({ state }) => {
  // Get the data of the current list.

  const articlesRef = useRef(null);
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* If the list is a taxonomy, we render a title. */}
      <HeaderBox 
        title="Blog"
        description="Learn more about the best ways to get active and stay healthy."
        scrollRef={articlesRef}
        isArchive={false}
      />
      {/* {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )} */}

      {/* If the list is for a specific author, we render a title. */}
      {/* {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )} */}

      {/* Iterate over the items of the list. */}
      <div ref={articlesRef}>
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <Pagination />
    </>
  );
};

export default connect(List);