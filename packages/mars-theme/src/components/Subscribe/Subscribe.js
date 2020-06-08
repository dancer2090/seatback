/* eslint-disable react/no-array-index-key */
/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { connect } from 'frontity';
import Button from '../Button';
import {
  Main,
  Title,
  FormContainer,
  FormControl,
  FormLabel,
  FormInput,
  BBlock,
  FText,
} from './styles';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Subscribe = ({ state, actions }) => {
  const inputs = [
    {
      label: 'email',
      optional: false,
      acf_fc_layout: 'email',
      placeholder: 'Your email',
    },
  ];

  const preForm = {};
  const preErrors = {};
  inputs.forEach((d) => {
    preForm[d.label] = '';
    if (!d.optional) preErrors[d.label] = false;
  });

  const [formError, setFormErrorState] = useState(preErrors);
  const [formState, setFormState] = useState(preForm);
  const [preload, setPreload] = useState(false);

  const validForm = () => {
    let error = true;
    const errorObj = {};
    Object.keys(formError).forEach((key) => {
      if (formState[key] === '' || formError[key]) {
        errorObj[key] = true;
        error = false;
      } else errorObj[key] = false;
    });
    setFormErrorState(errorObj);
    return error;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validForm()) {
      actions.seatbackapi.sendSubscribe(formState);
      setFormErrorState(preErrors);
      setFormState(preForm);
      setPreload(true);
    }
  };

  const handleChangeInput = (e, key) => {
    const inputValue = e.target.value;
    const objJ = {};
    objJ[key] = inputValue;
    setFormState({ ...formState, ...objJ });

    const errorObj = {};
    const type = e.target.attributes.getNamedItem('data-type').value;
    let optional = false;
    if (e.target.attributes.getNamedItem('data-optional').value === 'true') {
      optional = true;
    }
    if (type === 'email') {
      if (!validateEmail(inputValue) && !optional) {
        errorObj[key] = true;
      } else {
        errorObj[key] = false;
      }
      setFormErrorState({ ...formError, ...errorObj });
    } else {
      if (inputValue.length < 2 && !optional) {
        errorObj[key] = true;
      } else {
        errorObj[key] = false;
      }
      setFormErrorState({ ...formError, ...errorObj });
    }
  };

  return (
    <Main>
      <Title>
        Get the latest Seatback
        {' '}
        <span>health</span>
        {' '}
        updates
      </Title>
      <FormContainer
        onSubmit={submitForm}
        preloadNEW={state.seatbackapi.isSubscribeSend || false}
      >
        {inputs.length > 0
          && inputs.map((d, key) => (
            <FormControl key={key} error={formError[d.label]}>
              {(d.acf_fc_layout === 'text' || d.acf_fc_layout === 'email') && (
                <FormInput
                  placeholder={d.placeholder}
                  data-optional={d.optional}
                  data-type={d.acf_fc_layout}
                  onChange={(e) => handleChangeInput(e, d.label)}
                  name={d.label}
                  value={formState[d.label]}
                />
              )}
            </FormControl>
          ))}
        <BBlock>
          <Button type="submit">Subscribe</Button>
        </BBlock>
      </FormContainer>
      <FText afterload={!!(preload && !state.seatbackapi.isSubscribeSend)}>
        Thanks you for subscribe!
      </FText>
    </Main>
  );
};

export default connect(Subscribe);
