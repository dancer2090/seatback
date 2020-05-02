import React from "react";
import { connect, styled } from "frontity";
import Banner from './home/Banner';
import Description from './home/Description';

const Home = () => {

  return (
    <Container>
      <Banner />
      <Description />

    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 1920px;
  margin: 0;
  padding: 24px 150px;
  background: #F5F6FA 0% 0% no-repeat padding-box;
`;
