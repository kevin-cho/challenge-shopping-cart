import styled from 'styled-components';
import Home from './containers/Home';
import Navbar from './containers/Navbar';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
