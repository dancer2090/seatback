import React from 'react';
import { connect } from "frontity";
import StandartTemplate from '../Templates/StardartTemplate';
import OurStoryTemplate from '../Templates/OurStoryTemplate';
import OurPlansTemplate from '../Templates/OurPlansTemplate';
import SpecialTemplate from '../Templates/SpecialTemplate';

import { 
  GlobalContainer,
} from './styles';


const PostContent = ({ state }) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];
  const template = (post.template !== '' ? post.template : 'standart');

  return (
    <GlobalContainer>
      {template=="standart" && <StandartTemplate />}
      {template=="page-our_story.php" && <OurStoryTemplate />}
      {template=="page-special_page.php" && <SpecialTemplate />}
      {template=="page-plan.php" && <OurPlansTemplate />}      
    </GlobalContainer>
  );
}
export default connect(PostContent);