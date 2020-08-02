import React, { useState, useEffect } from 'react';
import ReactWOW from 'react-wow';
import { connect } from 'frontity';

const Wow = ({
  state,
  actions,
  libraries,
  offset,
  iteration,
  forceUpdate = false,
  ...props
}) => {
  const [isDone, setDone] = useState(!!forceUpdate);
  const onAnimateDone = () => {
    if (forceUpdate) {
      setDone(true);
    }
  };

  useEffect(() => {
    if (forceUpdate) {
      setDone(false);
    }
  }, [state.router.link]);

  const { children } = props;

  const isMobile = state.theme.screenWidth <= 768;

  return (
    <>
      {!isDone && !isMobile ? (
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
          {state.theme.screenWidth > 0 && children}
        </>
      )}
    </>
  );
};

export default connect(Wow);
