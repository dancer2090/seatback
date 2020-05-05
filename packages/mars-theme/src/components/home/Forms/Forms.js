import React, {useEffect} from 'react';
import Button from '../../Button';
import {styled} from "frontity";
import {
    Main,
    Title,
    FormContainer,
    AllForms,
    Form,
    FormLabel,
    FormInput,

} from './styles';


const Forms = () => {

    useEffect(() => {

    }, []);

    return (
        <Main>
        <Title>
            <span>Get</span> a demo
        </Title>
        <FormContainer>
        <AllForms>
        <Form>
            <FormLabel>
                First name
            </FormLabel>
            <FormInput>
            Your first name
            </FormInput>
        </Form>
        <Form>
            <FormLabel>
            Last name
            </FormLabel>
            <FormInput>
            Your last name
            </FormInput>
        </Form>
        <Form>
            <FormLabel>
            Email
            </FormLabel>
            <FormInput>
            example@acme.com
            </FormInput>
        </Form>
        <Form>
            <FormLabel>
            Conpany
            </FormLabel>
            <FormInput>
            Example inc.
            </FormInput>
        </Form>
        <Form>
            <FormLabel>
            Country
            </FormLabel>
            <FormInput>
            Please select
            </FormInput>
        </Form>
        <Form>
            <FormLabel>
            Anything else? <span>(optional)</span>
            </FormLabel>
            <FormInput>
            Feel free to share with us
            </FormInput>
        </Form>
        </AllForms>
        </FormContainer>
        <Button>Get a demo</Button>
        </Main>
    );
}

export default Forms;