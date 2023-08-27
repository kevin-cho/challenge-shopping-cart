import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCartIsOpen, getCartItems, getCartTotal } from '../store/cart/selectors';
import { toggleOpen } from '../store/cart/slice';

const Container = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const CloseButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  padding: 8px 20px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
`;

const Cart = () => {
  const items = useSelector(getCartItems);
  const cartTotal = useSelector(getCartTotal);
  const isOpen = useSelector(getCartIsOpen);
  const dispatch = useDispatch();

  return (
    <Container $isOpen={isOpen}>
      <CloseButton onClick={() => dispatch(toggleOpen())}>ⓧ</CloseButton>
      {cartTotal}
    </Container>
  );
}

export default Cart;
