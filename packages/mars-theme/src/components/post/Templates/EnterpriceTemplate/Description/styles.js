import { styled } from 'frontity';
import {
  PADDING_DESCTOP_MEDIUM_2,
  PADDING_DESCTOP_MEDIUM_1,
  PADDING_DESCTOP_SMALL,
  PADDING_MOBILE,
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  getPxSize,
  SIZE_LAPTOP,
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
  WIDTH_DESCRIPTION_SIDE_LARGE,
  WIDTH_DESCRIPTION_SIDE_MEDIUM_1,
} from '../../../../../const/responsive';

export const GlobalContainer = styled.div`
  background: #F5F6FA 0% 0% no-repeat padding-box;
  position: relative;
  background-color: #F5F6FA;
  overflow: hidden;
  padding-top: 314px;
  &:after{
    content: ' ';
    background-color: ${(props) => (props.circleColor ? props.circleColor : '#FFFFFF')};;
    width: 3006px;
    height: 2450px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: calc(50% - 1503px);
    z-index: 1;
  }
  &:before{
    content: ' ';
    background: ${(props) => (props.bgColor ? props.bgColor : '#FFFFFF')};
    width: 100%;
    height: 1272px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
  }
`;
export const Container = styled.div`
  padding-top: 205px;
  padding-bottom: 205px;
  padding-right: 150px;
  padding-left: ${(props) => (props.alignImage === 'left' ? '49%' : '150px')};
  position: relative;
  width: 100%;
  z-index: 2;

  &:first-child {
    padding-top: 0;
    padding-bottom: 0;
  }
  &:nth-child(2) {
    margin-top: 205px;
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
      margin-top: ${PADDING_DESCTOP_MEDIUM_2}px;
    }
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
      margin-top: ${PADDING_DESCTOP_MEDIUM_1}px;
    }
    @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
      margin-top: 0;
    }
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-left: ${(props) => (props.alignImage === 'left' ? '50%' : `${PADDING_DESCTOP_MEDIUM_2}px`)};
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-top: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-bottom: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    padding-left: ${(props) => (props.alignImage === 'left' ? '50%' : `${PADDING_DESCTOP_MEDIUM_1}px`)};
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-top: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-bottom: ${PADDING_DESCTOP_MEDIUM_1}px;
  }
  
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 15px;
  text-align: left;
  font-size: ${HEADER_FONT_SIZE_DESCTOP_LARGE}px;
  line-height:${HEADER_LINE_HEIGHT_DESCTOP_LARGE}px;
  font-weight: 500;
  letter-spacing: 0px;
  color: ${(props) => (props.circleColor === '#2E293C' ? '#52DE97' : '#2E293C')} ;
  opacity: 1;
  position: relative;
  z-index: 2;
  max-width: ${WIDTH_DESCRIPTION_SIDE_LARGE}px;
  @media (max-width: 1800px) {
    max-width: ${(props) => (props.alignImage === 'left' ? '100%' : `${WIDTH_DESCRIPTION_SIDE_MEDIUM_1}%`)};
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

export const SubTitle = styled.h2`
  margin: 0;
  padding-top: 15px;
  text-align: left;
  font-size: ${TEXT_FONT_SIZE_DESCTOP_LARGE}px;
  line-height: ${TEXT_LINE_HEIGHT_DESCTOP_LARGE}px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
  position: relative;
  z-index: 2;
  max-width: ${WIDTH_DESCRIPTION_SIDE_LARGE}px;
  @media (max-width: 1800px) {
    max-width: ${(props) => (props.alignImage === 'left' ? '100%' : `${WIDTH_DESCRIPTION_SIDE_MEDIUM_1}%`)};
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    margin-bottom: 35px;
  }
`;

export const DescriptionParagraph = styled.p`
  font-size: ${TEXT_FONT_SIZE_DESCTOP_LARGE}px;
  line-height: ${TEXT_LINE_HEIGHT_DESCTOP_LARGE}px;
  font-weight: 400;
  letter-spacing: 0px;
  color: ${(props) => (props.circleColor === '#2E293C' ? '#ffffff' : '#A09D9D')};
  max-width: ${WIDTH_DESCRIPTION_SIDE_LARGE}px;
  margin: 0;
  position: relative;
  z-index: 2;
  @media (max-width: 1800px) {
    max-width: ${(props) => (props.alignImage === 'left' ? '100%' : `${WIDTH_DESCRIPTION_SIDE_MEDIUM_1}%`)};
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    max-width: 100%;
    text-align: center;
    padding-top: 30px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    margin-bottom: 35px;
  }
`;


export const Action = styled.div`
  margin-top: 45px;
  position: relative;
  z-index: 2;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    & button{
      margin: 0 auto;
    }
  }
`;


export const Image = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  right: ${(props) => (props.alignImage === 'left' ? 'auto' : '150px')};
  left: ${(props) => (props.alignImage === 'left' ? '150px' : 'auto')};
  top: 0;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.alignImage === 'left' ? 'flex-start' : 'flex-end')};
  /* & img.card1{
    position: absolute;
    left: ${(props) => (props.alignImage === 'left' ? '0px' : 'auto')};;
    right: ${(props) => (props.alignImage === 'left' ? 'auto' : '0px')};;
    top: 0px;
  } */
  @media (max-width: 1800px) {
    & img{
      width: 550px;
    }
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    right: ${(props) => (props.alignImage === 'left' ? 'auto%' : `${PADDING_DESCTOP_MEDIUM_2}px`)};
    left: ${(props) => (props.alignImage === 'left' ? `${PADDING_DESCTOP_MEDIUM_2}px` : 'auto')};
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    right: ${(props) => (props.alignImage === 'left' ? 'auto%' : `${PADDING_DESCTOP_MEDIUM_1}px`)};
    left: ${(props) => (props.alignImage === 'left' ? `${PADDING_DESCTOP_MEDIUM_1}px` : 'auto')};
    & img{
      width: 500px;
    }
  }
  
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    right: 0;
    left: 0;
    position: relative;
    width: 100%;
    & img{
      width: 480px;
      margin: 0 auto;
    }
    & img.card1{
      left: calc(50% - 240px);
      right: auto;
    }
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    right: 0px;
    left: 0px;
    & img{
      width: 100%;
    }
    & img.card1{
      left: 0px;
      right: 0px;
    }
  }
`;
