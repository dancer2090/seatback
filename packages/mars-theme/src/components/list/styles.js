import { styled } from 'frontity';
import {
  SIZE_MOBILE,
  PADDING_MOBILE,
} from '../../const/responsive';

export const Action = styled.div`
  padding-top: 66px;
  padding-bottom: 105px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${SIZE_MOBILE}px) {
    padding-top: 20px;
    padding-bottom: 80px;
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
  }
`;

export const Action2 = styled.div`
  padding-top: 66px;
  padding-bottom: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
