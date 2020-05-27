import React from 'react';
import Button from '../Button';
import Link from '../link';

import {
  GlobalContainer,
  Container,
  Slogan,
  Discription,
} from './styles';

const Page404 = ({ title, description }) => (
  <GlobalContainer>
    <Container>
      <Slogan>{title}</Slogan>
      <Discription>{description}</Discription>
      <Link link="/">
        <Button>Go to the main page</Button>
      </Link>
    </Container>
  </GlobalContainer>
);
export default Page404;
