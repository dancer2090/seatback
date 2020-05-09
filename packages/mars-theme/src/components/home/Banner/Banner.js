import React, { useEffect } from 'react';
import Button from '../../Button';
import Link from '../../link';
import { styled, connect, keyframes } from "frontity";
import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';

import { 
  GlobalContainer,
  Container,
  Slogan,
  Discription,
  Video,
  VideoContainer,
  VideoText,
  YouTubeVideo,
  slideUp,
} from './styles';


const Banner = ({ state, actions, libraries }) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const { acf: {
    main_header: mainHeader,
    main_description: mainDescriotion,
    video: youtubeVideo,
    video_description: youtubeVideoDescription,
    main_button: {
      title: mainButtonTitle,
      url: mainButtonUrl,
    },
  } } = post;
  

  const Html2React = libraries.html2react.Component;

  
  useEffect(() => {
    
  }, []);

  return (
    <GlobalContainer>
      <Container>
      <ReactWOW animation='slideUp'>
        <div className='main-block'>
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
      </ReactWOW>
      <ReactWOW animation='fadeIn' delay="0.3s">
        <VideoContainer>
          <video autoPlay muted loop >
            <source src="https://seatback-admin.webbuilder.in.ua/wp-content/uploads/2020/05/sample.mp4?_=1" type="video/mp4"/>
          </video>
        </VideoContainer>
      </ReactWOW>
      </Container>
      <ReactWOW animation='slideUp'>
        <VideoText >
          {youtubeVideoDescription}
        </VideoText>
      </ReactWOW>
      <YouTubeVideo>
        <Html2React html={youtubeVideo} />
      </YouTubeVideo>
    </GlobalContainer>
  );
}
export default connect(Banner);