import { styled, css, keyframes } from 'frontity';
import  {
  PADDING_DESCTOP_LARGE,
  PADDING_DESCTOP_MEDIUM_2,
  PADDING_DESCTOP_MEDIUM_1,
  PADDING_DESCTOP_SMALL,
  PADDING_MOBILE,
  SIZE_DESCTOP_LARGE,
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  getPxSize,
  SIZE_LAPTOP,
  SIZE_LAPTOP_SMALL,
  SIZE_MOBILE,

  HEADER_FONT_SIZE_DESCTOP_LARGE,
  HEADER_LINE_HEIGHT_DESCTOP_LARGE,
  HEADER_FONT_SIZE_DESCTOP_MEDIUM_1,
  HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  HEADER_FONT_SIZE_MOBILE,
  HEADER_LINE_HEIGHT_MOBILE,

  TEXT_FONT_SIZE_DESCTOP_LARGE,
  TEXT_LINE_HEIGHT_DESCTOP_LARGE,
  TEXT_FONT_SIZE_DESCTOP_MEDIUM_1,
  TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  TEXT_FONT_SIZE_MOBILE,
  TEXT_LINE_HEIGHT_MOBILE,

  POST_MARGIN_LARGE,
  POST_MARGIN_MEDIUM_1,
  POST_MARGIN_MOBILE,
} from '../../../../const/responsive';



export const GlobalContainer = styled.div `
  overflow: hidden;
  position: relative;
`;
export const Container = styled.div `
  margin:0 auto;
  text-align: left;
  letter-spacing:0 px;
  padding-right: 150px;
  padding-left:${props => props.alignImage === 'left' ? '50%' : PADDING_DESCTOP_LARGE + 'px'};
  opacity:1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
    flex-wrap: wrap;
  }
  
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    .main-block button{
      margin: 0 auto;
    }
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
  }
`;
export const PlanInfo = styled.div `
  padding-top: 123px;
  width: 50%;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    width: 100%;
  }
`;
export const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: ${HEADER_FONT_SIZE_DESCTOP_LARGE}px;
  line-height: ${HEADER_LINE_HEIGHT_DESCTOP_LARGE}px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #2E293C;
  margin: 0;
  white-space: pre-wrap;
  max-width: 970px;
  margin: 0 auto;
  span {
    color: #52DE97;
  } 
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${HEADER_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    max-width: 100%;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${HEADER_FONT_SIZE_MOBILE}px;
    line-height: ${HEADER_LINE_HEIGHT_MOBILE}px;
  }
`;
export const PlanInfoTextContainer = styled.div`
  margin-top: 2rem;
`;
export const PlanInfoText = styled.div`
  font-size: 22px;
  line-height: 38px;
  font-weight: 500;
  color: #2E293C;
  text-align: center;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    font-size: 20px;
    line-height: 36px;
  }
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: 19px;
    line-height: 35px;
  }
  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    font-size: 18px;
    line-height: 32px;
  }
`;
export const FormContainer = styled.div`
  width: 50%;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    width: 100%;
  }
`;

