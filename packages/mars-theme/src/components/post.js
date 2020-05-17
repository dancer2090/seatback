import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import PostContent from './post/content';

const Post = () => {
  // Load the post, but only if the data is ready.
  return <PostContent />;
};

export default connect(Post);