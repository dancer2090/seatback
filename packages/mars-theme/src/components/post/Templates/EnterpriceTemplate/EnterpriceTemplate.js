import React, { useRef } from 'react';
import HeaderBox from '../../../HeaderBox';
import Forms from '../../../Forms';
import Partners from '../../../Partners';
import Description from './Description';
import { connect } from 'frontity';

const EnterpriceTemplate = ({ state }) => {

  const contentRef = useRef(null);
  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];  
  const template = (post.template !== '' ? post.template : 'standart');
  const button = ((typeof post.acf.button == "undefined" && post.acf.button===false) ? {} : post.acf.button);
  const isArchive = (post.template!="" ? true : false);
  const description = ((typeof post.acf.enterprice_header == "undefined" && post.acf.enterprice_description===false) ? "" : post.acf.enterprice_description);
  const title = ((typeof post.acf.enterprice_header == "undefined" || post.acf.enterprice_header==="") ? post.title.rendered : post.acf.enterprice_header);
  const form = ((typeof post.acf.gd_form == "undefined" || post.acf.gd_form===false) ? false : true);
  const { blocks = [] } = post.acf; 

  return (
    <>
      <HeaderBox 
        title={title}
        isArchive={isArchive}
        template={template}
        button={button}
        description={description}
        type_header="With lines"
        scrollRef={contentRef}
        mode="dark"
        offset={0}
        bgColor="#F5F6FA"
      />
      <div ref={contentRef}>
        <Partners bgColor="#F5F6FA" />
        <Description 
          circleColor="#2E293C" 
          bgColor="#F5F6FA"
          blocks={blocks}
        />
      </div>
      {form && (
        <Forms bgColor="#2E293C" />
      )}
    </>
  );
}

export default connect(EnterpriceTemplate);