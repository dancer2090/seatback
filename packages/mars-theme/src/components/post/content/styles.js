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

  @media (max-width: ${SIZE_MOBILE}px) {
    margin-top: 30px;
  }
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
    @media (max-width: ${SIZE_MOBILE}px) {
      width: 60px;
      height: 60px;
    }
  }
`;
export const HeaderAuthorName = styled.div `
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0px;
  color: #2E293C;
  text-align: left;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const HeaderAuthorDate = styled.time `
  display: block;
  text-align: left;
  margin-top: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.6px;
  color: #A09D9D;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const HeaderReaderTime = styled.div `
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #2E293C;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 14px;
    line-height: 20px;
  }
`;


export const LinkShareContainer = styled.div `
  position: absolute;
  right: 0px;
  top: 0px;

  @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
    position: static;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
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

  @media(max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    transform: scale(0.95);
  }
  @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    transform: scale(0.9);
  }
  @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
    transform: scale(0.85);
  }
  @media(max-width: ${SIZE_LAPTOP}px) {
    transform: scale(0.8);
  }
  @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
    transform: scale(0.75);    
  }
  @media(max-width: ${SIZE_MOBILE}px) {
    transform: scale(0.7);
  }
`;
export const PostContentBox = styled.div`
  position: relative;
  min-height: 150px;
