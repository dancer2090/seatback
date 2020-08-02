import { styled, css } from 'frontity';
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
  HEADER_FONT_SIZE_DESCTOP_LARGE,
  HEADER_LINE_HEIGHT_DESCTOP_LARGE,
  HEADER_FONT_SIZE_DESCTOP_MEDIUM_1,
  HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  HEADER_FONT_SIZE_MOBILE,
  HEADER_LINE_HEIGHT_MOBILE,
} from '../../../const/responsive';
import Check from '../../../img/checkmark.svg';


export const Container = styled.div`
  padding-right: ${PADDING_DESCTOP_LARGE}px;
  padding-left: ${PADDING_DESCTOP_LARGE}px;
  position: relative;
  width: 100%;
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
    font-size: ${26}px;
    line-height: ${36}px;
    font-weight: bold;
    padding-top: 0;
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
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-bottom: 30px;
  }
`;
export const PlansContainer = styled.div`
  margin-top: 160px;
  border-radius: 24px;
  position: relative;

  > div {
    &:first-of-type {
      border-top-left-radius: 24px;
      border-bottom-left-radius: 24px;
      overflow: hidden;
    }
  }

  display: flex;
  @media (max-width: ${SIZE_LAPTOP}px) {
    flex-direction: column;
    margin-top: 40px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    flex-direction: column;
    margin-top: 40px;
    display: none;
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

  @media (max-width: ${SIZE_MOBILE}px) {
    flex-wrap: wrap;
    border: 3px solid #52DE97;
    margin-top: 4px;
    padding: 23px 53px;
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
    @media (max-width: ${SIZE_MOBILE}px) {
      transform: scale(1);
      width: 28px;
      height: 28px;
      order: 1;
    }
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
  ${(props) => props.active && css`
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
  background: ${(props) => props.background};
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
    flex-wrap: wrap;
    background-color: white;
    font-size: 16px;
    line-height: 26px;
    width: 100%;
    order: 2;
    text-align: center;
    padding: 0;
    padding-top: 11px;
    justify-content: center;
  }
  
`;


export const PlansContainerMobile = styled.div`
  display: none;
  padding-top: 80px;
  margin-left: -20px;
  margin-right: -20px;
  @media(max-width: ${SIZE_MOBILE}px) {
    display: block;
  }
