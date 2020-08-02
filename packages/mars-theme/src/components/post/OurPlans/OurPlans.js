/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import Slider from 'react-slick';
import Button from '../../Button';
import CkeckCircle from '../../../img/checkmark-circle.svg';
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
  PlansContainerMobile,
  SlickContainer,
  Item,
  ItemTitleBox,
  CheckboxConteiner,
} from './styles';

const OurPlans = ({ libraries, title = '', plans = [], state, formRef }) => {
  const nullPlans = [];
  let defaultPlan = '';
  plans.forEach((plan) => {
    nullPlans.push(plan.active);
    if (plan.active) defaultPlan = plan.name;
  });
  const [planActive, setPlanActive] = useState(nullPlans);
  const [planName, setPlanName] = useState(defaultPlan);

  const Html2React = libraries.html2react.Component;
  const scrollToRef = () => (
    formRef
      ? window.scrollTo({
        top: formRef.current.offsetTop - 0,
        left: 0,
        behavior: 'smooth',
      })
      : null
  );
  const setPlan = (key = 0, isSlider = false) => {
    const timePlans = [];
    plans.forEach((plan, j) => {
      if (key === j) timePlans.push(true);
      else timePlans.push(false);
    });
    setPlanActive(timePlans);
    if (!isSlider) scrollToRef();
  };

  useEffect(() => {
    setPlan(2, true);
  }, []);

  const settings = {
    initialSlide: 2,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '29px',
    beforeChange: (current, next) => setPlan(next, true),
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
                  <Button onClick={() => setPlan(key)}>
                    {' '}
                    {plan.button.title}
                    {' '} 
                  </Button>
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
        <PlansContainerMobile>
          <SlickContainer>
            <Slider {...settings}>
              {plans.length > 0 && plans.map((plan, key) => (
                <Item
                  active={planActive[key]}
                  background={plan.bg}
                  onClick={() => setPlan(key)}
                  key={key}
                >
                  <ItemTitleBox
                    active={planActive[key]}
                    background={plan.bg}
                  >
                    <h3>{plan.name}</h3>
                    <Button
                      onClick={() => setPlan(key)}
                      mobile
                    >
                      {plan.button.title}
                    </Button>
                  </ItemTitleBox>
                  <Cell background={plan.bg}>
                    <HiddenHeader>Seatback Content SaaS Platform</HiddenHeader>
                    <CheckboxConteiner>
                      {plan.saas && (
                        <img alt="description attribute" src={CkeckCircle} />
                      )}
                    </CheckboxConteiner>
                  </Cell>
                  <Cell background={plan.bg}>
                    <HiddenHeader>Chair / Portable</HiddenHeader>
                    <CheckboxConteiner>
                      {plan.chair && (
                        <img alt="description attribute" src={CkeckCircle} />
                      )}
                    </CheckboxConteiner>
                  </Cell>
                  <Cell background={plan.bg}>
                    <HiddenHeader>Smart Watch</HiddenHeader>
                    <CheckboxConteiner>
                      {plan.watch && (
                        <img alt="description attribute" src={CkeckCircle} />
                      )}
                    </CheckboxConteiner>
                  </Cell>
                  <Cell background={plan.bg}>
                    <HiddenHeader>Wellness Class</HiddenHeader>
                    <CheckboxConteiner>
                      {plan.weliness && (
                        <img alt="description attribute" src={CkeckCircle} />
                      )}
                    </CheckboxConteiner>
                  </Cell>
                </Item>
              ))}
            </Slider>
          </SlickContainer>
        </PlansContainerMobile>
      </Container>
    </GlobalContainer>
  );
};

export default connect(OurPlans);
