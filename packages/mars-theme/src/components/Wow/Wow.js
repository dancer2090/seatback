import React from 'react';
import ReactWOW from 'react-wow';

const Wow = (props) => {

  const resizeControl = (size) => {
    console.log('size');
    console.log(size);
  }

  return <ReactWOW onResize={resizeControl} resize={true} {...props} />
}

export default Wow;