import { styled, css } from 'frontity';
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
  BANNER_TEXT_FONT_SIZE_DESCTOP_LARGE,
  BANNER_TEXT_LINE_HEIGHT_DESCTOP_LARGE,
  BANNER_TEXT_FONT_SIZE_DESCTOP_MEDIUM_1,
  BANNER_TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  BANNER_TEXT_FONT_SIZE_MOBILE,
  BANNER_TEXT_LINE_HEIGHT_MOBILE,
} from '../../../const/responsive';


export const Container = styled.div `
  background: #F5F6FA 0% 0% no-repeat padding-box;
  padding-top: 205px;
  padding-bottom: 205px;
  padding-right: 150px;
  padding-left: ${props => props.alignImage === 'left' ? '50%' : '150px'};
  position: relative;
  width: 100%;

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
    margin-bottom: 169px;
  }
  
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    margin-bottom: 50px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 15px;
  text-align: left;
  font-size: 50px;
  line-height: 70px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
  position: relative;
  z-index: 2;
`;

export const SubTitle = styled.h2`
  margin: 0;
  padding-top: 15px;
  text-align: left;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
  position: relative;
  z-index: 2;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${BANNER_TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${BANNER_TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${BANNER_TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${BANNER_TEXT_LINE_HEIGHT_MOBILE}px;
    margin-bottom: 35px;
  }
`;

export const DescriptionParagraph = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #A09D9D;
  max-width: 817px;
  margin: 0;
  position: relative;
  z-index: 2;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${BANNER_TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${BANNER_TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${BANNER_TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${BANNER_TEXT_LINE_HEIGHT_MOBILE}px;
    margin-bottom: 35px;
  }
`;


export const Action = styled.div`
  margin-top: 45px;
  position: relative;
  z-index: 2;
`;


export const Image = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  right: ${props => props.alignImage === 'left' ? 'auto' : '150px'};
  top: 0;
  left: ${props => props.alignImage === 'left' ? '150px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignImage === 'left' ? 'flex-start' : 'flex-end'};
`;