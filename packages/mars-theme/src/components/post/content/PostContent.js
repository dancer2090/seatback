import React from 'react';
import { connect } from "frontity";
import HeaderBox from '../../list/HeaderBox';
import ListItem from '../../list/ListItem';
import ImageTwiter from '../../../img/twitter.svg';
import ImageFacebook from '../../../img/facebook.svg';
import ImageLinkedIn from '../../../img/linkedin.svg';

import { 
  GlobalContainer,
  Container,
  HeaderContent,
  HeaderAuthor,
  HeaderAuthorName,
  HeaderAuthorDate,
  HeaderReaderTime,
  PostContentText,
  LinkShare,
  LinkShareContainer,
  ListBox,
} from './styles';


const PostContent = ({ state, actions, libraries }) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];
  const author = state.source.author[post.author];
  const articles = [];
  const date = new Date(post.date);
  const Html2React = libraries.html2react.Component;
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  const date_string = da + "." + mo + "." + ye;

  return (
    <GlobalContainer>
      <HeaderBox 
        title={post.title.rendered}
        isArchive={false}
      />
      <Container>
        <HeaderContent>
          <HeaderAuthor>
            <img src={author.acf.user_photo.url} />
            <div>
              <HeaderAuthorName>{author.name}</HeaderAuthorName>
              <HeaderAuthorDate>{date_string}</HeaderAuthorDate>
            </div>
          </HeaderAuthor>
          <HeaderReaderTime>
            {post.acf.time_read>0 &&
              post.acf.time_read+' min read'
            }
          </HeaderReaderTime>
        </HeaderContent>
        <PostContentText>
          <LinkShareContainer>
            <LinkShare
              href={"http://twitter.com/share?text=&amp;url="+state.frontity.url+post.link}>
              <img src={ImageTwiter} />
            </LinkShare>
            <LinkShare
              href={"https://www.linkedin.com/shareArticle?mini=true&url=" + state.frontity.url + post.link + "&title=" + post.title.rendered + "&source=LinkedIn"}
            >
              <img src={ImageLinkedIn} />
            </LinkShare>
            <LinkShare
              href={"http://www.facebook.com/sharer.php?s=100&amp;p[url]=" + state.frontity.url + post.link + "&amp;p[title]=" + post.title.rendered + "&amp;p[summary]=&amp;"}
             >
              <img src={ImageFacebook} />
            </LinkShare>
          </LinkShareContainer>
          <Html2React html={post.content.rendered} />
        </PostContentText>

        
        <ListBox>
          {articles.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <ListItem key={item.id} item={item} />;
          })}
        </ListBox>
      </Container>
    </GlobalContainer>
  );
}
export default connect(PostContent);