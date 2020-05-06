import { styled, css } from 'frontity';
import {
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  SIZE_LAPTOP,
  SIZE_LAPTOP_SMALL,
  SIZE_MOBILE,
  TEXT_FONT_SIZE_MOBILE,
  TEXT_LINE_HEIGHT_MOBILE,
  TEXT_FONT_SIZE_DESCTOP_MEDIUM_1,
  TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_LARGE,
  HEADER_FONT_SIZE_DESCTOP_MEDIUM_1,
  HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  HEADER_FONT_SIZE_MOBILE,
  HEADER_LINE_HEIGHT_MOBILE,
  getPxSize,
} from '../../../const/responsive';

export const Main = styled.div `
  padding-top:123px;
  margin-bottom:123px;
  position: relative;
  overflow: hidden;
  padding-left: 40px;
  padding-right: 40px;
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
    borderRadius: '10px',
    width: '100%',
  }),
  valueContainer: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    height: '88px',
    width: '100%',
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
    "@media only screen and (max-width: 1440px)": {
      fontSize: `${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px`,
      lineHeight: `${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px`,
      height: '60px',
      paddingLeft: '25px',
      paddingRight: '25px',
    },
    "@media only screen and (max-width: 600px)": {
      fontSize: `${TEXT_FONT_SIZE_MOBILE}px`,
      lineHeight: `${TEXT_LINE_HEIGHT_MOBILE}px`,
      height: '45px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
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
    "@media only screen and (max-width: 1440px)": {
      paddingRight: '25px',
      transform: 'scale(1.2)',
    },
    "@media only screen and (max-width: 600px)": {      
      paddingRight: '10px',
      transform: 'scale(1)',
    },
  }),
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
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${HEADER_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${HEADER_FONT_SIZE_MOBILE}px;
    line-height: ${HEADER_LINE_HEIGHT_MOBILE}px;
  }
`;
export const FormContainer = styled.form `
  max-width: 954px;
  margin:0 auto;
  position: relative;
  ${props => props.preload && css `
    &:after{
      content: ' ';
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: url(https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif) no-repeat 50% 50%, rgba(255, 255, 255, 0.4);
    }
  `}
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
      span {
        color: red;
      }
    }
    input {
      background-color: #ffebeb;
    }
  `}

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    margin-top: 40px;
  }
  
  @media (max-width: ${SIZE_MOBILE}px) {
    margin-top: 20px;
  }
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
  transition: all 0.3s ease-in-out;
  span {
    color: #A09D9D;
    font-weight: 400;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
  }
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
  padding-right:32px;
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

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
    height: 60px;
    padding-left:25px;
    padding-right:25px;

    &::placeholder {
      font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
      line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
    }
  }

  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    height: 45px;
    padding-left:20px;
    padding-right:20px;

    &::placeholder {
      font-size: ${TEXT_FONT_SIZE_MOBILE}px;
      line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    }
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
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 176px; 
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
  padding: 32px;

  &:focus {
    background-color: #fffce3;
  }

  &::placeholder {
    color: #A09D9D;
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
    height: 60px;

    &::placeholder {
      font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
      line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
    }
  }

  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    height: 45px;

    &::placeholder {
      font-size: ${TEXT_FONT_SIZE_MOBILE}px;
      line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    }
  }

`;