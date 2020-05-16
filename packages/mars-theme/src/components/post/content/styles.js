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
} from '../../../const/responsive';



export const GlobalContainer = styled.div `
  overflow: hidden;
  position: relative;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-top: 139px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-top: 91px;
  }
`;
export const Container = styled.div `
  margin:0 auto;
  text-align: left;
  letter-spacing:0 px;
  padding-right: 150px;
  padding-left:${props => props.alignImage === 'left' ? '50%' : PADDING_DESCTOP_LARGE + 'px'};
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
export const SubContainer = styled.div `
  margin: 0 auto;
`;
export const HeaderContent = styled.div `
  width: 100%;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
`;
export const HeaderAuthor = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & img{
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-right: 14px;
  }
`;
export const HeaderAuthorName = styled.div `
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0px;
  color: #2E293C;
`;
export const HeaderAuthorDate = styled.div `
  margin-top: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.6px;
  color: #A09D9D;
`;
export const HeaderReaderTime = styled.div `
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #2E293C;
`;


export const LinkShareContainer = styled.div `
  position: absolute;
  right: 0px;
  top: 0px;
`;
export const LinkShare = styled.a `
  width: 60px;
  height: 60px;
  background-color: #F5F6FA;
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PostContentText = styled.div `
  padding-left: 273px;
  padding-right: 273px;
  position: relative;
  font-size: 24px;
  line-height: 48px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: #707070;
  & p{
    margin-top: ${POST_MARGIN_LARGE}px;
  }
  & h1{
    margin-top: ${POST_MARGIN_LARGE}px;
  }
  & h2{
    margin-top: ${POST_MARGIN_LARGE}px;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    color: #2E293C;
    letter-spacing: 0.53px;
  }
  & h3{
    margin-top: ${POST_MARGIN_LARGE}px;
  }
  & h4{
    margin-top: ${POST_MARGIN_LARGE}px;
  }
  & h5{
    margin-top: ${POST_MARGIN_LARGE}px;
  }
  & ol{
    counter-reset: myCounter;
    list-style: none;
    margin-top: ${POST_MARGIN_LARGE}px;
    padding-left: 0px;
    & li{
      display: block;
      margin-top: 60px;
      &:before{
        counter-increment: myCounter;
        content:counter(myCounter) ".";
        display: block;
        font-weight: 700;
        font-size: 44px;
        line-height: 64px;
        letter-spacing: 0.53px;
        color: #2E293C;
      }

    }
    & li:first-child{
      margin-top: 0px;
    }
    & img{
      margin-top: 90px;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      position: relative;
    }
    & span{
      width: auto;
      height: auto;
      padding-bottom: 0px;
    }
  }

`;

export const ListBox = styled.div`
  margin-left: -40px;
  margin-right: -40px;
  margin-top: -40px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
`;