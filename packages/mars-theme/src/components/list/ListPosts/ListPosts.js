import React, { useRef, useEffect, useState } from "react";
import { connect, styled, decode } from "frontity";
import ListItem from '../ListItem';
import ImageAuthor from '../../../img/user.svg';
import { 
  GlobalContainer, 
  Container,
  ListBox,
} from './styles';
const ListPosts = ({ state, items=[] }) => {
  const data = state.source.get(state.router.link);
  return (
    <GlobalContainer>
       <Container>
          <ListBox>
            {items.map(({ type, id }) => {
              const item = state.source[type][id];
              const media_obj = state.source.attachment[item.featured_media];
              const author = state.source.author[item.author];
              const date = new Date(item.date);

              const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
              const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
              const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

              const authorPhoto = (Object.keys(author.acf).length>0 && author.acf.user_photo!==false) ? author.acf.user_photo.url : ImageAuthor;


              // Render one Item component for each one.
              return <ListItem 
                key={item.id} 
                item={item} 
                title={item.title.rendered} 
                imageSrc={media_obj.source_url}
                link={item.link} 
                authorImage={authorPhoto}
                authorName={author.acf.author_name} 
                minRead={item.acf.time_read+" min read"} 
                date={da+"."+mo+"."+ye}
              />;
            })}
          </ListBox>
        </Container>
    </GlobalContainer>
  );
}

export default connect(ListPosts);