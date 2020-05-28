/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { connect } from 'frontity';
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

const OurPlans = ({ libraries, title = '', plans = [], state }) => {
  const nullPlans = [];
  let defaultPlan = '';
  plans.forEach((plan) => {
    nullPlans.push(plan.active);
    if (plan.active) defaultPlan = plan.name;
  });
  const [planActive, setPlanActive] = useState(nullPlans);
  const [planName, setPlanName] = useState(defaultPlan);

  const Html2React = libraries.html2react.Component;
  const setPlan = (key = 0) => {
    const timePlans = [];
    plans.forEach((plan, j) => {
      if (key === j) timePlans.push(true);
      else timePlans.push(false);
    });
    setPlanActive(timePlans);
  };

  state.seatbackapi.plans = plans;

  return (
    <GlobalContainer>
      <Container>
        <input type="hidden" name="chosenPlan" value={planName} />
        {title !== '' && (
        <Title>
          <Html2React html={title} />
        </Title>
        )}
        <PlansContainer>
          <PlansColumn>
            <ChosePlan>
              Choose
              <br />
              {' '}
              Your Plan
            </ChosePlan>
            <RowName>
              Seatback Content
              <br />
              {' '}
              SaaS Platform
            </RowName>
            <RowName>Chair / Portable</RowName>
            <RowName>Smart Watch</RowName>
            <RowName>Wellness Class</RowName>
          </PlansColumn>
          {plans.length > 0 && plans.map((plan, key) => (
            <PlansColumn2
              active={planActive[key]}
              background={plan.bg}
              onClick={() => setPlan(key)}
              key={key}
            >
              <ColumnName background={plan.bg}>
                <span>{plan.name}</span>
                {Object.keys(plan.button).length && (
                <Link link={plan.button.url}>
                  <Button>
                    {' '}
                    {plan.button.title}
                    {' '}
                  </Button>
                </Link>
                )}
              </ColumnName>
              <Cell background={plan.bg}>
                <HiddenHeader>Seatback Content SaaS Platform</HiddenHeader>
                {plan.saas && (
                <img alt="description attribute" src={CkeckCircle} />
                )}
              </Cell>
              <Cell background={plan.bg}>
                <HiddenHeader>Chair / Portable</HiddenHeader>
                {plan.chair && (
                <img alt="description attribute" src={CkeckCircle} />
                )}
              </Cell>
              <Cell background={plan.bg}>
                <HiddenHeader>Smart Watch</HiddenHeader>
                {plan.watch && (
                <img alt="description attribute" src={CkeckCircle} />
                )}
              </Cell>
              <Cell background={plan.bg}>
                <HiddenHeader>Wellness Class</HiddenHeader>
                {plan.weliness && (
                <img alt="description attribute" src={CkeckCircle} />
                )}
              </Cell>
            </PlansColumn2>
          ))}
        </PlansContainer>
      </Container>
    </GlobalContainer>
  );
};

export default connect(OurPlans);
