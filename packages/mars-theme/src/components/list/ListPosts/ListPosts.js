import React from 'react';
import { connect, styled, decode } from "frontity";
import ListItem from '../ListItem';
import { 
  GlobalContainer, 
  Container,
  ListBox,
} from './styles';
const ListPosts = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <GlobalContainer>
       <Container>
          <ListBox>
            {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              const media_obj = state.source.attachment[item.featured_media];
              // Render one Item component for each one.
              return <ListItem key={item.id} item={item} title={item.title.rendered} imageSrc={media_obj.source_url} link={item.link}/>;
            })}
          </ListBox>
        </Container>
    </GlobalContainer>
  );
}

export default connect(ListPosts);