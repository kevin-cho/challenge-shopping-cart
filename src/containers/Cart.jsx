import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCartIsOpen, getCartItems, getCartTotal } from '../store/cart/selectors';
import { toggleOpen } from '../store/cart/slice';
import Product from '../components/Product';
import ProductGrid from '../components/ProductGrid';

const Container = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px;
  padding-top: 50px;
  box-sizing: border-box;
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

const Total = styled.div`
  text-align: right;
  font-size: 24px;
  margin-top: 20px;
  position: sticky;
  bottom: 0;
  background: white;
  border-top: 1px solid;
  padding: 12px 0;
`;

const Cart = () => {
  const items = useSelector(getCartItems);
  const cartTotal = useSelector(getCartTotal);
  const isOpen = useSelector(getCartIsOpen);
  const dispatch = useDispatch();


  console.log({items})
  return (
    <Container $isOpen={isOpen}>
      <CloseButton onClick={() => dispatch(toggleOpen())}>ⓧ</CloseButton>
      <ProductGrid>
        {items.map(item => <Product {...item} key={item.id} />)}
      </ProductGrid>
      <Total>Total: {cartTotal}</Total>
    </Container>
  );
}

export default Cart;
