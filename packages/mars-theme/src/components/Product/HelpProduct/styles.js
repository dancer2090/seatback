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
  TEXT_FONT_SIZE_DESCTOP_MEDIUM_1,
  TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  TEXT_FONT_SIZE_MOBILE,
  TEXT_LINE_HEIGHT_MOBILE,
} from '../../../const/responsive';


export const Container = styled.div`
  padding-top: 180px;
  padding-bottom: 227px;
  padding-right: ${PADDING_DESCTOP_LARGE}px;
  padding-left: ${PADDING_DESCTOP_LARGE}px;
  position: relative;
  width: 100%;
  background: #FFFFFF;
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
    padding-top: 30px;
    padding-bottom: 100px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding-top: 0;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    padding-top: 0;
    padding-bottom: 80px;
  }
`;


export const Blocks = styled.div`
  padding-top: 180px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    flex-wrap: wrap;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-top: 30px;
    &:first-of-type {
      padding-top: 0;
    }
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    display: none;
  }
`;

export const Block = styled.div`
  padding-left: 13px;
  padding-right: 13px;
  width: 33%;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    width: 50%;
    margin-top: 100px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    width: 100%;
  }
`;

export const BlockContent = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 4px 4px 8px #00000014;
  border-radius: 10px;
  opacity: 1;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const Icon = styled.div`
  width: 110px;
  height: 110px;
  background: #52DE97 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -55px;
  left: calc(50% - 55px);
  font-size: 34px;
  line-height: 136px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #FFFFFF;
  @media (max-width: ${SIZE_MOBILE}px) {
    transform: scale(0.7);
  }
`;

export const Description = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #A09D9D;
  opacity: 1;
  padding: 95px 10px 45px 10px;
  width: 100%;
  height: 100%;
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
    padding: 55px 5px 25px 5px;
  }
`;

export const SliderBox = styled.div`
  display: none;
  @media (max-width: ${SIZE_MOBILE}px) {
    display: block;
  }


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

    display: flex;
    align-items: stretch;

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
    height: inherit !important;
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
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
  display: none;
}
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
   display: none;
}

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
    display: none;
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

export const Item = styled.div`
  
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  left: -30px;
`;

export const ItemBox = styled.div`
  padding: 20px;
  font-size: 12px;
  line-height: 22px;
  text-align: left;
  border-left: 3px solid #52DE97;
  background-color: #2E293C;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: #FFFFFF;
  height: 100%;
  br {
    content: " ";  
    float:right;
    display: none;
  }  
`;
