/* eslint-disable camelcase */
import React from 'react';
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
} from './styles';


const Banner = ({ state, libraries }) => {
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
            <Link link={mainButtonUrl}>
              <Button size="large">{mainButtonTitle}</Button>
            </Link>
          </div>
        </Wow>
        <Wow animation="fadeIn" delay="0.3s">
          <VideoContainer>
            <iframe title="Animation seatback" src={m_right_animation} />
          </VideoContainer>
        </Wow>
      </Container>
      <Wow offset={-100} animation="slideUp">
        <VideoText>
          {youtubeVideoDescription}
        </VideoText>
      </Wow>
      <Wow offset={-100} animation="slideUp">
        <YouTubeVideo>
          <Html2React html={youtubeVideo} />
        </YouTubeVideo>
      </Wow>
    </GlobalContainer>
  );
};
export default connect(Banner);
