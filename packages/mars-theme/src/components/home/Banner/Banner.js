import React, { useEffect } from 'react';
import Button from '../../Button';
import { styled } from "frontity";

import { 
  GlobalContainer,
  Container,
  Slogan,
  Discription,
  Video,
  VideoContainer,
  VideoText,
  YouTubeVideo,
} from './styles';


const Banner = () => {
  
  useEffect(() => {
    
  }, []);

  return (
    <GlobalContainer>
      <Container>
      <div className='main-block'>
        <Slogan>
          Make work dynamic,<br />
          take wellness to <br />
          <span className='kw'>new heights.</span>
        </Slogan>
        <Discription>
          Seatback is a holistic welness system that motivates your<br /> 
          team to stay healthy by setting and achieving health<br /> 
          goals and improving sitting quality
        </Discription>
        <Button size="large"> Get a demo </Button>
      </div>
      <VideoContainer>
        <video autoPlay muted loop >
          <source src="https://seatback-admin.webbuilder.in.ua/wp-content/uploads/2020/05/sample.mp4?_=1" type="video/mp4"/>
        </video>
      </VideoContainer>
      </Container>
      <VideoText >
        Through our Seatback device and integration with smart watches, we encourage teams to boost their personalized physical activity levels
      </VideoText>
      <YouTubeVideo>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/woRcZWk0hYc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </YouTubeVideo>
    </GlobalContainer>
  );
}

export default Banner;