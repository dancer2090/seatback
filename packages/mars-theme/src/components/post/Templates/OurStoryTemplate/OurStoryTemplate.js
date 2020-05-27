import React from 'react';
import { connect } from 'frontity';
import HeaderBoxGrey from '../../../OurStory/HeaderBoxGrey';
import StoryContent from '../../../OurStory/StoryContent';
import StoryBottom from '../../../OurStory/StoryBottom';

const OurStoryTemplate = ({ state }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  const title = ((typeof post.acf.header_text === 'undefined' || post.acf.header_text === '') ? post.title.rendered : post.acf.header_text);
  const storyBottomTitle = ((typeof post.acf.header === 'undefined' || post.acf.header === '') ? '' : post.acf.header);
  const storyBottomContent = ((typeof post.acf.text === 'undefined' || post.acf.text === '') ? '' : post.acf.text);
  const storyBottomImage = ((typeof post.acf.image === 'undefined' || post.acf.image === '') ? '' : post.acf.image);

  return (
    <>
      <HeaderBoxGrey title={title} />
      <StoryContent images={post.acf.gallery} content={post.content.rendered} />
      <StoryBottom image={storyBottomImage} content={storyBottomContent} title={storyBottomTitle} />
    </>
  );
};

export default connect(OurStoryTemplate);
