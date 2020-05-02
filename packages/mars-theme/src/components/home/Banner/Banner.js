import React from 'react';
import Button from '../../Button';
import {styled} from "frontity";
// import VideoSeatback from '../../../video/sample.mp4'

const Container = styled.div `
  text-align: left;
  display:flex;
  width:80%;
  line-height:2em;
  justify-content:space-between;
  font-family:Montserrat, sans-serif;
  letter-spacing:0 px;
  opacity:1;
`;
const Discription = styled.p`
  text-align: left;
  font-family:Montserrat,sans-serif;
  letter-spacing: 0 px;
  height:70px;
  line-height:1.3em;
  color:#A09D9D;
  opacity:1;
  color:#A09D9D;
`;
const Video = styled.div `
  position: absolute;
  right: 0;
  top: 150px;
`;

const Banner = () => {
  return (
    <Container>
    <div className='main-block'>
      <div className='slogan'>
        <h2>Make work dynamic,<br />
        take wellness to <br />
        <span className='kw'>new heights</span></h2>
      </div>
      <Discription>
        <h5>Seatback is a holistic welness system that motivates your<br /> 
        team to stay healthy by setting and achieving health<br /> 
        goals and improving sitting quality
        </h5>
      </Discription>
        <Button> Get a demo </Button>
    </div>
    <video autoPlay><source src="https://seatback-admin.webbuilder.in.ua/wp-content/uploads/2020/05/sample.mp4?_=1"
    type="video/mp4"/></video>
    </Container>
  );
}

export default Banner;