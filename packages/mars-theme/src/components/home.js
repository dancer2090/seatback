import React from "react";
import { connect, styled } from "frontity";
import Banner from './home/Banner';
import Description from './home/Description';
import Help from './home/Help';
import Partners from './home/Partners';
import Reviews from './home/Reviews';
import Forms from './home/Forms';

const Home = ({ state, actions, libraries }) => {

  // const { api } = libraries.source;
  // const response = libraries.source.api.get({ endpoint: "/forms/get-a-demo" });
  // console.log(response);
  // libraries.source.populate({ response, state });

  if(state.frontity.rendering === 'csr') {
    console.log(state)
  }

  //get-a-demo
  // const data = state.source.get("");
  // console.log(data);

  return (
    <>
      <Banner />
      <Description />
      {/* <Help /> */}
      {/* <Partners /> */}
      <Reviews />
      <Forms />
    </>
  );
};

export default connect(Home);
