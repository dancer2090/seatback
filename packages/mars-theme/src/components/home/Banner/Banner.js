import React, { useEffect } from 'react';
import Button from '../../Button';
import { styled } from "frontity";

const GlobalContainer = styled.div `
  padding-top:185px;
`;

const Container = styled.div `
  margin:0 auto;
  display:flex;
  text-align: left;
  justify-content:space-between;
  letter-spacing:0 px;
  padding-right: 150px;
  padding-left:${props => props.alignImage === 'left' ? '50%' : '150px'};
  opacity:1;
  .main-block{
    height:500px;
  }
  margin-bottom:225px;
`;

const Slogan = styled.div `
  text-align: left;
  line-height:70px;
  opacity:1;
  font-size:50px;
  font-weight:700;
  .kw {color: #52DE97;}
`;

const Discription = styled.p`
  font-size: 24px;
  line-height:40px;
  letter-spacing: 0px;
  color:#A09D9D;
  position:relative;
  z-index:2;
  margin-bottom:50px;
`;

const Video = styled.div `
  position: absolute;
  width: 50%;
  height: 100%;
  right: ${props => props.alignImage === 'left' ? 'auto' : '150px'};
  top: 0;
  left: ${props => props.alignImage === 'left' ? '150px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignImage === 'left' ? 'flex-start' : 'flex-end'};
`;

const VideoContainer = styled.div `
  width: 40%;
  height: 50%;
  margin:0;
  margin-top: -50px;
  margin-left: -25px;

  video {
    width: auto;
    height: auto;
  }
`;
const VideoText = styled.div `
  margin:0 auto;
  text-align: center;
  max-width:1074px;
  font-size:24px;
  line-height:40px;
  letter-spacing:0px;
  color:#2E293C;
  opacity:1;
`;

const YouTubeVideo = styled.div`
  padding-top: 45px;
  padding-bottom: 88px;
  max-width: 1074px;
  height: 640px;
  margin: 0 auto;
  overflow:  hidden;
  iframe {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/woRcZWk0hYc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </YouTubeVideo>
    </GlobalContainer>
  );
}

export default Banner;