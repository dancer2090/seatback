import { styled, css } from 'frontity';
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
} from '../../const/responsive';



export const GlobalContainer = styled.div `
  padding-bottom: 133px;
  overflow: hidden;
  position: relative;
  &:after{
    content: ' ';
    background-color: ${props => props.circleColor};
    width: 3006px;
    height: 2472px;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 1503px);
    z-index: -1;
  }
  &:before{
    content: ' ';
    background: ${props => props.bgColor};
    width: 100%;
    height: 1830px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: -1;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    padding-bottom: 50px;
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

export const MenuContainer = styled.nav `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const MenuColumnHeader = styled.div `
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  color: #2E293C;
`;
export const SubMenuContainer = styled.ul `
  padding-left: 0px;
  list-style: none;
`;
export const SubMenuElement = styled.li `
  & a{
    display: block;
    margin-top: 20px;
    font-size: 20px;
    line-height: 34px;
    color: #A09D9D;
  }
`;
export const MenuColumn = styled.div `
  display: block;
`;