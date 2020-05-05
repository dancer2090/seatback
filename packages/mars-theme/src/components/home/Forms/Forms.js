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
    InputSymbol,
    FormShare,
    BBlock,
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
            Company
            </FormLabel>
            <FormInput>
            Example inc.
            </FormInput>
        </Form>
        <Form>
            <FormLabel>
            Company size
            </FormLabel>
            <FormInput>
            Please select
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
            <FormShare>
            Feel free to share with us
            </FormShare>
        </Form>
        </AllForms>
        </FormContainer>
        <BBlock>
        <Button>Get a demo</Button>
        </BBlock>
        </Main>
    );
}

export default Forms;