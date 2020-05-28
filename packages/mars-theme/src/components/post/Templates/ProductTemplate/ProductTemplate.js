import React, { useRef } from 'react';
import { connect } from 'frontity';
import HeaderBoxProduct from '../../../Product/HeaderBoxProduct';
import DescriptionProduct from '../../../Product/DescriptionProduct';
import HelpProduct from '../../../Product/HelpProduct';

const ProductTemplate = ({ state }) => {
  const contentRef = useRef(null);

  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  const mediaObj = state.source.attachment[post.featured_media];
  const mediaUrl = (typeof mediaObj === 'object') ? mediaObj.source_url : '';
  const button = ((!post.acf.button && post.acf.button === false) ? {} : post.acf.button);
  const content = ((!post.acf.content && post.acf.content.length > 0) ? {} : post.acf.content);
  const blocks = ((!post.acf.blocks && post.acf.blocks.length > 0) ? {} : post.acf.blocks);
  const description = ((!post.acf.description && post.acf.description === false) ? '' : post.acf.description);
  const title = ((!post.acf.header || post.acf.header === '') ? post.title.rendered : post.acf.header);
  const footerCircleBg = (content.length % 2 === 0) ? '#FFFFFF' : '#F5F6FA';
  const footerBg = (content.length % 2 === 0) ? '#F5F6FA' : '#FFFFFF';

  return (
    <>
      <HeaderBoxProduct
        title={title}
        image={mediaUrl}
        scrollRef={contentRef}
        button={button}
        description={description}
        offset={0}
      />
      <div ref={contentRef}>
        {content.map((d, key) => {
          const circleColor = (key % 2 === 0 || key === 0) ? '#FFFFFF' : '#F5F6FA';
          const bgColor = (key % 2 === 0 && key !== 0) ? '#F5F6FA' : '#FFFFFF';
          return (
            <DescriptionProduct
              title={d.header}
              description={d.decription}
              image={d.image}
              zIndex={(key + 1)}
              circleColor={circleColor}
              bgColor={bgColor}
            />
          );
        })}
      </div>
      {blocks.length > 0 && <HelpProduct items={blocks} />}
    </>
  );
};

export default connect(ProductTemplate);
