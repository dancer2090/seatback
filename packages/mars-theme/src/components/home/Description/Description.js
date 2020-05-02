import React, { useEffect } from 'react';
import { styled } from "frontity";
import ImageSeatbackPlus from '../../../img/seatback_plus@2x.png';
import ImageSeatbackChair from '../../../img/seat-element-chair.png';
import ImageSeatbackProcessor from '../../../img/seat-element-processor.png';
import ImageSeatbackSeat from '../../../img/seat-element-seat.png';
import ImageSeatbackWatch from '../../../img/seat-element-watch.png';
import Button from '../../Button';
import Link from "../../link";

const Container = styled.div`
  background: #F5F6FA 0% 0% no-repeat padding-box;
  padding-top: 205px;
  padding-bottom: 205px;
  padding-right: 150px;
  padding-left: ${props => props.alignImage === 'left' ? '50%' : '150px'};
  position: relative;
  width: 100%;

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
  position: relative;
  z-index: 2;
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
  position: relative;
  z-index: 2;
`;

const DescriptionParagraph = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #A09D9D;
  max-width: 817px;
  margin: 0;
  position: relative;
  z-index: 2;
`;


const Action = styled.div`
  margin-top: 45px;
  position: relative;
  z-index: 2;
`;


const Image = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  right: ${props => props.alignImage === 'left' ? 'auto' : '150px'};
  top: 0;
  left: ${props => props.alignImage === 'left' ? '150px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignImage === 'left' ? 'flex-start' : 'flex-end'};
`;


const data = [
  {
    title: 'Seatback+',
    subtitle: 'An integrated wellness platform.',
    description: 'That uses AI and Machine Learning to help improve health outcomes. Seatback+ is home to Wellness on Demand, a onestop shop for personalized recommendations, advice for healthy workspace calibration, posture enhancement tips, wellness content, on-demand health classes and real-time personal training.',
    image: ImageSeatbackPlus,
    alignImage: 'right',
    link: '/',
    linkText: 'Learn more',
  },
  {
    title: 'Office Chair',
    subtitle: 'A new frontier for any seating device.',
    description: 'Seatback embeds proprietary technology directly into office chairs. Our revolutionary seating technology guides users through more dynamic workdays and helps them achieve their best posture.',
    image: ImageSeatbackChair,
    alignImage: 'left',
    link: '/',
    linkText: 'Learn more',
  },
  {
    title: 'Portable Device',
    subtitle: 'A flexible solution for any office environment.',
    description: 'Our proprietary technology can also be embedded directly into a portable device that can be easily shifted to any workstation.',
    image: ImageSeatbackSeat,
    alignImage: 'right',
    link: '/abouts',
    linkText: 'Learn more',
  },
  {
    title: 'Smart Watch',
    subtitle: 'Real-time feedback, measurable results.',
    description: 'Seatback integrates with compatible smart watches to give personalized recommendations and keep users on track to achieve their daily health goals.',
    image: ImageSeatbackWatch,
    alignImage: 'left',
    link: '/abouts',
    linkText: 'Learn more',
  },
];
const Description = () => {

  return (
    <>
      {data.map(d => {
        return (
          <Container alignImage={d.alignImage}>
            <Title>
              {d.title}
            </Title>
            <Image alignImage={d.alignImage}>
              <img src={d.image} width={660} alt="image" />
            </Image>
            <SubTitle>
              {d.subtitle}
            </SubTitle>
            <DescriptionParagraph>
              {d.description}
            </DescriptionParagraph>
            <Action>
              {d.link && d.link !== '' && (
                <Link link={d.link}>
                  <Button>{d.linkText}</Button>
                </Link>
              )}
            </Action>
          </Container>
        );
      })}
    </>
  );
}

export default Description;