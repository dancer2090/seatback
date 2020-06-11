import React from 'react';
import { connect } from 'frontity';
import Banner from './home/Banner';
import Description from './home/Description';
import Help from './home/Help';
// Hide temporary
// import Partners from './Partners';
import Reviews from './home/Reviews';
import Forms from './Forms';

const Home = () => (
  <>
    <Banner />
    <Description />
    <Help />
    {/* Hide temporary */}
    {/* <Partners /> */}
    <Reviews />
    <Forms />
  </>
);

export default connect(Home);
