import React, { useRef } from 'react';
import { connect } from 'frontity';
import HeaderBoxProduct from '../../../Product/HeaderBoxProduct';


import { 
  CircleContainer,
} from './styles';

const ProductTemplate = ({ state }) => {

  const contentRef = useRef(null);

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const media_obj = state.source.attachment[post.featured_media];
  const media_url = (typeof media_obj === 'object') ? media_obj.source_url : "";
  const helpHeader = ((!post.acf.c_header && !post.acf.c_header) ? "" : post.acf.c_header);
  const helpItems = ((!post.acf.content && !post.acf.content) ? "" : post.acf.content);

  const template = (post.template !== '' ? post.template : 'standart');

  const button = ((!post.acf.button && post.acf.button===false) ? {} : post.acf.button);
  const content = ((!post.acf.content && post.acf.content.length>0) ? {} : post.acf.content);
  const blocks = ((!post.acf.blocks && post.acf.blocks.length>0) ? {} : post.acf.blocks);
  const isArchive = (post.template!="" ? true : false);
  const description = ((!post.acf.description && post.acf.description===false) ? "" : post.acf.description);
  const title = ((!post.acf.header|| post.acf.header==="") ? post.title.rendered : post.acf.header);

  return (
    <>
      <HeaderBoxProduct 
        title={title}
        image={media_url}
        scrollRef={contentRef}
        button={button}
        description={description}
        offset={0}
      />
    </>
  );
}

export default connect(ProductTemplate);