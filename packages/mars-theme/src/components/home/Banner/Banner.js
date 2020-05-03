import React from 'react';
import Button from '../../Button';
import {styled} from "frontity";
// import VideoSeatback from '../../../video/sample.mp4'

const GlobalContainer = styled.div `
  
`;
const Container = styled.div `
  margin:0 auto;
  text-align: left;
  display:flex;
  width:75%;
  line-height:2em;
  justify-content:space-between;
  font-family:Montserrat, sans-serif;
  letter-spacing:0 px;
  opacity:1;
`;

const Slogan = styled.div `
  text-align: left;
  display:flex;
  width:75%;
  line-height:3em;
  justify-content:space-between;
  font-family:Montserrat, sans-serif;
  letter-spacing:0 px;
  opacity:1;
  .kw {color: #2bad6b;}
`;

const Discription = styled.p`
  font-size: 24px;
  line-height: 40 px;
  font-weight: 400;
  letter-spacing: 0px;
  color:#A09D9D;
  max-width: 817 px;
  margin: 0 auto;
  position:relative;
  z-index:2;
  margin-bottom:50px;
`;
const Video = styled.div `
  position: absolute;
  right: 0;
  top: 150px;
`;
const VideoContainer = styled.div `
  width: 50%;
  margin:0;
`
const Banner = () => {
  return (
    <GlobalContainer>
    <Container>
    <div className='main-block'>
      <Slogan>
        <h1>Make work dynamic,<br />
        take wellness to <br />
        <span className='kw'>new heights</span></h1>
      </Slogan>
      <Discription>
        Seatback is a holistic welness system that motivates your<br /> 
        team to stay healthy by setting and achieving health<br /> 
        goals and improving sitting quality
      </Discription>
        <Button> Get a demo </Button>
    </div>
    <VideoContainer>
    <video autoPlay loop><source src="https://seatback-admin.webbuilder.in.ua/wp-content/uploads/2020/05/sample.mp4?_=1"
    type="video/mp4"/></video>
    </VideoContainer>
    </Container>
    </GlobalContainer>
  );
}

export default Banner;