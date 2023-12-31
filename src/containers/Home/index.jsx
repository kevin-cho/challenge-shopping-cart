import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import axios from 'axios';
import styled from 'styled-components';
import Product from 'components/Product';
import ProductGrid from 'components/ProductGrid';
import { getCartIsOpen } from 'store/cart/selectors';
import { addItem } from 'store/cart/slice';
import { setProducts } from 'store/products/slice';
import { getProducts } from 'store/products/selectors';

const Container = styled.div`
  padding: 20px;
  padding-top: 60px;
  max-width: 1000px;
  margin: auto;
  display: ${props => props.$isCartOpen ? 'none' : 'block'};
`;

const StyledSelect = styled(Select)`
  margin-bottom: 40px;
  > div {
    border-color: black;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 20px;
`;

const Home = () => {
  const [options, setOptions] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [error, setError] = useState(null);
  const isCartOpen = useSelector(getCartIsOpen);
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  const handleSelect = useCallback(selected => {
    // Filter the displayed products when a category is selected
    if (selected.length === 0) {
      setSelectedProducts(products);
    } else {
      const selectedCategories = selected.map(option => option.value)
      setSelectedProducts(
        products.filter(product => selectedCategories.includes(product.category))
      )
    }
  }, [products]);

  const handleAdd = useCallback(product => {
    dispatch(addItem(product));
  }, [dispatch]);

  useEffect(() => {
    setSelectedProducts(products);

    // Get all unique product categories and format them for Select component
    const uniqueCategories = new Set(products.map(product => product.category))
    setOptions([...uniqueCategories].map(cat => ({ value: cat, label: cat })));
  }, [products])

  useEffect(() => {
    const getProducts = async () =>  {
      try {
        const res = await axios.get('/api/products');
        if (res.status === 200) {
          dispatch(setProducts(res.data));
        }
      } catch (err) {
        // Handle this based on how our API throws the error
        setError(err.message);
      }
    }
    getProducts();
  }, [dispatch])

  return (
    <Container $isCartOpen={isCartOpen}>
      <StyledSelect options={options} isMulti onChange={handleSelect} autoFocus />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ProductGrid>
        {selectedProducts.map(product => (
          <Product {...product} key={product.id} onAdd={() => handleAdd(product)} />
        ))}
      </ProductGrid>
    </Container>
  );
}

export default Home;
