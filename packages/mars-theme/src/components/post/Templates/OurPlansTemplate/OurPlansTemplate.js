import React, { useRef } from 'react';
import HeaderBox from '../../../list/HeaderBox';
import Forms from '../../../Forms';
import OurPlans from '../../OurPlans';
import { connect } from 'frontity';

const OurPlansTemplate = ({ state }) => {

  const contentRef = useRef(null);
  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];  
  const template = (post.template !== '' ? post.template : 'standart');
  const button = ((typeof post.acf.button == "undefined" && post.acf.button===false) ? {} : post.acf.button);
  const isArchive = (post.template!="" ? true : false);
  const description = ((typeof post.acf.description == "undefined" && post.acf.description===false) ? "" : post.acf.description);
  const title = ((typeof post.acf.header_text == "undefined" || post.acf.header_text==="") ? post.title.rendered : post.acf.header_text);
  const form = ((typeof post.acf.gd_form == "undefined" || post.acf.gd_form===false) ? false : true);
  const planHeader = ((typeof post.acf.plans_header == "undefined" || post.acf.plans_header==="") ? "" : post.acf.plans_header);
  const plans = ((typeof post.acf.plans == "undefined" || post.acf.plans==="") ? [] : post.acf.plans);

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
        offset={0}
      />
      <div ref={contentRef}>
        <OurPlans title={planHeader} plans={plans} />
      </div>
      {form && (
        <Forms />
      )}
    </>
  );
}

export default connect(OurPlansTemplate);