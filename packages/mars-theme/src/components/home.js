import React from "react";
import { connect, styled } from "frontity";
import Banner from './home/Banner';

const Home = () => {

  return (
    <Container>
      <Banner />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;
