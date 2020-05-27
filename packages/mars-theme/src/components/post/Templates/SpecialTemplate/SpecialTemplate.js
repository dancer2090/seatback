import React, { useRef } from 'react';
import { connect } from 'frontity';
import HeaderBox from '../../../HeaderBox';
import Help from '../../Help';
import Forms from '../../../Forms';

import {
  CircleContainer,
} from './styles';

const SpecialTemplate = ({ state }) => {
  const contentRef = useRef(null);
  const fromRef = useRef(null);

  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  const mediaObj = state.source.attachment[post.featured_media];
  const mediaUrl = (typeof mediaObj === 'object') ? mediaObj.source_url : '';
  const helpHeader = ((!post.acf.c_header && !post.acf.c_header) ? '' : post.acf.c_header);
  const helpItems = ((!post.acf.content && !post.acf.content) ? '' : post.acf.content);

  const template = (post.template !== '' ? post.template : 'standart');

  const type_header = ((typeof post.acf.type_section === 'undefined' && post.acf.type_section === false) ? '' : post.acf.type_section);
  const button = ((typeof post.acf.button === 'undefined' && post.acf.button === false) ? {} : post.acf.button);
  const isArchive = (post.template != '');
  const description = ((typeof post.acf.description === 'undefined' && post.acf.description === false) ? '' : post.acf.description);
  const title = ((typeof post.acf.header_text === 'undefined' || post.acf.header_text === '') ? post.title.rendered : post.acf.header_text);
  const type_bg = ((typeof post.acf.type_background === 'undefined' && post.acf.type_background === false) ? '' : post.acf.type_background);
  const bg_size = ((typeof post.acf.bg_size === 'undefined' && post.acf.bg_size === false) ? '' : post.acf.bg_size);
  const form = (!((typeof post.acf.gd_form === 'undefined' || post.acf.gd_form === false)));
  const { url: buttonUrl = '' } = button;
  return (
    <>
      <HeaderBox
        title={title}
        isArchive={isArchive}
        image={mediaUrl}
        scrollRef={buttonUrl === '#form' ? fromRef : contentRef}
        template={template}
        button={button}
        description={description}
        type_header={type_header}
        bg_size={bg_size}
        offset={0}
      />
      <CircleContainer ref={contentRef} mode={type_bg}>
        <Help title={helpHeader} items={helpItems} />
      </CircleContainer>
      <div ref={fromRef}>
        {form && (
          <Forms />
        )}
      </div>
    </>
  );
};

export default connect(SpecialTemplate);
