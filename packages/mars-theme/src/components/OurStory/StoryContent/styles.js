import { styled } from 'frontity';
import { SIZE_LAPTOP } from '../../../const/responsive';

export const ImagesContainer = styled.div`
  margin-left: -30px;
  margin-right: -30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: calc(50% - 60px);
  margin-left: 30px;
  margin-right: 30px;
`;

export const Content = styled.div`
  color: #2E293C;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: 0.26px;
  background-color: #F5F6FA;
  @media (max-width: ${SIZE_LAPTOP}px) {
    font-size: 18px;
    line-height: 30px;
  }
  p{
    margin-top: 100px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1134px;
`;

export const ContentBox = styled.div`
  background-color: transparent;
  position: relative;
  z-index: 0;
`;
