import {styled} from 'frontity';

export const Main = styled.div `
  margin-top:341px;
`;

export const Title = styled.h2 `
  text-align: center;
  font-size: 50px;
  line-height: 70px;
  font-weight: 500;
  letter-spacing: 0px;
  opacity: 1;
  max-width: 970px;
  margin: 0 auto;
  span {
    color: #52DE97;
  }
`;
export const FormContainer = styled.div `
  width:50%;
  margin:0;
`;
export const AllForms = styled.div `
  margin-top:100px;
  margin-bottom:60px;
  justify-content: space-between;
`;

export const Form = styled.div `
  margin-top:60px;
  align-items: center;
`;

export const FormLabel = styled.div `
  text-align: left;
  font-weight: Medium;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0 px;
  color:#2E293C;
  opacity: 1;
  span{
      color: #A09D9D;
  }
  margin-bottom:15px;
`;

export const FormInput = styled.div `
  height: 88px;
  width: 954px;
  border: 1px solid #52DE97;
  border-radius: 10px;
  opacity: 1;
  color: #A09D9D;
`;