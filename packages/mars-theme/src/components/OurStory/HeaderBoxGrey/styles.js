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
  SIZE_LAPTOP,
  SIZE_MOBILE,
} from '../../../const/responsive';
import LinesLeft from '../../../img/lines_left.svg';
import LinesRight from '../../../img/lines_right.svg';

export const HeaderFooter = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  @media (max-width: ${SIZE_LAPTOP}px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const HeaderBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  @media (max-width: ${SIZE_LAPTOP}px) {
    flex-wrap: wrap;
    padding-top: 100px;
  }
`;
export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 45px;
  width: 50%;
  position: relative;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    padding-right: 50px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    padding-right: 0;
  }

  &:before{
    content:' ';
    width: 322px;
    height: 211px;
    background: url(${LinesLeft}) no-repeat 50% 50% / 100% auto;
    position: absolute;
    top: 0%;
    left: 0px;
    @media (max-width: ${SIZE_LAPTOP}px) {
      display: none;
    }
  }
  &:after{
    content:' ';
    width: 322px;
    height: 211px;
    background: url(${LinesRight}) no-repeat 50% 50% / 100% auto;
    position: absolute;
    top: 0%;
    right: 0px;
    @media (max-width: ${SIZE_LAPTOP}px) {
      display: none;
    }
  }

  h1 {
    width: 100%;
    text-align: left;
    font-size: 50px;
    line-height: 78px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #2E293C;
    opacity: 1;
    margin: 0;
    max-width: 423px;
    span{
      color: #52DE97;
    }

    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 45px;
      line-height: 67px;
    }
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 42px;
      line-height: 60px;
    }
    @media (max-width: ${SIZE_LAPTOP}px) {
      width: 100%;
      font-size: 32px;
      line-height: 42px;
      text-align: center;
      max-width: 100%;
    }
  }
  button{
    @media (max-width: ${SIZE_LAPTOP}px) {
      margin-top: 30px;
    }
  }
  p {
    text-align: left;
    font-size: 24px;
    line-height: 40px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #A09D9D;
    opacity: 1;
    max-width: 564px;
    width: 100%;
    margin: 0;
    padding-top: 30px;
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 22px;
      line-height: 36px;
    }
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 20px;
      line-height: 32px;
    }
    @media (max-width: ${SIZE_LAPTOP}px) {
      width: 100%;
      font-size: 18px;
      line-height: 32px;
      text-align: center;
    }
  }
`;

export const CircleBg = styled.div`
  position: absolute;
  top:0px;
  left:0px;
  right:0px;
  height:900px;
  &:after{
    content: ' ';
    background-color: #FFFFFF;
    width: 3006px;
    height: 2472px;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 1503px);
    z-index: 0;
  }
  &:before{
    content: ' ';
    background: #F5F6FA;
    width: 100%;
    height: 1830px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: -1;
  }

  @media (max-width: ${SIZE_LAPTOP}px) {
    display: none;
  }
`;

export const GlobalContainer = styled.div`
  padding-bottom: 100px;
  overflow: visible;
  position: relative;
  
  @media (max-width: ${SIZE_LAPTOP}px) {
    padding-bottom: 50px;
  }
  ${DescriptionBox}{
    width:100%;
    flex-direction: column;
    & h1{
      text-align: center;
      max-width: 100%;
    }
    & p{
      text-align: center;
      max-width: 100%;
    }
  }
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    /* padding-top: 139px; */
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    /* padding-top: 91px; */
  }
  
`;


export const Container = styled.div`
  margin: 0;
  width: 100%;
  padding-left: ${PADDING_DESCTOP_LARGE}px;
  padding-right: ${PADDING_DESCTOP_LARGE}px;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
  }

  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
  }

`;