`;
export const PostContentText = styled.div `
  max-width: 1074px;
  margin: 0 auto;
  position: relative;
  font-size: 24px;
  line-height: 48px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: #707070;
  text-align: left;

  @media(max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    font-size: 24px;
    line-height: 48px;
    padding-right: 70px;
  }
  @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: 22px;
    line-height: 48px;
  }
  @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
    font-size: 20px;
    line-height: 44px;
  }
  @media(max-width: ${SIZE_LAPTOP}px) {
    font-size: 18px;
    line-height: 36px;
  }
  @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 16px;
    line-height: 32px;
    padding-right: 0;
  }
  @media(max-width: ${SIZE_MOBILE}px) {
    font-size: 14px;
    line-height: 28px;
  }

  a {
    color: #52DE97;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #2E293C;
    }
  }

  & p{
    margin-top: ${POST_MARGIN_LARGE - 15}px;
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 24px;
      line-height: 48px;
    }
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 22px;
      line-height: 48px;
      margin-top: ${POST_MARGIN_MEDIUM_1 - 15}px;
    }
    @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
      font-size: 20px;
      line-height: 44px;
    }
    @media(max-width: ${SIZE_LAPTOP}px) {
      font-size: 18px;
      line-height: 36px;
    }
    @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
      font-size: 16px;
      line-height: 32px;
    }
    @media(max-width: ${SIZE_MOBILE}px) {
      font-size: 14px;
      line-height: 28px;
      margin-top: ${POST_MARGIN_MOBILE - 15}px;
    }
  }
  & h1{
    margin-top: ${POST_MARGIN_LARGE}px;
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 50px;
      line-height: 60px;
    }
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 48px;
      line-height: 56px;
      margin-top: ${POST_MARGIN_MEDIUM_1}px;
    }
    @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
      font-size: 44px;
      line-height: 52px;
    }
    @media(max-width: ${SIZE_LAPTOP}px) {
      font-size: 40px;
      line-height: 48px;
    }
    @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
      font-size: 36px;
      line-height: 44px;
    }
    @media(max-width: ${SIZE_MOBILE}px) {
      font-size: 32px;
      line-height: 40px;
      margin-top: ${POST_MARGIN_MOBILE}px;
    }

  }
  & h2{
    margin-top: ${POST_MARGIN_LARGE}px;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    color: #2E293C;
    letter-spacing: 0.53px;

    @media(max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 40px;
      line-height: 60px;
    }
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 36px;
      line-height: 54px;
      margin-top: ${POST_MARGIN_MEDIUM_1}px;
    }
    @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
      font-size: 34px;
      line-height: 50px;
    }
    @media(max-width: ${SIZE_LAPTOP}px) {
      font-size: 32px;
      line-height: 48px;
    }
    @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
      font-size: 28px;
      line-height: 42px;
    }
    @media(max-width: ${SIZE_MOBILE}px) {
      font-size: 24px;
      line-height: 36px;
      margin-top: ${POST_MARGIN_MOBILE}px;
    }
  }
  & h3{
    margin-top: ${POST_MARGIN_LARGE}px;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.53px;
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 36px;
      line-height: 52px;
    }
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 32px;
      line-height: 48px;
      margin-top: ${POST_MARGIN_MEDIUM_1}px;
    }
    @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
      font-size: 28px;
      line-height: 44px;
    }
    @media(max-width: ${SIZE_LAPTOP}px) {
      font-size: 24px;
      line-height: 40px;
    }
    @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
      font-size: 20px;
      line-height: 36px;
    }
    @media(max-width: ${SIZE_MOBILE}px) {
      font-size: 18px;
      line-height: 32px;
      margin-top: ${POST_MARGIN_MOBILE}px;
    }
  }
  & h4{
    margin-top: ${POST_MARGIN_LARGE}px;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: 0.53px;
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 30px;
      line-height: 42px;
    }
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 28px;
      line-height: 40px;
      margin-top: ${POST_MARGIN_MEDIUM_1}px;
    }
    @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
      font-size: 24px;
      line-height: 36px;
    }
    @media(max-width: ${SIZE_LAPTOP}px) {
      font-size: 20px;
      line-height: 32px;
    }
    @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
      font-size: 18px;
      line-height: 36px;
    }
    @media(max-width: ${SIZE_MOBILE}px) {
      font-size: 16px;
      line-height: 32px;
      margin-top: ${POST_MARGIN_MOBILE}px;
    }
  }
  & h5{
    margin-top: ${POST_MARGIN_LARGE}px;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.53px;
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 26px;
      line-height: 38px;
    }
    @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 24px;
      line-height: 36px;
      margin-top: ${POST_MARGIN_MEDIUM_1}px;
    }
    @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
      font-size: 20px;
      line-height: 32px;
    }
    @media(max-width: ${SIZE_LAPTOP}px) {
      font-size: 18px;
      line-height: 28px;
    }
    @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
      font-size: 16px;
      line-height: 24px;
    }
    @media(max-width: ${SIZE_MOBILE}px) {
      font-size: 14px;
      line-height: 20px;
      margin-top: ${POST_MARGIN_MOBILE}px;
    }
  }
  & ul{
    padding-left: 20px;
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

        @media(max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
          font-size: 40px;
          line-height: 60px;
        }
        @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
          font-size: 36px;
          line-height: 54px;
        }
        @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
          font-size: 34px;
          line-height: 50px;
        }
        @media(max-width: ${SIZE_LAPTOP}px) {
          font-size: 32px;
          line-height: 48px;
        }
        @media(max-width: ${SIZE_LAPTOP_SMALL}px) {
          font-size: 28px;
          line-height: 42px;
        }
        @media(max-width: ${SIZE_MOBILE}px) {
          font-size: 24px;
          line-height: 36px;
        }
      }
      @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
        margin-top: ${POST_MARGIN_MEDIUM_1}px;
      }
      @media(max-width: ${SIZE_MOBILE}px) {
        margin-top: ${POST_MARGIN_MOBILE}px;
      }

    }
    & li:first-of-type{
      margin-top: 0px;
    }
    & img{
      margin-top: 90px;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      position: relative;
      @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
        margin-top: ${POST_MARGIN_MEDIUM_1}px;
      }
      @media(max-width: ${SIZE_MOBILE}px) {
        margin-top: ${POST_MARGIN_MOBILE}px;
      }
    }
    & span{
      width: auto;
      height: auto;
      padding-bottom: 0px;
    }

    @media(max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      margin-top: ${POST_MARGIN_MEDIUM_1}px;
    }
    @media(max-width: ${SIZE_MOBILE}px) {
      margin-top: ${POST_MARGIN_MOBILE}px;
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

  padding-top: 80px;
`;


export const AdditionalBlock = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;

  @media(max-width: ${SIZE_DESCTOP_SMALL}px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media(max-width: ${SIZE_MOBILE}px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  > h2 {
    text-align: left;
    font-size: 24px;
    line-height: 40px;
    font-weight: 600;
    letter-spacing: 0px;
    color: #2E293C;
    opacity: 1;

    margin: 0;
    padding-bottom: 16px;
    border-bottom: 2px solid #CCCCCC;
  }


`;