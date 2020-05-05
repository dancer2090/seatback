import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import { styled, connect } from "frontity";
import ReactSelect from 'react-select';
import { COUNTRIES } from '../../../const/countries';
import {
    Main,
    Title,
    FormContainer,
    AllForms,
    FormControl,
    FormLabel,
    FormInput,
    InputSymbol,
    FormShare,
    BBlock,
    CustomSelectlStyles,
    FormTextarea,
} from './styles';


const Forms = ({ state, actions }) => {

    const optionsCountry = COUNTRIES.map(c => {
      return {
        ...c,
        value: c.code,
        label: c.name,
      }
    })

    const optionsSize = [
      {
        label: '2-10',
        value: '2-10',
      },
      {
        label: '10-20',
        value: '10-20',
      },
      {
        label: '20-30',
        value: '20-30',
      },
    ];

    // const updateFormValue = () => {
    //   state.seatbackapi.sendForm('/form/send', '');
    // }

    const [formState, setFormState] = useState([]);
    const [preload, setPreload] = useState([]);

    if (state.seatbackapi.isFormSend) {

    }

    if(state.frontity.rendering === 'csr') {

    }

    const submitForm = e => {
      e.preventDefault();
      actions.seatbackapi.sendForm(formState);
    }

    useEffect(() => {

    }, []);

    return (
      <Main>
        <Title>
          <span>Get</span> a demo
        </Title>
        <FormContainer onSubmit={submitForm}>
          <FormControl error>
            <FormLabel>
                First name
            </FormLabel>
            <FormInput placeholder="Your first name" />              
          </FormControl>
          <FormControl>
            <FormLabel>
                Last name
            </FormLabel>
            <FormInput placeholder="Your last name" />              
          </FormControl>
          <FormControl>
            <FormLabel>
                Email
            </FormLabel>
            <FormInput placeholder="example@acme.com" />              
          </FormControl>
          <FormControl>
            <FormLabel>
                Company
            </FormLabel>
            <FormInput placeholder="Example Inc." />              
          </FormControl>         
          <FormControl>
            <FormLabel>
                Company Size
            </FormLabel>
            <ReactSelect
              styles={CustomSelectlStyles} 
              placeholder="Please select"
              options={optionsSize} 
            />
          </FormControl>
          <FormControl>
            <FormLabel>
                Country
            </FormLabel>
            <ReactSelect
              styles={CustomSelectlStyles} 
              placeholder="Please select"
              options={optionsCountry} 
            />
          </FormControl>         
          <FormControl>
            <FormLabel>
              Anything else? <span>(optional)</span> 
            </FormLabel>
            <FormTextarea
              placeholder="Please select"
            />
          </FormControl>         
          <BBlock>
            <Button type="submit">Get a demo</Button>
          </BBlock>
        </FormContainer>
      </Main>
    );
}

export default connect(Forms);