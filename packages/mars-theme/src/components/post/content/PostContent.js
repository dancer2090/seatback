import React from 'react';
import { connect } from 'frontity';
import StandartTemplate from '../Templates/StardartTemplate';
import OurStoryTemplate from '../Templates/OurStoryTemplate';
import OurPlansTemplate from '../Templates/OurPlansTemplate';
import SpecialTemplate from '../Templates/SpecialTemplate';
import ProductTemplate from '../Templates/ProductTemplate';
import EnterpriceTemplate from '../Templates/EnterpriceTemplate';
import PlanFormTemplate from '../Templates/PlanFormTemplate';
import { GlobalContainer } from './styles';


const PostContent = ({ state }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const template = (post.template !== '' ? post.template : 'standart');

  return (
    <GlobalContainer>
      {template === 'standart' && <StandartTemplate />}
      {template === 'page-our_story.php' && <OurStoryTemplate />}
      {template === 'page-special_page.php' && <SpecialTemplate />}
      {template === 'page-plan.php' && <OurPlansTemplate />}
      {template === 'page-product.php' && <ProductTemplate />}
      {template === 'page-enterprice.php' && <EnterpriceTemplate />}
      {template === 'page-plan_form.php' && <PlanFormTemplate />}
    </GlobalContainer>
  );
};
export default connect(PostContent);
