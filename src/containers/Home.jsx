import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Product from '../components/Product';

const Container = styled.div`
  padding: 20px;
  padding-top: 60px;
  max-width: 1000px;
  margin: auto;
`;

const Products = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  /* grid-auto-rows: auto; */

  @media (min-width: 630px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
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
]

const Home = () => {
  const [test, setTest] = useState('hello')

  // useEffect(() => {
  //   const getProducts = async () =>  {
  //     const response = await axios.get('/api/products');
  //     console.log(response);
  //     setTest(response.data);
  //   }
  //   getProducts();
  // }, [])

  return (
    <Container>
      <Products>
        {products.map(product => <Product key={product.id} {...product} />)}
      </Products>
    </Container>
  );
}

export default Home;
