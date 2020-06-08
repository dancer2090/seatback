import React, { useState, useEffect } from 'react';
import ReactWOW from 'react-wow';
import { connect } from 'frontity';

const Wow = ({
  state, actions, libraries, offset, iteration, ...props
}) => {
  const [isDone, setDone] = useState(false);
  const onAnimateDone = () => {
    setDone(true);
  };

  useEffect(() => {
    setDone(false);
  }, [state.router.link]);

  const { children } = props;

  return (
    <>
      {!isDone ? (
        <ReactWOW
          animateClass="animated"
          iteration={iteration || '1'}
          offset={!state.seatbackapi.isWow ? 0 : offset}
          disabled={!state.seatbackapi.isWow}
          callback={onAnimateDone}
          {...props}
        />
      ) : (
        <>
          {children}
        </>
      )}
    </>
  );
};

export default connect(Wow);
