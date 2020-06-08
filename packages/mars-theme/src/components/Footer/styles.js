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
} from '../../const/responsive';


export const GlobalContainer = styled.div`
  z-index: 100;
  padding-top: 225px;
  padding-bottom: 124px;
  overflow: hidden;
  position: relative;
  &:after{
    content: ' ';
    background-color: ${(props) => props.circleColor};
    width: 3006px;
    height: 2472px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: calc(50% - 1800px);
    z-index: -1;
  }
  &:before{
    content: ' ';
    background: ${(props) => props.bgColor};
    width: 100%;
    height: 1830px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    padding-top: 150px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    padding-bottom: 50px;
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

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 250px;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 150px;
  }
`;
export const MenuColumnHeader = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  color: #2E293C;
`;
export const SubMenuContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
`;
export const SubMenuElement = styled.li`
  & a{
    display: block;
    margin-top: 20px;
    font-size: 20px;
    line-height: 34px;
    color: #A09D9D;
    transition: all 0.3s ease-in-out;
    &:hover{
      color: #52DE97;
    }
  }
`;
export const MenuColumn = styled.div`
  display: block;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    display: block;
    min-width: 250px;
    margin-top: 30px;
  }
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
  }
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Socials = styled.div`
  display: block;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    margin-top: 0;
    margin-left: 100px; 
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    margin-left: 0;
  }
`;
export const SocialsHeader = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #2E293C;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    text-align: center;
  }
`;
export const SocialsRow = styled.div`
  display: block;
  margin-left: -20px;
  margin-right: -20px;
  margin-top: 40px;
  & a{
    margin-left: 20px;
    margin-right: 20px;
    display: inline-block;
    & svg{
      width: 58px;
      height: 58px;
      transition: all 0.3s ease-in-out;
      .svgBg {
        transition: all 0.3s ease-in-out;
      }
      & path{
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        path{
          fill: #fff;
          &.svgBg{
            fill: #52DE97;
            stroke: #52DE97;
          }
        }
      } 
    }
  }
`;
