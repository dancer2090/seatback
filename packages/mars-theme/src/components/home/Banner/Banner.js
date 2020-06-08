/* eslint-disable camelcase */
import React, {  useRef } from 'react';
import { connect } from 'frontity';
import Button from '../../Button';
import Link from '../../link';
import Wow from '../../Wow';

import {
  GlobalContainer,
  Container,
  Slogan,
  Discription,
  VideoContainer,
  VideoText,
  YouTubeVideo,
  Scroll,
  Action
} from './styles';


const Banner = ({ state, libraries, offset = 100 }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const {
    acf: {
      main_header: mainHeader,
      main_description: mainDescriotion,
      video: youtubeVideo,
      video_description: youtubeVideoDescription,
      m_right_animation,
      main_button: {
        title: mainButtonTitle,
        url: mainButtonUrl,
      },
    },
  } = post;

  const Html2React = libraries.html2react.Component;
  const scrollRef = useRef(null);
  const scrollToRef = () => {
    // eslint-disable-next-line no-unused-expressions
    scrollRef ? window.scrollTo({
      top: scrollRef.current.offsetTop - offset,
      left: 0,
      behavior: 'smooth',
    }) : null;
  };

  return (
    <GlobalContainer>
      <Container>
        <Wow animation="slideUp">
          <div className="main-block">
            <Slogan>
              <Html2React html={mainHeader} />
            </Slogan>
            <Discription>
              {mainDescriotion}
            </Discription>
            <Action>
              {mainButtonUrl && (
                <Link link={mainButtonUrl}>
                  <Button size="large">{mainButtonTitle}</Button>
                </Link>
              )}
              {scrollRef && (
                <Scroll>
                  <button type="button" onClick={() => scrollToRef()} />
                </Scroll>
              )}
            </Action>
          </div>
        </Wow>
        {m_right_animation && (
        <Wow animation="fadeIn" delay="0.3s">
          <VideoContainer>
            <iframe title="Animation seatback" src={m_right_animation} />
          </VideoContainer>
        </Wow>
        )}
      </Container>
      {youtubeVideoDescription && youtubeVideoDescription.length && (
      <Wow offset={-100} animation="slideUp">
        <VideoText ref={scrollRef}>
          {youtubeVideoDescription}
        </VideoText>
      </Wow>
      )}
      {youtubeVideo && youtubeVideo.length>0 && (
      <Wow offset={-100} animation="slideUp">
        <YouTubeVideo>
          <Html2React html={youtubeVideo} />
        </YouTubeVideo>
      </Wow>
      )}
    </GlobalContainer>
  );
};
export default connect(Banner);
