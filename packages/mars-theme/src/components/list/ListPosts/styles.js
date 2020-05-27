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
  SIZE_MOBILE,
} from '../../../const/responsive';

export const GlobalContainer = styled.div`
  padding-top: 269px;
  overflow: hidden;
  position: relative;
  &:after {
    content: " ";
    background-color: #ffffff;
    width: 3006px;
    height: 2472px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: calc(50% - 1150px);
    z-index: -1;
  }
  &:before {
    content: " ";
    background: #f5f6fa;
    width: 100%;
    height: 1830px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
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

export const ListBox = styled.div`
  margin-left: -40px;
  margin-right: -40px;
  margin-top: -40px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
