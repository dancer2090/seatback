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
  SIZE_MOBILE,
} from '../../../const/responsive';

export const Contaiter = styled.div`
  background-color: #F5F6FA;
  position: absolute;
  left: 0;
  padding-left: ${PADDING_DESCTOP_LARGE}px;
  padding-right: ${PADDING_DESCTOP_LARGE}px;
  padding-top: 134px;
  padding-bottom: 134px;
  width: 100%;
  display: ${props => props.show ? 'block' : 'none'};

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
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
  }
`;

export const Blocks = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: -50px;
  margin-left: -50px;
`;

export const Block = styled.div`
  width: 25%;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
  &:before {
    content: " ";
    width: 1px;
    height: calc(100% - 98px);
    background-color: #c8c8c8bd;
    position: absolute;
    right: 0;
    top: 0;
  }

  :nth-child(4n) {
    &:before {
      display: none;
    }
  }
  :last-child {
    &:before {
      display: none;
    }
  }
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ItemBox = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;

export const Picture = styled.div`
  width: 100%;
  height: 285px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${props => props.src ? props.src : 'https://i.picsum.photos/id/866/1200/1000.jpg'});
  margin-top: 40px;
  border-radius: 10px;
  position: absolute;
  bottom: 98px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 24px;
  text-align: left;
  font-weight: 500;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
  max-width: 320px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #52DE97;
  }
`;
export const Description = styled.div`
  padding-top: 20px;
  font-size: 20px;
  line-height: 34px;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  max-width: 320px;
  padding-bottom: 423px;
`;

export const Action = styled.div`
  padding-top: 40px;
  position: absolute;
  bottom: 0;
  width: 100%;

  button {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`;

export const CloseBlock = styled.button`
  width: 106px;
  height: 48px;
  background-color: #2E293C;
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  top: 0;
  left: calc(50% - 53px);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: 0;
  z-index: 2;

  svg {
    transform: rotate(180deg);
    width: 17px;
    path {
      fill: #ffffff;
    }
  }

  &:hover {
    background-color: #52DE97;
  }
`;
