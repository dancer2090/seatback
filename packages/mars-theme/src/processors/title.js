import React from 'react';
import Parser from 'html-react-parser';

const StringComponent = (props) => (
  <div>
    {props.children}
  </div>
);


const title = {
  // We can add a name to identify it later.
  name: "title",

  // We can add a priority so it executes before or after other processors.
  priority: 8,

  // Only process the node it if it's an image.
  test: ({ node }) => node.type === 'text' && node.content.indexOf('[GREEN]') !== -1,
  ignore: true,
  processor: ({ node }) => {
    //console.log(node);
    // node.type = 'element';
    // node.component = <StringComponent children={<div>{node.content.replace(/\[GREEN\]/g, '<span>').replace(/\[\/GREEN\]/g, '</span>')}</div>} />;
    // return <StringComponent children={<div>{node.content.replace(/\[GREEN\]/g, '<span>').replace(/\[\/GREEN\]/g, '</span>')}</div>} />;
    const myContent = node.content.replace(/\[GREEN\]/g, '<span>').replace(/\[\/GREEN\]/g, '</span>');
    // node.type === 'element';
    // node.component = `<div>${myContent}</div>`;
    // node.children = null;
    // node.props = {};

    node.content = (Parser(myContent));
    
    return node;
  }
};

export default title;