import React, { useRef, useEffect, useState } from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Button from '../Button';
import HeaderBox from '../HeaderBox';
import ListPosts from './ListPosts';
import {
  Action,
} from './styles';

const List = ({ state, actions, libraries }) => {
  // Get the data of the current list.

  const articlesRef = useRef(null);

  const data = state.source.get(state.router.link);
  const { next, previous, totalPages } = state.source.get(state.router.link);
  console.log(next);
  //const data = state.source.get(next);
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
  const [loadMoreHidden, setLoadMoreHidden] = useState(false);

  const { api } = libraries.source;




  //var countSlice = state.seatbackapi.pageNumber-2;
  var per_page = state.source.params.per_page;
  var countSlice = 0;
  if((state.seatbackapi.pageNumber-1)!=totalPages) countSlice=state.seatbackapi.pageNumber-2;
  //var postItems = Object.values(state.source.post).slice(countSlice).reverse().slice(1);

  var megaItems = data.items.slice(1);
  if(state.seatbackapi.pageNumber>2){
    for(var i=2;i<state.seatbackapi.pageNumber;i++){
      var currentData = state.source.get(`/blog/page/${i}`);
      console.log(currentData);
      if(currentData.isReady){
        megaItems = megaItems.concat(currentData.items);
      }
    }
    if(currentData.isReady){
      var splice_count = megaItems.length-countSlice;
      megaItems.splice(splice_count);
    }
  }

  state.seatbackapi.customPostTotal = totalPages;
  const loadMore1 = () => {
    actions.source.fetch(`/blog/page/${state.seatbackapi.pageNumber}/`);
    state.seatbackapi.pageNumber+=1;
    if((state.seatbackapi.pageNumber-1)==totalPages) setLoadMoreHidden(true);
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
        <ListPosts items={megaItems}/>
      </div>

      <Action>
        <Button hidden={loadMoreHidden} onClick={()=>loadMore1()}>Load More</Button>
      </Action>
    </>
  );
};

export default connect(List);