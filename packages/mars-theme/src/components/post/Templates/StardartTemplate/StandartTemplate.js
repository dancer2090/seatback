/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'frontity';
import ImageAuthor from '../../../../img/user.svg';
import HeaderBox from '../../../HeaderBox';
import ImageTwiter from '../../../../img/twitter.svg';
import ImageFacebook from '../../../../img/facebook.svg';
import ImageLinkedIn from '../../../../img/linkedin.svg';
import ListItem from '../../../list/ListItem';

import {
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

const StandartTemplate = ({ state, actions, libraries }) => {
  const contentRef = useRef(null);
  const [fixedLinks, setFixedLink] = useState(false);
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const author = state.source.author[post.author];
  const date = new Date(post.date);
  const Html2React = libraries.html2react.Component;
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  const dateString = `${da}.${mo}.${ye}`;

  const dataMore = state.source.get('/blog');
  const moreArticles = dataMore.items ? dataMore.items.filter((i) => i.id !== dataP.id).filter((i, n) => n < 2) : [];

  const authorPhoto = (Object.keys(author.acf).length > 0 && author.acf.user_photo !== false) ? author.acf.user_photo.url : ImageAuthor;
  const mediaObj = state.source.attachment[post.featured_media];
  const mediaUrl = (typeof mediaObj === 'object') ? mediaObj.source_url : '';

  const scrollControl = () => {
    if (contentRef) {
      const contentTop = contentRef.current.offsetTop;
      const contentBottom = contentTop + contentRef.current.offsetHeight;
      if (window.pageYOffset - contentTop < -160 || contentBottom - window.pageYOffset < 400) {
        setFixedLink(false);
      } else if (window.pageYOffset - contentTop >= -160 && contentBottom - window.pageYOffset >= 400) {
        setFixedLink(true);
      }
    }
  };
  useEffect(() => {
    scrollControl();
    window.addEventListener('scroll', scrollControl);
    actions.source.fetch('/blog');
  }, []);

  const template = (post.template !== '' ? post.template : 'standart');
  const typeHeader = ((typeof post.acf.type_section === 'undefined' && post.acf.type_section === false) ? '' : post.acf.type_section);
  const button = ((typeof post.acf.button === 'undefined' && post.acf.button === false) ? {} : post.acf.button);
  const isArchive = (post.template !== '');
  const description = ((typeof post.acf.description === 'undefined' && post.acf.description === false) ? '' : post.acf.description);
  const title = ((typeof post.acf.header_text === 'undefined' || post.acf.header_text === '') ? post.title.rendered : post.acf.header_text);

  return (
    <>
      <HeaderBox
        title={title}
        isArchive={isArchive}
        image={mediaUrl}
        scrollRef={contentRef}
        template={template}
        button={button}
        description={description}
        type_header={typeHeader}
      />
      <Container>
        <HeaderContent>
          <HeaderAuthor>
            <img alt="author" src={authorPhoto} />
            <div>
              <HeaderAuthorName>{author.acf.author_name}</HeaderAuthorName>
              <HeaderAuthorDate>{dateString}</HeaderAuthorDate>
            </div>
          </HeaderAuthor>
          <HeaderReaderTime>
            {post.acf.time_read > 0
              && `${post.acf.time_read} min read`}
          </HeaderReaderTime>
        </HeaderContent>
        <PostContentBox ref={contentRef}>
          <LinkShareContainer isFixed={fixedLinks}>
            <LinkShare
              href={`http://twitter.com/share?text=&amp;url=${state.frontity.url}${post.link}`}
            >
              <img alt="twitter" src={ImageTwiter} />
            </LinkShare>
            <LinkShare
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${state.frontity.url}${post.link}&title=${post.title.rendered}&source=LinkedIn`}
            >
              <img alt="likedin" src={ImageLinkedIn} />
            </LinkShare>
            <LinkShare
              href={`http://www.facebook.com/sharer.php?s=100&amp;p[url]=${state.frontity.url}${post.link}&amp;p[title]=${post.title.rendered}&amp;p[summary]=&amp;`}
            >
              <img alt="facebook" src={ImageFacebook} />
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
              const mediaObj = state.source.attachment[item.featured_media];
              const author = state.source.author[item.author];
              const date = new Date(item.date);
              const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
              const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
              const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

              const authorPhoto = (Object.keys(author.acf).length > 0 && author.acf.user_photo.url !== '') ? author.acf.user_photo.url : ImageAuthor;


              // Render one Item component for each one.
              return (
                <ListItem
                  key={item.id}
                  item={item}
                  title={item.title.rendered}
                  imageSrc={mediaObj.source_url}
                  link={item.link}
                  authorImage={authorPhoto}
                  authorName={author.acf.author_name}
                  minRead={`${item.acf.time_read} min read`}
                  date={`${da}.${mo}.${ye}`}
                />
              );
            })}
          </ListBox>
        </AdditionalBlock>
      </Container>
    </>
  );
};

export default connect(StandartTemplate);
