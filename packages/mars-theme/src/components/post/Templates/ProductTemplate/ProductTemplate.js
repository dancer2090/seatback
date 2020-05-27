import React, { useRef } from 'react';
import { connect } from 'frontity';
import HeaderBoxProduct from '../../../Product/HeaderBoxProduct';
import DescriptionProduct from '../../../Product/DescriptionProduct';
import HelpProduct from '../../../Product/HelpProduct';
import Footer from '../../../Footer';


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
  const footerCircleBg = (content.length%2===0) ? "#FFFFFF" : "#F5F6FA";
  const footerBg = (content.length%2===0) ? "#F5F6FA" : "#FFFFFF";

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
      <div ref={contentRef}>
        {content.map((d, key) => {
          const circle_color = (key%2===0 || key===0) ? "#FFFFFF" : "#F5F6FA";
          const bg_color = (key%2===0 && key!==0) ? "#F5F6FA" : "#FFFFFF";
          return <DescriptionProduct
            title={d.header}
            description={d.decription}
            image={d.image}
            zIndex={(key+1)}
            circleColor={circle_color}
            bgColor={bg_color}
          />
        })}
      </div>
      {blocks.length>0 && <HelpProduct items={blocks} />}
      <Footer bgColor={footerBg} circleColor={footerCircleBg}/>
    </>
  );
}

export default connect(ProductTemplate);