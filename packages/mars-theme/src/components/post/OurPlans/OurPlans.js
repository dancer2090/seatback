import React, { useState } from 'react';
import { connect } from 'frontity';
import Wow from './../../Wow';
import Link from '../../link';
import Button from '../../Button';
import { 
  GlobalContainer,
  Container,
  Title,
  PlansContainer,
  PlansColumn,
  PlansColumn2,
  ChosePlan,
  RowName,
  ColumnName,
  Cell,
  HiddenHeader,
} from './styles';
import CkeckCircle from '../../../img/checkmark-circle.svg';


const OurPlans = ({state, libraries, title="", plans=[]}) => {
  const nullPlans = [];
  var defaultPlan = "";
  plans.map((plan,j)=>{
    nullPlans.push(plan.active);
    if(plan.active) defaultPlan=plan.name;
  })
  const [planActive, setPlanActive] = useState(nullPlans);
  const [planName, setPlanName] = useState(defaultPlan);

  const Html2React = libraries.html2react.Component;
  const setPlan = (key=0) => {
    var timePlans = [];
    plans.map((plan,j)=>{
      if(key==j) timePlans.push(true);
      else timePlans.push(false);
    })
    setPlanActive(timePlans);
  }

  console.log(plans);
  return (
    <GlobalContainer>
      <Container>
      <input type="hidden" name="chosenPlan" value={planName}/>
      {title !== "" && (
        <Title>
          <Html2React html={title}/>
        </Title>
      )}
      <PlansContainer>
        <PlansColumn>
          <ChosePlan>Choose <br/> Your Plan</ChosePlan>
          <RowName>Seatback Content <br/> SaaS Platform</RowName>
          <RowName>Chair / Portable</RowName>
          <RowName>Smart Watch</RowName>
          <RowName>Wellness Class</RowName>
        </PlansColumn>
        {plans.length > 0 && plans.map((plan, key) => {
          return (
            <PlansColumn2 active={planActive[key]} background={plan.bg} onClick={()=>setPlan(key)} key={key}>
              <ColumnName background={plan.bg}>
                <span>{plan.name}</span>
                {Object.keys(plan.button).length && (
                  <Link link={plan.button.url}>
                    <Button> {plan.button.title} </Button>
                  </Link>
                )}
              </ColumnName>
              <Cell>
                <HiddenHeader>Seatback Content SaaS Platform</HiddenHeader>
                {plan.saas && (
                  <img src={CkeckCircle}/>
                )}
              </Cell>
              <Cell>
                <HiddenHeader>Chair / Portable</HiddenHeader>
                {plan.chair && (
                  <img src={CkeckCircle}/>
                )}
              </Cell>
              <Cell>
                <HiddenHeader>Smart Watch</HiddenHeader>
                {plan.watch && (
                  <img src={CkeckCircle}/>
                )}
              </Cell>
              <Cell>
                <HiddenHeader>Wellness Class</HiddenHeader>
                {plan.weliness && (
                  <img src={CkeckCircle}/>
                )}
              </Cell>
            </PlansColumn2>
          )
        })}
      </PlansContainer>
      </Container>
    </GlobalContainer>
  );
}

export default connect(OurPlans);