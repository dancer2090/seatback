import React from 'react';
import Button from '../../Button';
import Link from '../../link';
import { connect } from "frontity";
import Wow from '../../Wow';

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

  return (
    <GlobalContainer>
      <Container>
      <Wow animation='slideUp'>
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
      </Wow>
      <Wow animation='fadeIn' delay="0.3s">
        <VideoContainer>
          <video autoPlay muted loop >
            <source src="https://seatback-admin.webbuilder.in.ua/wp-content/uploads/2020/05/sample.mp4?_=1" type="video/mp4"/>
          </video>
        </VideoContainer>
      </Wow>
      </Container>
      <Wow offset={-100} animation='slideUp'>
        <VideoText >
          {youtubeVideoDescription}
        </VideoText>
      </Wow>
      <Wow offset={-100} animation='slideUp'>
        <YouTubeVideo>
          <Html2React html={youtubeVideo} />
        </YouTubeVideo>
      </Wow>
    </GlobalContainer>
  );
}
export default connect(Banner);