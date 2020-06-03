import React, { useRef } from 'react';
import { connect } from 'frontity';
import Banner from './home/Banner';
import Description from './home/Description';
import Help from './home/Help';
import Partners from './Partners';
import Reviews from './home/Reviews';
import Forms from './Forms';

const Home = ({ state }) => {
    const scrollRef = useRef(null);
    return (
      <>
        <Banner scrollRef={scrollRef} />
        <div ref={scrollRef}>
          <Description />
        </div>
        <Help />
        <Partners />
        <Reviews />
        <Forms />
      </>
    )
}

export default connect(Home);
