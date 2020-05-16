import React from 'react';
import Button from '../../Button';
import Link from '../../link';
import { connect } from "frontity";
import HeaderBox from '../../list/HeaderBox';
import Wow from '../../Wow';

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
  SubContainer,
  LinkShare,
  LinkShareContainer,
} from './styles';


const PostContent = ({ state, actions, libraries }) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];
  const author = state.source.author[post.author];

  const date = new Date(post.date);

  const Html2React = libraries.html2react.Component;

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
              <HeaderAuthorDate>{date.toDateString()}</HeaderAuthorDate>
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
              href={"http://www.facebook.com/sharer.php?s=100&amp;p[url]=" + state.frontity.url + post.link + "&amp;p[title]=" + post.title.rendered + "&amp;p[summary]=&amp;p[images][0]=http://atda.ru/wp-content/uploads/2020/04/7fl6w4ey-2.jpg"}
             >
              <img src={ImageFacebook} />
            </LinkShare>
          </LinkShareContainer>
          <Html2React html={post.content.rendered} />
        </PostContentText>
      </Container>
    </GlobalContainer>
  );
}
export default connect(PostContent);