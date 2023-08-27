import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chip from './Chip';

const Container = styled.div`
  border: 1px solid;
  border-radius: 8px;
  padding: 20px;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
`;

const Product = ({ name, price, category }) => (
  <Container>
    <Label>
      <span>{name}</span>
      <span>{price}</span>
    </Label>
    <Chip>{category}</Chip>
  </Container>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;
