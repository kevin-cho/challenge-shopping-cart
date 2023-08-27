import styled from 'styled-components';
import Cart from './containers/Cart';
import Home from './containers/Home';
import Navbar from './containers/Navbar';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Cart />
      <Home />
    </Container>
  );
}

export default App;
