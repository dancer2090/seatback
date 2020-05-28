import React, { useEffect, useState } from 'react';
import Button from '../Button';
import { connect } from "frontity";
import ReactSelect from 'react-select';
import { COUNTRIES } from '../../const/countries';
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

const optionsCountry = COUNTRIES.map(c => {
  return {
    ...c,
    value: c.code,
    label: c.name,
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const FormsWithoutCircle = ({ state, actions, libraries, bgColor}) => {

    const data_p = state.source.get(state.router.link);
    const page = state.source[data_p.type][data_p.id];
    const { 
      gd_form: {
        ID: formId = 114,
        post_title: title,
      }, 
      gd_header: formHeader = title,
    } = page.acf;

    const form = state.source['forms'][formId];
    const { 
      inputs = [], 
      submit_text: submitText = "Submit"
    } = form.acf;

    const Html2React = libraries.html2react.Component;

    const optionsSize = [];
    inputs.map((d,key) => {
      if(d.acf_fc_layout=="select"){
        optionsSize[key] = [];
        d.values.map(v => {
          var objVal = {
            label : v.value,
            value : v.value,
          };
          optionsSize[key].push(objVal);
        });
      }
    })

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

    const handleChangeSelect = (e, key) => {
      const objJ = {};
      objJ[key] = e.value;
      setFormState({...formState,...objJ});

      const errorObj = {};
      errorObj[key] = false;
      setFormErrorState({...formError,...errorObj});
    }

    const handleChangeCountry = (e, key) => {
      const objJ = {};
      objJ[key] = e.label;
      setFormState({...formState,...objJ});

      const errorObj = {};
      errorObj[key] = false;
      setFormErrorState({...formError,...errorObj});
    }

    return (
      <Main bgColor={bgColor}>
        <Wow offset={-200} animation='slideUp'>
          <Title>
            <Html2React html={formHeader}/>
          </Title>
        </Wow>
        <FormContainer onSubmit={submitForm} preloadNEW={state.seatbackapi.isFormSend || false}>
          {inputs.length>0 && inputs.map((d,key) => {

              return (
                <Wow animation='slideUp' delay={(key*0.15)+'s'} key={key.toString()}>
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
                   {d.acf_fc_layout=="select" &&
                      <ReactSelect
                        error={formError[d.label]}
                        styles={CustomSelectlStyles} 
                        placeholder={d.placeholder}
                        data-optional={d.optional}
                        options={optionsSize[key]}
                        onChange={e => handleChangeSelect(e,d.label)}
                        name={d.label}
                        value={(formState[d.label].length>0) ? {label:formState[d.label],value:formState[d.label]} : null}
                      />
                   }
                   {d.acf_fc_layout=="country" &&
                      <ReactSelect
                        error={formError[d.label]}
                        styles={CustomSelectlStyles} 
                        placeholder={d.placeholder}
                        data-optional={d.optional}
                        options={optionsCountry}
                        onChange={e => handleChangeCountry(e,d.label)}
                        name={d.label}
                        value={(formState[d.label].length>0) ? {label:formState[d.label],value:formState[d.label]} : null}
                      />
                   }
                   {d.acf_fc_layout=="textarea" &&
                      <FormTextarea
                        placeholder={d.placeholder}
                        onChange={e => handleChangeInput(e,d.label)}
                        name={d.label}
                        value={formState[d.label]}
                      />
                   }
                 </FormControl>
               </Wow>
              )
          })}
          <Wow animation='slideUp' delay="0.2s">
            <BBlock>
              <Button type="submit">{submitText}</Button>
            </BBlock>
          </Wow>
          <FText afterload={(preload && !state.seatbackapi.isFormSend) ? true : false}>
            Thanks you! Your email has been sent!
          </FText>
        </FormContainer>
      </Main>
    );
}

export default connect(FormsWithoutCircle);