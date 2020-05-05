import React from "react";
import { connect, styled } from "frontity";
import Banner from './home/Banner';
import Description from './home/Description';
import Help from './home/Help';
import Partners from './home/Partners';
import Reviews from './home/Reviews';
import Forms from './home/Forms';

const Home = () => {

  return (
    <>
      <Banner />
      <Description />
      <Help />
      <Partners />
      <Reviews />
      <Forms />
    </>
  );
};

export default Home;
