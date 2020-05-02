import React from 'react';
import { styled } from "frontity";
import ImageSeatbackPlus from '../../../img/seatback_plus@2x.png';
import Button from '../../Button';

const Container = styled.div`
  background: #F5F6FA 0% 0% no-repeat padding-box;
  padding-top: 105px;
  padding-bottom: 105px;
  position: relative;
`;

const Title = styled.h2`
  margin: 0;
  padding-bottom: 15px;
  text-align: left;
  font-size: 50px;
  line-height: 70px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
`;

const SubTitle = styled.h2`
  margin: 0;
  padding-top: 15px;
  text-align: left;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #2E293C;
  opacity: 1;
`;

const DescriptionParagraph = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #A09D9D;
  max-width: 817px;
  margin: 0;
`;


const Action = styled.div`
  margin-top: 45px;
`;


const Image = styled.div`
  position: absolute;
  right: 0;
  top: 150px;
`;


const Description = () => {
  return (
    <Container>
      <Title>
        Seatback+
      </Title>
      <Image>
        <img src={ImageSeatbackPlus} width={660} alt="image" />
      </Image>
      <SubTitle>
        An integrated wellness platform.
      </SubTitle>
      <DescriptionParagraph>
        That uses AI and Machine Learning to help improve health outcomes. Seatback+ is home to Wellness on Demand, a onestop shop for personalized recommendations, advice for healthy workspace calibration, posture enhancement tips, wellness content, on-demand health classes and real-time personal training.
      </DescriptionParagraph>
      <Action>
        <Button>Learn more</Button>
      </Action>
    </Container>
  );
}

export default Description;