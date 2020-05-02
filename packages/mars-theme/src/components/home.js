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
  width: 800px;
  margin: 0;
  padding: 24px;
`;
