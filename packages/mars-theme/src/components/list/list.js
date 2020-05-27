import React, { useRef, useState } from "react";
import { connect } from "frontity";
import Button from '../Button';
import HeaderBox from '../HeaderBox';
import ListPosts from './ListPosts';
import { Action } from './styles';

const List = ({ state, actions, libraries }) => {

  const articlesRef = useRef(null);

  const data = state.source.get(state.router.link);
  const { totalPages } = state.source.get(state.router.link);

  const null_item = state.source[data.items[0].type][data.items[0].id];

  const options = state.seatbackapi.options.acf;

  const banner_post = {
    title:null_item.title.rendered,
    read:null_item.acf.time_read,
    link:null_item.link,
  }
  const media_obj = state.source.attachment[null_item.featured_media];

  const [loadMoreHidden, setLoadMoreHidden] = useState(false);
  let countSlice = 0;
  if((state.seatbackapi.pageNumber-1)!=totalPages) countSlice=state.seatbackapi.pageNumber-2;

  let megaItems = data.items.slice(1);
  let currentData;
  if(state.seatbackapi.pageNumber>2){
    for( let i=2; i < state.seatbackapi.pageNumber; i++ ){
      currentData = state.source.get(`/blog/page/${i}`);
      if(currentData.isReady){
        megaItems = megaItems.concat(currentData.items);
      }
    }
    if(currentData.isReady){
      const splice_count = megaItems.length-countSlice;
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