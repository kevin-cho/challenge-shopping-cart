import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Cart from 'containers/Cart';
import Home from 'containers/Home';
import Navbar from 'containers/Navbar';
import { getCartIsOpen } from 'store/cart/selectors';

const Container = styled.div`
  text-align: center;
`;

function App() {
  const isCartOpen = useSelector(getCartIsOpen)

  return (
    <Container>
      <Navbar />
      {isCartOpen && <Cart />}
      <Home />
    </Container>
  );
}

export default App;
