import React from 'react';
import Button from '../../Button';
import {styled} from "frontity";

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
    padding-top:55px;
    height:500px;
  }
  margin-bottom:125px;
`;

const Slogan = styled.div `
  text-align: left;
  line-height:70px;
  opacity:1;
  font-size:50px;
  font-weight:700;
  .kw {color: #2bad6b;}
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
`
const VideoText = styled.div `
  margin:0 auto;
  text-align: center;
  width:1050px;
  font-size:24px;
  line-height:40px;
  letter-spacing:0px;
  color:#2E293C;
  opacity:1;
`;

const Banner = () => {
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
        <Button> Get a demo </Button>
    </div>
    <VideoContainer>
    <video autoPlay loop style={{width:"130%"}}><source src="https://seatback-admin.webbuilder.in.ua/wp-content/uploads/2020/05/sample.mp4?_=1"
    type="video/mp4"/></video>
    </VideoContainer>
    </Container>
  < VideoText >
  Though our Seatback device and integration with smart watches, we encourage teams to boost their personalized physical activity levels
  </VideoText>


    </GlobalContainer>
  );
}

export default Banner;