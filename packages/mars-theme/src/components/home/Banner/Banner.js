import React from 'react';
import Button from '../../Button';

const Banner = () => {
  return (
    <div className='main-block'>
      <div className='slogan'>
        <h2>Make work dynamic,<br />
        take wellness to <br />
        <span className='kw'>new heights</span></h2>
      </div>
      <div className='picture'>
        <img src="" alt="coder"/>
      </div>

      <div className='discription'>
        <h5>seatback is a holistic welness system that motivates your<br /> 
        team to stay healthy by setting and achieving health<br /> 
        goals and improving sitting quality
        </h5>
      </div>
      
        <Button> Get a demo </Button>
      
    </div>
  );
}


export default Banner;