import React, { useState } from 'react';
import ReactWOW from 'react-wow';
// import ReactResizeDetector from 'react-resize-detector';
// import { SIZE_LAPTOP_SMALL } from '../../const/responsive'


const Wow = (props) => {


  const [isDisable, setIsDisable] = useState(false);

  const resizeControl = (width) => {
    // if (width < SIZE_LAPTOP_SMALL && !isDisable) {
    //   setIsDisable(true);
    // } else if (width >= SIZE_LAPTOP_SMALL && !isDisable) {
    //   setIsDisable(false);
    // }
  }

  return (
    // <ReactResizeDetector handleWidth onResize={resizeControl}>
      <ReactWOW disabled={isDisable} resize={true} {...props} />
    // </ReactResizeDetector>
  )
}

export default Wow;