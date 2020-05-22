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
} from '../../../const/responsive';
import Check from '../../../img/checkmark.svg';


export const Container = styled.div `
  padding-right: ${PADDING_DESCTOP_LARGE}px;
  padding-left: ${PADDING_DESCTOP_LARGE}px;
  position: relative;
  width: 100%;
  oveflow: hidden;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-top: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-bottom: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
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
  padding-top: 0;
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
    padding-top: 30px;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    max-width: 100%;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${HEADER_FONT_SIZE_MOBILE}px;
    line-height: ${HEADER_LINE_HEIGHT_MOBILE}px;
  }
`;


export const GlobalContainer = styled.div`
  background: #F5F6FA;
  padding-top: 60px;
  padding-bottom: 70px;
  @media (max-width: ${SIZE_LAPTOP}px) {
    padding-top: 30px;
    padding-bottom: 110px;
  }
`;
export const PlansContainer = styled.div`
  margin-top: 160px;
  border-radius: 24px;
  position: relative;


  > div {
    &:first-child {
      border-top-left-radius: 24px;
      border-bottom-left-radius: 24px;
      overflow: hidden;
    }
    &:last-child {
      & ${ColumnName} {
        border-top-right-radius: 24px;
        /* overflow: hidden; */
      }
    }
  }

  display: flex;
  @media (max-width: ${SIZE_LAPTOP}px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;
export const PlansColumn = styled.div`
  width: 100%;
  position: relative;
`;
export const PlansColumn2 = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  @media (max-width: ${SIZE_LAPTOP}px) {
    margin-top: 50px;
    border-radius: 24px;
  }
  ${props => props.active && css`
    &:before{
      content:' ';
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: url(${Check}) no-repeat 50% 50%;
      position: absolute;
      top: -35px;
      left: calc(50% - 35px);
      z-index: 2;
    }
    &:after{
      content:' ';
      width: 70px;
      height: 70px;
      border-radius: 50%;
      position: absolute;
      top: -35px;
      left: calc(50% - 35px);
      z-index: 1;
      background-color: ${props.background};
    }
    & ${Cell}{
      border: 3px solid ${props.background};
      @media (max-width: ${SIZE_LAPTOP}px) {
        border: none;
      }
    }
  `}
`;
export const ChosePlan = styled.div`
  height: 217px;
  background: #A09D9D;
  margin-right: 5px;
  color: #FFFFFF;
  font-size: 34px;
  line-height: 46px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    font-size: 34px;
    line-height: 46px;
  }
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    font-size: 26px;
    line-height: 35px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    display: none;
  }
  
`;
export const RowName = styled.div`
  height: 164px;
  margin-top: 5px;
  margin-right: 5px;
  background: #EFEFEF;
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media (max-width: ${SIZE_LAPTOP}px) {
    display: none;
    height: auto;
    padding-top: 20px;
    padding-right: 20px;
    border-radius: 24px;
    overflow: hidden;
  }
`;
export const ColumnName = styled.div`
  height: 217px;
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  color: #fff;
  margin-right: 4px;

  span {
    text-align: center;
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${SIZE_LAPTOP}px) {
      min-height: auto;
    }
  }
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
  @media (max-width: ${SIZE_LAPTOP}px) {
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    font-size: 24px;
    line-height: 40px;
    margin: 0;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 18px;
    line-height: 32px;
  }

  & button{
    margin-top: 10px;
    border: 2px solid #FFFFFF;
    background: transparent;
    color: #2E293C;
    @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
      max-width: 150px;
    }
    @media (max-width: ${SIZE_LAPTOP}px) {
      margin-top: 20px;
      max-width: 100%;
    }
    &:hover{
      color: #fff;
    }
  }
`;
export const Cell = styled.div`
  height: 164px;
  background: #fff;
  margin-right: 5px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${SIZE_LAPTOP}px) {
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 0;
    height: auto;
    min-height: 150px;
    margin: 0;
    min-height: auto;

    > img {
      margin: 0 auto;
    }
  }

  img {
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      transform: scale(0.9);
    }
    @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
      transform: scale(0.8);
    }
    @media (max-width: ${SIZE_LAPTOP}px) {
      transform: scale(0.7);
    }
  }
`;
export const HiddenHeader = styled.div`
  display: none;
  background: #EFEFEF;
  justify-content: center;
  align-items: center;
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
  @media (max-width: ${SIZE_LAPTOP}px) {
    display:flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 50%;
    margin: 0;
    justify-content: flex-start;
    text-align: left;
    padding-left: 15px;
    font-size: 16px;
    line-height: 28px;
    border: 'none';
    min-height: 60px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 15px;
    line-height: 26px;
    margin: 0;
  }
  
`;