import { styled } from 'frontity';
import {
  SIZE_LAPTOP,
  SIZE_MOBILE,
  SIZE_LAPTOP_SMALL,
} from '../../../const/responsive';
import LogoBig from '../../../img/logo_big.svg';

export const GlobalContainer = styled.div`
  margin-top: 200px;
  padding-bottom: 200px;
  position: relative;
  z-index: 0;
  &:after{
    content: ' ';
    background-color: #FFFFFF;
    width: 3006px;
    height: 2472px;
    border-radius: 50%;
    position: absolute;
    top: 230px;
    left: calc(50% - 1503px);
    z-index: -1;

    @media (max-width: ${600}px) {
      top: 130px;
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
    background: #F5F6FA;
    width: 100%;
    height: 1830px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    margin-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    margin-top: 50px;
    padding-bottom: 50px;
  }
`;


export const ImageContainer = styled.div`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  &:after{
    content: ' ';
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: #2e293c;
    opacity: 0.86;
    z-index: 1;
  }
  &:before{
    content: ' ';
    position: absolute;
    background: url(${LogoBig}) no-repeat 50% 50% / 100% auto;
    max-width: 540px;
    left: calc(50% - 270px);
    top: 0px;
    bottom: 0px;
    width: 100%;
    z-index: 2;

    @media (max-width: ${SIZE_LAPTOP}px) {
      max-width: 460px;
      left: calc(50% - 230px);
    }
    @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
      max-width: 400px;
      left: calc(50% - 200px);
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      max-width: 300px;
      left: calc(50% - 150px);
    }
    @media (max-width: 450px) {
      max-width: 200px;
      left: calc(50% - 100px);
    }
  }

  @media (max-width: ${SIZE_MOBILE}px) {
    height: 266px;
  }

`;

export const Image = styled.img`
  width: 100%;
  @media (max-width: 500px) {
    margin-left: -150px;
    width: calc(100% + 300px);
  }

`;

export const Title = styled.h2`
  font-size: 50px;
  line-height: 70px;
  font-weight: bold;
  color: #2E293C;
  text-align: center;
  @media (max-width: ${SIZE_LAPTOP}px) {
    font-size: 37px;
    line-height: 50px;
  }
  @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Content = styled.div`
  color: #2E293C;
  font-size: 22px;
  line-height: 40px;
  color: #2E293C;
  letter-spacing: 0.26px;
  @media (max-width: ${SIZE_LAPTOP}px) {
    font-size: 18px;
    line-height: 30px;
  }
  p{
    margin-top: 100px;
    @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
      margin-top: 50px;
      font-size: 16px;
      line-height: 28px;
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      margin-top: 30px;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1134px;

`;
