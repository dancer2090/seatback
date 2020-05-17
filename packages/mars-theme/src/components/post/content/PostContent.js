import React, { useEffect, useRef } from 'react';
import { connect } from "frontity";
import HeaderBox from '../../list/HeaderBox';
import ListItem from '../../list/ListItem';
import ImageTwiter from '../../../img/twitter.svg';
import ImageFacebook from '../../../img/facebook.svg';
import ImageLinkedIn from '../../../img/linkedin.svg';
import ImageAuthor from '../../../img/user.svg';

import { 
  GlobalContainer,
  Container,
  HeaderContent,
  HeaderAuthor,
  HeaderAuthorName,
  HeaderAuthorDate,
  HeaderReaderTime,
  PostContentText,
  PostContentBox,
  LinkShare,
  LinkShareContainer,
  ListBox,
  AdditionalBlock,
} from './styles';


const PostContent = ({ state, actions, libraries }) => {

  const contentRef = useRef(null);

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

  // actions.source.fetch('/blog/article-headline-8');
  const dataMore = state.source.get('/blog');
  const moreArticles = dataMore.items ? dataMore.items.filter(i => i.id !== data_p.id).filter((i,n) => n < 2) : [];

  const authorPhoto = author.acf.user_photo.url;
  const media_obj = state.source.attachment[post.featured_media];

  useEffect(() => {
    actions.source.fetch('/blog');
  }, []);

  return (
    <GlobalContainer>
      <HeaderBox 
        title={post.title.rendered}
        isArchive={false}
        image={media_obj.source_url}
        scrollRef={contentRef}
      />
      <Container>
        <HeaderContent ref={contentRef}>
          <HeaderAuthor>
            <img src={author.acf.user_photo.url!="" ? authorPhoto : ImageAuthor} />
            <div>
              <HeaderAuthorName>{author.acf.author_name}</HeaderAuthorName>
              <HeaderAuthorDate>{date_string}</HeaderAuthorDate>
            </div>
          </HeaderAuthor>
          <HeaderReaderTime>
            {post.acf.time_read>0 &&
              post.acf.time_read+' min read'
            }
          </HeaderReaderTime>
        </HeaderContent>
        <PostContentBox>
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
          <PostContentText>          
            <Html2React html={post.content.rendered} />
          </PostContentText>
        </PostContentBox>

        <AdditionalBlock>
          <h2>
            More Articles
          </h2>
          <ListBox>
            {moreArticles.map(({ type, id }) => {
              const item = state.source[type][id];
              const media_obj = state.source.attachment[item.featured_media];
              const author = state.source.author[item.author];
              const date = new Date(item.date);

              const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
              const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
              const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

              const authorPhoto = author.acf.user_photo.url;


              // Render one Item component for each one.
              return <ListItem 
                key={item.id} 
                item={item} 
                title={item.title.rendered} 
                imageSrc={media_obj.source_url} 
                link={item.link} 
                authorImage={author.acf.user_photo.url!="" ? authorPhoto : ImageAuthor} 
                authorName={author.acf.author_name} 
                minRead={item.acf.time_read+" min read"} 
                date={da+"."+mo+"."+ye}
              />;
            })}
          </ListBox>
        </AdditionalBlock>
      </Container>
    </GlobalContainer>
  );
}
export default connect(PostContent);