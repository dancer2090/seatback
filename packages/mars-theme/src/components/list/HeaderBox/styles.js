import { styled } from 'frontity';
import  {
  PADDING_DESCTOP_LARGE,
  PADDING_DESCTOP_MEDIUM_2,
  PADDING_DESCTOP_MEDIUM_1,
  PADDING_DESCTOP_SMALL,
  PADDING_MOBILE,
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  SIZE_LAPTOP,
  SIZE_LAPTOP_SMALL,
  SIZE_MOBILE,
} from '../../../const/responsive';
import RightArrow from '../../../img/right_arrow_2.svg';
import RightArrowGreen from '../../../img/right_arrow_green_2.svg';
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
  padding-top: ${props => props.type_header === 'With lines' ? '300px' : '162px'};
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
  ${props => props.type_header === 'With lines' && `
    &:before{
      content:' ';
      width: 322px;
      height: 211px;
      background: url(${LinesLeft}) no-repeat 50% 50% / 100% auto;
      position: absolute;
      bottom: 95%;
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
      bottom: 95%;
      right: 0px;
      @media (max-width: ${SIZE_LAPTOP}px) {
        display: none;
      }
    }
  `}

  h1 {
    width: 100%;
    text-align: left;
    font-size: 50px;
    line-height: ${props => props.mode === 'dark' ? '78' : '70'}px;
    font-weight: bold;
    letter-spacing: 0px;
    color: ${props => props.mode === 'dark' ? '#FFFFFF' : '#2E293C'};
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

export const Scroll = styled.div`
  display: inline-block;
  padding-top: 45px;

  button {
    transform: rotate(90deg);
    padding: 0;
    color: transparent;
    border: none;
    outline: none;
    background-color: rgb(82, 222, 151, 0);
    border: 1px solid #52DE97;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    transition: all 0.3 ease-in-out;
    color: #2E293C !important;
    z-index: 1;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out; 
    margin-right: 15px;
    &:after {
      content: url(${props => props.mode === 'dark' ? RightArrowGreen : RightArrow});
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    } 
    
    &:hover {
      background-color: #52DE97;
      &:after {
        content: url(${RightArrowGreen});
      }
    }


    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      transform: scale(0.95) rotate(90deg);
    }
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    display: none;
  }
`;

export const BannerArticlesBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    justify-content: center;
  }
`;

export const BannerArticlesContainer = styled.div`
  width: 770px;
  height: 507px;
  border-radius: 14px 14px 0px 0px;
  opacity: 1;
  background-image: url(${props => props.imgSrc ? props.imgSrc : 'https://i.picsum.photos/id/866/1200/1000.jpg'});
  background-repeat: no-repeat;
  background-size: ${props => props.bg_size};
  background-position: center center;
  position: relative;
  border-radius: 14px;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    width: 600px;
    height:400px;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    width: 500px;
    height: 350px;
  }

  @media (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    font-size: 32px;
    line-height: 42px;
    max-width: 770px;
    height: 507px;
  }
  @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 407px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    height: 350px;
  }
`;

export const BannerArticlesDescription = styled.div`
  background: #2E293C 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 8px #00000014;
  border-radius: 0px 0px 14px 14px;
  opacity: 1;
  height: 123px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 30px;

  @media (max-width: ${SIZE_MOBILE}px) {
    padding: 20px;
    height: auto;
  }

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  h3 {
    margin: 0;
    font-size: 24px;
    line-height: 29px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    max-width: 80%;
    & a{
      position: relative;
      width: auto;
      height: auto;
      transition: all 0.3s ease-in-out;
      &:hover{
        color: #52DE97;
      }
    }

    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 22px;
      line-height: 26px;
    }
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
  p {
    margin: 0;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding-top: 12px;
    max-width: 80%;
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 17px;
      line-height: 22px;
    }
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 16px;
      line-height: 20px;
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  a {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 58px;
    height: 58px;
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      transform: scale(0.95);
    }
  }

  button {
    position: relative;
    right: 0;
    bottom: 0;
    padding: 0;
    color: transparent;
    border: none;
    outline: none;
    background-color: rgb(82, 222, 151, 0);
    border: 1px solid #52DE97;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    transition: all 0.3 ease-in-out;
    color: #2E293C !important;
    z-index: 1;
    cursor: pointer;
    &:after {
      content: url(${RightArrowGreen});
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    } 
    
    &:hover {
      background-color: #52DE97;
      &:after {
        content: url(${RightArrow});
      }
    }    
  }
`;

export const New = styled.div`
  content: "NEW";
  width: 126px;
  height: 51px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 0.65;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
  padding: 0;
  position: absolute;
  top: 25px;
  left: 25px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    font-size: 20px;
    line-height: 32px;
    width: 116px;
    height: 46px;
  }
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: 18px;
    line-height: 28px;
    width: 110px;
    height: 45px;
  }
`;

export const Article = styled.div`
  width: 100%;
  text-align: left;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #52DE97;
  opacity: 1;
  margin: 0;
  padding-bottom: 10px;
`;

export const GlobalContainer = styled.div `
  padding-bottom: ${props => props.type_header === 'With lines' ? '300px' : '185px'};
  overflow: hidden;
  position: relative;
  &:after{
    content: ' ';
    background-color: ${props => props.mode === 'dark' ? '#2E293C' : '#FFFFFF'};
    width: 3006px;
    height: 2472px;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    left: ${props => props.type_header === 'With lines' ? 'calc(50% - 1503px)' : 'calc(50% - 1870px)'};
    z-index: -1;
  }
  &:before{
    content: ' ';
    background: ${props => props.mode === 'dark' ? '#FFFFFF' : '#F5F6FA'};
    width: 100%;
    height: 1830px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: -1;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    padding-bottom: ${props => props.type_header === 'With lines' ? '50px' : '50px'};
  }
  ${props => props.type_header === 'With lines' && `
    ${BannerArticlesBox}{
      display:none;
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
    ${HeaderFooter}{
      justify-content: center;
      & button{
        margin-top: 45px;
      }
    }
    ${Scroll}{
      display: none;
    }
  `}
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

export const ClickBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  cursor: pointer;
`;