import { styled } from 'frontity';
import {
  PADDING_DESCTOP_LARGE,
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
} from '../../../../const/responsive';


export const GlobalContainer = styled.div`
  overflow: hidden;
  position: relative;
`;
export const Container = styled.div`
  margin:0 auto;
  text-align: left;
  letter-spacing:0 px;
  padding-right: 150px;
  padding-left:${(props) => (props.alignImage === 'left' ? '50%' : `${PADDING_DESCTOP_LARGE}px`)};
  opacity:1;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
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


export const CircleContainer = styled.div`
  position: relative;
  @media (max-width: ${SIZE_LAPTOP}px) {
    padding-top: 0px;
  }
  ${(props) => props.mode === 'Circle' && `
    &:after{
      content: ' ';
      background-color: #FFFFFF;
      width: 3006px;
      height: 2472px;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: calc(50% - 1150px);
      z-index: -1;
    }
    &:before{
      content: ' ';
      background: #F5F6FA;
      width: 100%;
      height: 1830px;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;
    }
  `}
  ${(props) => props.mode === 'Grey colour' && `
    background: #F5F6FA;
  `}

`;
