import { styled } from "frontity";
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
} from "../../const/responsive";

export const GlobalContainer = styled.div`
  padding-top: 185px;
  overflow: hidden;
  position: relative;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    padding-top: 139px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-top: 91px;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-right: 150px;  
  padding-left: 150px;  
  padding-bottom: 225px;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
    margin-bottom: 169px;
  }

  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    margin-bottom: 50px;
  }

  button {
    margin: 0 auto;
  }
`;

export const Slogan = styled.h1`
  text-align: center;
  line-height: ${HEADER_LINE_HEIGHT_DESCTOP_LARGE}px;
  opacity: 1;
  font-size: ${HEADER_FONT_SIZE_DESCTOP_LARGE}px;
  font-weight: 700;
  margin: 0;
  white-space: pre-wrap;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${HEADER_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: ${HEADER_FONT_SIZE_MOBILE}px;
    line-height: ${HEADER_LINE_HEIGHT_MOBILE}px;
  }
`;

export const Discription = styled.p`
  font-size: ${TEXT_FONT_SIZE_DESCTOP_LARGE}px;
  line-height: ${TEXT_LINE_HEIGHT_DESCTOP_LARGE}px;
  color: #a09d9d;
  position: relative;
  z-index: 2;
  margin-bottom: 50px;
  margin-right:  auto;
  margin-left:  auto;
  max-width: 700px;
  text-align: center;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    margin-bottom: 35px;
  }
`;
