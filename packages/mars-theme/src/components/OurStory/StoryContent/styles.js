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
  color: #2E293C;
  letter-spacing: 0.26px;
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