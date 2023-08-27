import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCartQuantity } from '../store/cart/selectors';
import { toggleOpen } from '../store/cart/slice';

const Container = styled.nav`
  height: 50px;
  border-bottom: 1px solid;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
`;

const CartButton = styled.button`
  border: 0;
  background: none;
  font-family: inherit;
  cursor: pointer;
  padding: 0;
`;

const Navbar = () => {
  const cartQuantity = useSelector(getCartQuantity);
  const dispatch = useDispatch();

  return (
    <Container>
      <CartButton onClick={() => dispatch(toggleOpen())}>({cartQuantity}) cart</CartButton>
    </Container>
  )
}

export default Navbar;
