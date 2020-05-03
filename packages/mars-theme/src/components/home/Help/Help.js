import React, { useEffect } from 'react';
import { styled, connect } from 'frontity';

const Container = styled.div`
  padding: 207px 150px;
  background: #FFFFFF;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 50px;
  line-height: 70px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #2E293C;
  margin: 0;

  span {
    color: #52DE97;
  } 
`;

const Blocks = styled.div`
  padding-top: 180px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const Block = styled.div`
  padding-left: 13px;
  padding-right: 13px;
  width: 25%;
`;

const BlockContent = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 4px 4px 8px #00000014;
  border-radius: 10px;
  opacity: 1;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Icon = styled.div`
  width: 110px;
  height: 110px;
  background: #52DE97 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -55px;
  left: calc(50% - 55px);
`;

const Description = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: 38px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #A09D9D;
  opacity: 1;
  padding: 95px 10px 45px 10px;
  width: 100%;
  height: 100%;
`;


const Help = ({state}) => {

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const bo = post.acf.business_outcomes;

  return (
    <Container>
      <Title>
        Seatback can help 
        <br />
        <span>improve</span> business outcomes:
      </Title>
      <Blocks>
        {bo.length > 0 && bo.map((item, key) => {
          return (
            <Block key={key}>
              <BlockContent>
                <Icon>
                  <img src={item.image.url} alt="image" />
                </Icon>
                <Description>
                  {item.text}
                </Description>
              </BlockContent>
            </Block>
          );
        })}
      </Blocks>
    </Container>
  );
}

export default connect(Help);