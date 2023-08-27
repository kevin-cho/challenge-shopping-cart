// import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Select from 'react-select'
import Product from '../components/Product';
import { addItem } from '../store/cart/slice';
import { useDispatch, useSelector } from 'react-redux';
import { getCartIsOpen } from '../store/cart/selectors';

const Container = styled.div`
  padding: 20px;
  padding-top: 60px;
  max-width: 1000px;
  margin: auto;
  display: ${props => props.$isCartOpen ? 'none' : 'block'};
`;

const Products = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 630px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledSelect = styled(Select)`
  margin-bottom: 20px;
`;

const products = [
  {
    "id": 1,
    "name": "Laptop",
    "price": 999.99,
    "category": "Electronics"
  },
  {
    "id": 2,
    "name": "Coffee Maker",
    "price": 49.99,
    "category": "Home Appliances"
  },
  {
    "id": 3,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
  {
    "id": 4,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
  {
    "id": 5,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
  {
    "id": 6,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
  {
    "id": 7,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
  {
    "id": 8,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
  {
    "id": 9,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
  {
    "id": 10,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
  {
    "id": 11,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
  {
    "id": 12,
    "name": "Book: The Great Gatsby",
    "price": 9.99,
    "category": "Books"
  },
]

const Home = () => {
  const [options, setOptions] = useState([])
  const [selectedProducts, setSelectedProducts] = useState(products);
  const isCartOpen = useSelector(getCartIsOpen);
  const dispatch = useDispatch();

  const handleSelect = selected => {
    // Filter the displayed products when a category is selected
    if (selected.length === 0) {
      setSelectedProducts(products);
    } else {
      const selectedCategories = selected.map(option => option.value)
      setSelectedProducts(products.filter(product => selectedCategories.includes(product.category)))
    }
  }

  const handleAdd = product => {
    dispatch(addItem(product));
  }

  useEffect(() => {
    // Get all unique product categories and format them for Select component
    const uniqueCategories = new Set(products.map(product => product.category))
    setOptions([...uniqueCategories].map(cat => ({ value: cat, label: cat })));
  }, [])

  // useEffect(() => {
  //   const getProducts = async () =>  {
  //     const response = await axios.get('/api/products');
  //     console.log(response);
  //     setTest(response.data);
  //   }
  //   getProducts();
  // }, [])

  return (
    <Container $isCartOpen={isCartOpen}>
      <StyledSelect options={options} isMulti onChange={handleSelect} autoFocus />
      <Products>
        {selectedProducts.map(product => (
          <Product {...product} key={product.id} onAdd={() => handleAdd(product)} />
        ))}
      </Products>
    </Container>
  );
}

export default Home;
