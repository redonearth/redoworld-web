import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 2em;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Redo World</h1>
    </Container>
  );
};

export default Home;
