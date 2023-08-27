import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chip from './Chip';

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

const AddButton = styled.button`
  cursor: pointer;
  font-size: 18px;
`;

const Product = ({ name, price, category, onAdd }) => (
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
  </Container>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string,
  onAdd: PropTypes.func,
};

export default Product;
