import React, { useEffect, useRef } from 'react';
import { connect, URL } from 'frontity';
import FormsWithoutCircle from '../../../FormsWithoutCircle';
import Link from '../../../link';
import Button from '../../../Button';

import { 
  GlobalContainer,
  Container,
  PlanInfo,
  Title,
  PlanInfoTextContainer,
  PlanInfoText,
  FormContainer,
  ButtonContainer,
} from './styles';

const PlanFormTemplate = ({ state, actions }) => {
  const urlParams = new URL(state.frontity.url+state.router.link);
  const plan_number = urlParams.searchParams.get("plan");

  useEffect(() => {
    if(state.seatbackapi.plans.length===0) actions.router.set('/');
  }, []);

  // console.log(state.seatbackapi.plans[plan_number]);
  const current_plan = state.seatbackapi.plans[plan_number];

  return (
    <GlobalContainer>
      <Container>
        {current_plan && (
          <PlanInfo>
            <Title>{current_plan.name}</Title>
            <PlanInfoTextContainer>
              {current_plan.saas && <PlanInfoText>Seatback Content SaaS Platform</PlanInfoText>}
              {current_plan.chair && <PlanInfoText>Chair / Portable</PlanInfoText>}
              {current_plan.watch && <PlanInfoText>Smart Watch</PlanInfoText>}
              {current_plan.weliness && <PlanInfoText>Wellness Class</PlanInfoText>}
            </PlanInfoTextContainer>
            <ButtonContainer>
              <Link link="/our-plans">
                <Button block>Chose another plan</Button>
              </Link>
            </ButtonContainer>
          </PlanInfo>
        )}
        <FormContainer>
            <FormsWithoutCircle />
        </FormContainer>
      </Container>
    </GlobalContainer>
  );
}

export default connect(PlanFormTemplate);