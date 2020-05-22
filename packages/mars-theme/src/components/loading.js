import React from "react";
import { styled } from "frontity";
import Loader from "react-spinners/ClipLoader";

const Loading = () => (
  <Container>
    <Loader
      color="#52DE97"
      radius={0}
      margin="3px"
      width={4}
      height={24}
    />
  </Container>
);

export default Loading;

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  & > * {
    margin-top: 24px;
  }
  transform: scale(1.5);
`;
