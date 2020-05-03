import React from "react";
import { connect, styled } from "frontity";
import Banner from './home/Banner';
import Description from './home/Description';
import Help from './home/Help';
//import Partners from './home/Partners';

const Home = () => {

  return (
    <>
      <Banner />
      <Description />
      <Help />
      <Partners />
    </>
  );
};

export default Home;
