import { styled } from 'frontity';
import {
  PADDING_DESCTOP_MEDIUM_1,
  PADDING_DESCTOP_SMALL,
  PADDING_MOBILE,
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
} from '../../const/responsive';

export const Container = styled.div`
  padding-top: 250px;
  position: relative;
  overflow: hidden;
  &:after{
    content: ' ';
    background-color: #F5F6FA;
    width: 3006px;
    height: 2450px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: calc(50% - 1500px);
    z-index: -1;
  }
  &:before{
    content: ' ';
    background: ${(props) => (props.bgColor ? props.bgColor : '#FFFFFF')};
    width: 100%;
    height: 1272px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }

  @media(max-width: ${SIZE_MOBILE}px) {
    padding-top: 130px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${HEADER_FONT_SIZE_DESCTOP_LARGE}px;
  line-height: ${HEADER_LINE_HEIGHT_DESCTOP_LARGE}px;
  font-weight: 500;
  letter-spacing: 0px;
  opacity: 1;
  max-width: 970px;
  margin: 0 auto;
  white-space: pre-wrap;


  span {
    color: #52DE97;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${HEADER_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    font-size: ${HEADER_FONT_SIZE_MOBILE}px;
    line-height: ${HEADER_LINE_HEIGHT_MOBILE}px;
  }
`;


export const CarouselContainer = styled.div`
  margin-left: -95px;
  margin-right: -95px;
  padding-top: 125px;
  padding-bottom: 125px;
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    margin-left: -150px;
    margin-right: -150px;
  }
`;

export const Item = styled.div`
  
  padding-left: 20px;
  padding-right: 20px;
`;

export const ImageBox = styled.div`
  width: 175px;
  height: 175px;
  background-color: #52DE97;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;


export const SlickContainer = styled.div`
  /* Slider */
  .slick-slider
  {
      position: relative;

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

      display: block;
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
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus
  {
      color: transparent;
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
      color: white;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev
  {
      left: -25px;
  }
  [dir='rtl'] .slick-prev
  {
      right: -25px;
      left: auto;
  }
  .slick-prev:before
  {
      content: 'â†';
  }
  [dir='rtl'] .slick-prev:before
  {
      content: 'â†’';
  }

  .slick-next
  {
      right: -25px;
  }
  [dir='rtl'] .slick-next
  {
      right: auto;
      left: -25px;
  }
  .slick-next:before
  {
      content: 'â†’';
  }
  [dir='rtl'] .slick-next:before
  {
      content: 'â†';
  }

  /* Dots */
  .slick-dotted.slick-slider
  {
      margin-bottom: 30px;
  }

  .slick-dots
  {
      position: absolute;
      bottom: -25px;

      display: block;

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

      width: 20px;
      height: 20px;
      margin: 0 5px;
      padding: 0;

      cursor: pointer;
  }
  .slick-dots li button
  {
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
`;