`;

export const SlickContainer = styled.div`
  .slick-slider
  {
      position: relative;
      /* padding-left: 100px;
      padding-right: 100px; */
      display: block;
      box-sizing: border-box;

      -webkit-user-select: none;
        -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;

      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
          touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;


      div {
        outline: none;
      }
  }

  .slick-list
  {
      position: relative;

      display: block;
      overflow: hidden;

      margin: 0;
      padding: 0;
  }
  .slick-list:focus
  {
      outline: none;
  }
  .slick-list.dragging
  {
      cursor: pointer;
      cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list
  {
      -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
          -ms-transform: translate3d(0, 0, 0);
          -o-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
  }

  .slick-track
  {
      position: relative;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
  }
  .slick-track:before,
  .slick-track:after
  {
      display: table;

      content: '';
  }
  .slick-track:after
  {
      clear: both;
  }
  .slick-loading .slick-track
  {
      visibility: hidden;
  }

  .slick-slide
  {
      display: none;
      float: left;

      height: 100%;
      min-height: 1px;

      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
  }
  [dir='rtl'] .slick-slide
  {
      float: right;
  }
  .slick-slide img
  {
      display: block;
  }
  .slick-slide.slick-loading img
  {
      display: none;
  }
  .slick-slide.dragging img
  {
      pointer-events: none;
  }
  .slick-initialized .slick-slide
  {
      display: block;
  }
  .slick-loading .slick-slide
  {
      visibility: hidden;
  }
  .slick-vertical .slick-slide
  {
      display: block;

      height: auto;

      border: 1px solid transparent;
  }
  .slick-arrow {
    &:before{
      display:none;
    }
  }
  .slick-arrow.slick-hidden {
      display: none;
  }


  /* Arrows */
  .slick-prev,
  .slick-next
  {
      font-size: 0;
      line-height: 0;

      position: absolute;
      top: 50%;
      
      display: block;

      width: 20px;
      height: 20px;
      padding: 0;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);

      cursor: pointer;

      color: transparent;
      border: none;
      outline: none;
      background-color: rgb(82, 222, 151, 0);
      border: none;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      transition: all 0.3 ease-in-out;
      color: #2E293C !important;
      z-index: 1;
      &:hover, &:focus {

        &:before {
          color: white;
        }
      }
      @media (max-width: ${SIZE_MOBILE}px) {
        transform: scale(0.7);
        top: auto;
        bottom: -70px;
        display: none !important;
      }
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus
  {
      /* color: transparent; */
      outline: none;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before
  {
      opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before
  {
      opacity: .25;
  }

  .slick-prev:before,
  .slick-next:before
  {
      font-family: 'slick';
      font-size: 20px;
      line-height: 1;

      opacity: .75;
      /* color: white; */

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev
  {
      @media (max-width: ${SIZE_LAPTOP + 100}px) {
        left: 25px;
      }
      @media (max-width: ${SIZE_MOBILE}px) {
        left: calc(50% - 100px);
      }
  }
  /* [dir='rtl'] .slick-prev
  {
      right: -25px;
      left: auto;
      @media (max-width: ${SIZE_LAPTOP + 100}px) {
        left: 25px;
      }
  } */
  .slick-prev:before
  {
      content: '<';
  }
  [dir='rtl'] .slick-prev:before
  {
      content: '<';
  }

  .slick-next
  {
      @media (max-width: ${SIZE_LAPTOP}px) {
        right: 25px;
      }
      @media (max-width: ${SIZE_MOBILE}px) {
        right: calc(50% - 100px);
      }
  }
  /* [dir='rtl'] .slick-next
  {
      right: auto;
      left: -25px;
      @media (max-width: ${SIZE_LAPTOP}px) {
        right: 25px;
      }
  } */
  .slick-next:before
  {
      content: '>';
  }
  [dir='rtl'] .slick-next:before
  {
      content: '>';
  }

  /* Dots */
  .slick-dotted.slick-slider
  {
      margin-bottom: 30px;
  }

  .slick-dots
  {
      position: absolute;
      bottom: -45px;
      display: none;

      width: 100%;
      padding: 0;
      margin: 0;

      list-style: none;

      text-align: center;
  }
  .slick-dots li
  {
      position: relative;

      display: inline-block;

      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #CCCCCC;
      margin: 0 5px;
      padding: 0;

      cursor: pointer;
  }
  .slick-dots li button
  {
      opacity: 0;
      font-size: 0;
      line-height: 0;

      display: block;

      width: 20px;
      height: 20px;
      padding: 5px;

      cursor: pointer;

      color: transparent;
      border: 0;
      outline: none;
      background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus
  {
      outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before
  {
      opacity: 1;
  }
  .slick-dots li button:before
  {
      font-family: 'slick';
      font-size: 6px;
      line-height: 20px;

      position: absolute;
      top: 0;
      left: 0;

      width: 20px;
      height: 20px;

      content: 'â€¢';
      text-align: center;

      opacity: .25;
      color: black;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before
  {
      opacity: .75;
      color: black;
  }
  .slick-dots li.slick-active
  {
    background-color: #2E293C;
  }
`;

export const Item = styled.div`
  position: relative;
  padding-top: 32px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ItemTitleBox = styled.div`
  padding: 34px 10px;
  background-color: ${(props) => props.background};
  
  h3 {
    font-size: 18px;
    line-height: 30px;
    color: white;
    padding-bottom: 34px;
    font-weight: 600;
    margin: 0;
  }

  button {
    max-width: 140px;
    margin: 0 auto;
    color: black;
    border-color: white;
    border-width: 2px;
    background-color: transparent;
  }

  ${(props) => props.active && css`
    &:before{
      content:' ';
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: url(${Check}) no-repeat 50% 50%;
      position: absolute;
      top: 0;
      left: calc(50% - 35px);
      z-index: 2;
    }
    &:after{
      content:' ';
      width: 64px;
      height: 64px;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: calc(50% - 35px);
      z-index: 1;
      background-color: ${props.background};
    }
  `}
`;

export const CheckboxConteiner = styled.div`
  order: 1;
  width: 100%;
  min-height: 28px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
