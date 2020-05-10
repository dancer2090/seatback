import React from 'react';
import ReactWOW from 'react-wow';
import { connect } from 'frontity';

const Wow = ({ state, actions, libraries, offset, iteration, ...props}) => {
  return (
    <ReactWOW iteration={iteration ? iteration : '1'} offset={!state.seatbackapi.isWow ? 0 : offset} disabled={!state.seatbackapi.isWow} {...props} />
  )
}

export default connect(Wow);