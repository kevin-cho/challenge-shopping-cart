import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chip from '../Chip';
import { useMemo } from 'react';

const Container = styled.div`
  border: 1px solid;
  border-radius: 8px;
  padding: 20px;

  > *:not(:last-child) {
    padding-bottom: 8px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Subtotal = styled(Flex)`
  color: gray;
  font-size: 14px;
`;

const AddButton = styled.button`
  cursor: pointer;
  font-size: 18px;
`;

const Product = ({
  name,
  price,
  category,
  onAdd,
  quantity,
}) => {
  const subtotal = useMemo(() =>
    Math.round(price * quantity * 100) / 100,
    [price, quantity]
  );

  return (
    <Container>
      <Flex>
        <span>{name}</span>
        <span>{price}</span>
      </Flex>
      {category && onAdd && (
        <Flex>
          <Chip>{category}</Chip>
          <AddButton onClick={onAdd}>+</AddButton>
        </Flex>
      )}
      {quantity && (
        <Subtotal>
          <span>(x{quantity})</span>
          <span>{subtotal}</span>
        </Subtotal>
      )}
    </Container>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string,
  onAdd: PropTypes.func,
  quantity: PropTypes.number,
};

export default Product;
