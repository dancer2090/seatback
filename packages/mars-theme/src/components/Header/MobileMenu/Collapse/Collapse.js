/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { connect } from 'frontity';

const Collapse = ({ i, children, libraries }) => {
  const collapse = useRef(null);
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');

  const toggle = () => {
    setHeight(active ? '0px' : collapse.current.scrollHeight);
    setActive(!active);
  };

  const Html2React = libraries.html2react.Component;

  return (
    <>
      <span onClick={toggle}>
        <Html2React html={`${i.title} ${i.child_items && i.child_items.length > 0 ? ' › ' : ''}`} />
      </span>
      <div ref={collapse} style={{ maxHeight: height, transition: 'all .3s ease-in-out', overflow: 'hidden' }}>
        { children }
      </div>
    </>
  );
};


export default connect(Collapse);
