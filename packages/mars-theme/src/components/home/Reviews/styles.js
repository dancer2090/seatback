import { styled } from 'frontity';
import LeftArrow from '../../../img/left_arrow.svg';
import LeftArrowGreen from '../../../img/left_arrow_green.svg';
import RightArrow from '../../../img/right_arrow.svg';
import RightArrowGreen from '../../../img/right_arrow_green.svg';

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
} from '../../../const/responsive';

export const ArrowIcon = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #52DE97 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Container = styled.div`
  background-color: #F5F6FA;
  padding-top: 230px;
  padding-bottom: 230px;
  padding-left: 0;
  padding-right: 0;
  margin: 0;
  overflow-x: hidden;

  @media (max-width: ${SIZE_LAPTOP}px) {
    padding-top: 180px;
    padding-bottom: 180px;
  }
  @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-top: 120px;
    padding-bottom: 100px;
  }
`;

export const Description = styled.div`
  width: 80%;
  padding-left: 20px;
  @media (max-width: ${SIZE_LAPTOP}px) {
    width: 70%;
  }
  @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    padding: 0;
  }
`;

export const Picture = styled.div`
  width: 20%; 
  overflow: hidden;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    max-width: 100%;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    width: 30%;
  }
  @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    padding: 0;
    text-align: center;
    padding-bottom: 30px;
    img {
      margin: 0 auto;
    }
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    img {
      width: 74px;
      height: 74px;
    }
  }
`;
export const Comment = styled.div`
  text-align: left;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
  font-weight: 500;
  position: relative;
  z-index: 2;

  @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media(max-width: ${SIZE_MOBILE}px) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    font-weight: 400;
    text-align: center;
  }
  
`;

export const Status = styled.div`
  padding-top: 18px;
  letter-spacing: 0px;
  color: #A09D9D;
  font-size: 20px;
  line-height: 35px;
  opacity: 1;
  position: relative;
  z-index: 2;
  @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media(max-width: ${SIZE_MOBILE}px) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    text-align: center;
  }
`;

export const Item = styled.div`
  max-width: 941px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;

  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    max-width: 768px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    max-width: 600px;
  }
  @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
    max-width: 400px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    max-width: 400px;
    width: 70%;
    margin-left: 20px;
    margin-right: 20px;
  }
`;


export const ItemBox = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 4px 4px 8px #00000014;
  border-radius: 10px;
  opacity: 1;
  padding: 50px 50px 30px 50px;

  @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
    flex-wrap: wrap;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    padding: 30px 30px 82px 30px;
  }

  &:after {
    content: " ";
    position: absolute;
    bottom: -255px;
    right: -255px;
    background-color: #52DE97;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: #52DE97 0% 0% no-repeat padding-box;
    opacity: 1;

    @media (max-width: ${SIZE_MOBILE}px) {
      bottom: -350px;
      right: -400;
      width: 900px;
      height: 400px;
    }
    @media (max-width: 400px) {
      bottom: -350px;
      right: -400;
      width: 800px;
      height: 400px;
    }
  }
`;

export const SlickContainer = styled.div`
  /* Slider */
  position: relative;
  max-width: 1620px;
  margin: 0 auto;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2 + 100}px) {
    max-width: 1240px;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    max-width: 1040px;
  }

  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    max-width: 900px;
  }
  

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
    background: url(${LeftArrow}) 50% 50% / 100% auto no-repeat;
    left: -25px;
    &:hover{
      background: url(${LeftArrowGreen}) 50% 50% / 100% auto no-repeat;
    }
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
    background: url(${RightArrow}) 50% 50% / 100% auto no-repeat;
    right: -25px;
    &:hover{
      background: url(${RightArrowGreen}) 50% 50% / 100% auto no-repeat;
    }
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
