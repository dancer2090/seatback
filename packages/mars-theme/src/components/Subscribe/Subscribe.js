import React, { useEffect, useState } from 'react';
import Button from '../Button';
import { connect } from "frontity";
import Wow from '../Wow';
import {
    Main,
    Title,
    FormContainer,
    FormControl,
    FormLabel,
    FormInput,
    FormShare,
    BBlock,
    CustomSelectlStyles,
    FormTextarea,
    FText,
} from './styles';


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Subscribe = ({ state, actions, libraries}) => {

    const Html2React = libraries.html2react.Component;

    const inputs = [{
      label:'',
      optional: false,
      acf_fc_layout: "email",
      placeholder: "Your email",
    }]

    const preForm = {};
    const preErrors = {};
    inputs.map((d,key) => {
      preForm[d.label] = "";
      if(!d.optional) preErrors[d.label] = false;
    })

    const [formError, setFormErrorState] = useState(preErrors);
    const [formState, setFormState] = useState(preForm);
    const [preload, setPreload] = useState(false);

    const validForm = () => {
        var error = true;
        const errorObj = {};
        for (let key in formError){
          if(formState[key]=="" || formError[key]){
            errorObj[key]=true;
            error = false;
          }
          else errorObj[key]=false;
        }
        setFormErrorState(errorObj);
        return error;
    }

    const submitForm = e => {
      e.preventDefault();
      if(validForm()){
        actions.seatbackapi.sendForm(formState);
        setFormErrorState(preErrors);
        setFormState(preForm);
        setPreload(true);
      }
    }

    const handleChangeInput = (e, key) => {
      const input_value = e.target.value;
      const objJ = {};
      objJ[key] = input_value;
      setFormState({...formState,...objJ});

      const errorObj = {};
      const type = e.target.attributes.getNamedItem('data-type').value;
      var optional = false;
      if(e.target.attributes.getNamedItem('data-optional').value == "true"){
        optional = true;
      }
      if(type=="email") {
        if(!validateEmail(input_value) && !optional){
          errorObj[key] = true;
        } else {
          errorObj[key] = false;
        }
        setFormErrorState({...formError,...errorObj});
      }
      else {
        if((input_value.length < 2) && !optional){
          errorObj[key] = true;
        } else {
          errorObj[key] = false;
        }
        setFormErrorState({...formError,...errorObj});
      }
    }

    return (
      <Main>
        <Title>
          Get the latest Seatback <span>health</span> updates
        </Title>
        <FormContainer onSubmit={submitForm} preloadNEW={state.seatbackapi.isFormSend || false}>
          {inputs.length>0 && inputs.map((d,key) => {

              return (
               <FormControl key={key} error={formError[d.label]}>
                 <FormLabel>
                   {d.label}
                   {d.optional &&
                     <span> (optional)</span>
                   }
                 </FormLabel>
                 {(d.acf_fc_layout=="text" || d.acf_fc_layout=="email") &&
                    <FormInput
                      placeholder={d.placeholder}
                      data-optional={d.optional}
                      data-type={d.acf_fc_layout}
                      onChange={e => handleChangeInput(e,d.label)}
                      name={d.label}
                      value={formState[d.label]}
                    />
                 }
               </FormControl>
              )
          })}
          <BBlock>
            <Button type="submit">Subscribe</Button>
          </BBlock>
          <FText afterload={(preload && !state.seatbackapi.isSubscribeSend) ? true : false}>
            Thanks you for subscribe!
          </FText>
        </FormContainer>
      </Main>
    );
}

export default connect(Subscribe);