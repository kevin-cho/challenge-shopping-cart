import styled from 'styled-components';
import Home from './containers/Home';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
