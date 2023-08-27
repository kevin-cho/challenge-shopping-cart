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
`;

const Product = ({ name, price, category }) => (
  <Container>
    <Flex>
      <span>{name}</span>
      <span>{price}</span>
    </Flex>
    <Flex>
      <Chip>{category}</Chip>
      <AddButton>+</AddButton>
    </Flex>
  </Container>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;
