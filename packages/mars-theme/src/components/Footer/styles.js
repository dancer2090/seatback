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
  SIZE_LAPTOP_SMALL,
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

    /* @media (max-width: ${SIZE_MOBILE}px) {
      left: calc(50% - 1500px);
    } */

    @media (max-width: ${600}px) {
      width: 2506px;
      left: calc(50% - 1250px);
    }

    @media (max-width: ${450}px) {
      width: 1606px;
      left: calc(50% - 800px);
    }

    
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
    padding-top: 30px;
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
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-bottom: 80px;
  }
`;
export const MenuColumnHeader = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  color: #2E293C;

  @media (max-width: ${SIZE_LAPTOP}px) {
    font-size: 22px;
    line-height: 22px;
  }
  @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 20px;
    line-height: 20px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 12px;
    line-height: 42px;
  }
`;
export const SubMenuContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  @media (max-width: ${SIZE_MOBILE}px) {
    margin: 0;
  }
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

    @media (max-width: ${SIZE_LAPTOP}px) {
      font-size: 18px;
      line-height: 30px;
    }
    @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
      font-size: 16px;
      line-height: 26px;
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      font-size: 12px;
      line-height: 42px;
      margin-top: 0;
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
  @media (max-width: ${SIZE_MOBILE}px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
  }
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    /* flex-wrap: wrap; */
    /* justify-content: center; */
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
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
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-top: 40px;
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
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
export const SocialsRow = styled.div`
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
  margin-top: 40px;
  & a{
    margin-left: 20px;
    margin-right: 20px;
    display: inline-block;
    @media (max-width: ${SIZE_MOBILE}px) {
      margin-left: 10px;
      margin-right: 10px;
    }

    & svg{
      width: 58px;
      height: 58px;

      @media (max-width: ${SIZE_MOBILE}px) {
        width: 47px;
        height: 47px;
      }

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
  @media (max-width: ${SIZE_MOBILE}px) {
    margin-top: 20px;
  }
`;
