import { styled, css } from 'frontity';

export const Main = styled.div `
  padding-top:123px;
  margin-bottom:123px;
  position: relative;
  overflow: hidden;
  &:after{
    content: ' ';
    background: #FFFFFF;
    width: 3006px;
    height: 2450px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: calc(50% - 1480px);
    z-index: -1;
  }
  &:before{
    content: ' ';
    background-color: #F5F6FA;
    width: 100%;
    height: 1272px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
`;

export const CustomSelectlStyles = {

  container: (provided) => ({
    ...provided,
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '88px',
    borderRadius: '10px',
    opacity: 1,
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: 0,
    color: '#A09D9D',
    opacity: 1,
    outline: 'none',
    backgroundColor: 'white',
    border: 'none',
    borderColor: '52DE97',
    transition: 'all 0.3s ease-in-out',
  }),
  control: (propvided) => ({
    ...propvided,
    border: '1px solid #52DE97',
  }),
  valueContainer: (provided) => ({
    ...provided,
    // position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '88px',
    width: '954px',
    borderRadius: '10px',
    opacity: 1,
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: 0,
    color: '#A09D9D',
    opacity: 1,
    paddingLeft: '32px',
    outline: 'none',
    backgroundColor: 'white',
    transition: 'all 0.3s ease-in-out',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    height: '100%',
    top: 0,
    transform: 'none',
    display: 'flex',
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: () => ({
    paddingRight: '40px',
    transform: 'scale(1.5)',
  }),
  // option: (provided, state) => ({
  //   ...provided,
  //   borderBottom: '1px dotted pink',
  //   color: state.isSelected ? 'red' : 'blue',
  //   padding: 20,
  // }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 200,
  // }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';

  //   return { ...provided, opacity, transition };
  // }
}

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
export const FormContainer = styled.form `
  max-width: 954px;
  margin:0 auto;
`;
export const AllForms = styled.div `
  margin-top:100px;
  margin-bottom:60px;
  width:954px;
`;

export const FormControl = styled.div `
  margin-top:60px;
  align-items: center;

  ${props => props.error && css `
    label {
      color: red;
    }
    input {
      background-color: #ffebeb;
    }
  `}
`;

export const FormLabel = styled.label `
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0 px;
  color:#2E293C;
  opacity: 1;
  padding-bottom: 15px;
  display: block;
`;

export const FormInput = styled.input `
  height: 88px;
  width: 100%;
  border: 1px solid #52DE97;
  border-radius: 10px;
  opacity: 1;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0 px;
  color: #A09D9D;
  opacity: 1;
  padding-left:32px;
  outline: none;
  background-color: white;
  transition: all 0.3s ease-in-out;

  &:focus {
    background-color: #fffce3;
  }

  &::placeholder {
    color: #A09D9D;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const InputSymbol = styled.div `
  height: 88px;
  width: 100%;
  border: 1px solid #52DE97;
  border-radius: 10px;
  opacity: 1;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0 px;
  color: #A09D9D;
  opacity: 1;
  padding-left:32px;
  padding-right:32px;
`;



export const FormShare = styled.div `
  height: 176px;
  width: 954px;
  border: 1px solid #52DE97;
  border-radius: 10px;
  opacity: 1;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0 px;
  color: #A09D9D;
  opacity: 1;
  padding-top:32px;
  padding-left:32px;
`;
export const BBlock = styled.div `
  margin:0 auto;
  width:219px;
`;