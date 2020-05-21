import React, { useEffect, useRef } from 'react';
import { connect } from "frontity";
import HeaderBox from '../../list/HeaderBox';
import HeaderBoxGrey from '../../OurStory/HeaderBoxGrey';
import StoryContent from '../../OurStory/StoryContent';
import StoryBottom from '../../OurStory/StoryBottom';
import ListItem from '../../list/ListItem';
import Help from '../Help';
import Forms from '../../home/Forms';
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
  CircleContainer,
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

  const authorPhoto = (Object.keys(author.acf).length>0 && author.acf.user_photo!==false) ? author.acf.user_photo.url : ImageAuthor;
  const media_obj = state.source.attachment[post.featured_media];
  const media_url = (typeof media_obj === 'object') ? media_obj.source_url : "";
  const helpHeader = ((typeof post.acf.c_header == "undefined" && post.acf.c_header===false) ? "" : post.acf.c_header);
  const helpItems = ((typeof post.acf.content == "undefined" && post.acf.content===false) ? "" : post.acf.content);

  useEffect(() => {
    actions.source.fetch('/blog');
  }, []);

  const template = (post.template!="" ? post.template : "standart");
  const type_header = ((typeof post.acf.type_section == "undefined" && post.acf.type_section===false) ? "" : post.acf.type_section);
  const button = ((typeof post.acf.button == "undefined" && post.acf.button===false) ? {} : post.acf.button);
  const isArchive = (post.template!="" ? true : false);
  const description = ((typeof post.acf.description == "undefined" && post.acf.description===false) ? "" : post.acf.description);
  const title = ((typeof post.acf.header_text == "undefined" || post.acf.header_text==="") ? post.title.rendered : post.acf.header_text);
  const type_bg = ((typeof post.acf.type_background == "undefined" && post.acf.type_background===false) ? "" : post.acf.type_background);
  const form = ((typeof post.acf.gd_form == "undefined" || post.acf.gd_form===false) ? false : true);
  const storyBottomTitle = ((typeof post.acf.header == "undefined" || post.acf.header==="") ? "" : post.acf.header);
  const storyBottomContent = ((typeof post.acf.text == "undefined" || post.acf.text==="") ? "" : post.acf.text);
  const storyBottomImage = ((typeof post.acf.image == "undefined" || post.acf.image==="") ? "" : post.acf.image);
  console.log(storyBottomTitle);
  console.log(storyBottomContent);
  console.log(storyBottomImage);

  console.log(post);
  return (
    <GlobalContainer>
      {template=="standart" && (
      <>
        <HeaderBox 
          title={title}
          isArchive={isArchive}
          image={media_url}
          scrollRef={contentRef}
          template={template}
          button={button}
          description={description}
          type_header={type_header}
        />
          <Container>
            <HeaderContent ref={contentRef}>
              <HeaderAuthor>
                <img src={authorPhoto} />
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

                  const authorPhoto = (Object.keys(author.acf).length>0 && author.acf.user_photo.url!="") ? author.acf.user_photo.url : ImageAuthor;


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
            </AdditionalBlock>
          </Container>
        </>
      )}
      {template=="page-our_story.php" && (
          <>
            <HeaderBoxGrey title={title} />
            <StoryContent images={post.acf.gallery} content={post.content.rendered}/>
            <StoryBottom image={storyBottomImage} content={storyBottomContent} title={storyBottomTitle}/>
          </>
      )}
      {template=="page-special_page.php" && (
        <>
          <CircleContainer mode={type_bg}>
            <Help title={helpHeader} items={helpItems} />
          </CircleContainer>
          {form && (
            <Forms />
          )}
        </>
      )}
    </GlobalContainer>
  );
}
export default connect(PostContent);