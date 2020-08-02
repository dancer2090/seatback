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

  const isArchive = (post.template !== '');
  const form = (!((typeof post.acf.gd_form === 'undefined' || post.acf.gd_form === false)));
  const {
    type_section : typeHeader = '',
    button : button = {},
    description : description = '',
    type_background : typeBg = '',
    bg_size : bgSize = '',
    position_image : horisontalImage = 'center',
    long_title : longTitle = false,
  } = post.acf;
  const title = ((typeof post.acf.header_text === 'undefined' || post.acf.header_text === '') ? post.title.rendered : post.acf.header_text);
  const heightImage = ((!post.acf.height_image || post.acf.height_image === '') ? '507' : post.acf.height_image);
  const paddingBottom = ((!post.acf.padding_bottom || post.acf.padding_bottom === '') ? '185' : post.acf.padding_bottom);
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
        type_header={typeHeader}
        bg_size={bgSize}
        offset={0}
        longTitle={longTitle}
        heightImage={heightImage}
        horisontalImage={horisontalImage}
        paddingBottom={paddingBottom}
        isDemoPage
      />
      <CircleContainer ref={contentRef} mode={typeBg}>
        <Help isDemoPage title={helpHeader} items={helpItems} />
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
