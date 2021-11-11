import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #d9d9d9;
`;

const Products = ({ cate, filters, sort }) => {
  //console.log(cate, filters, sort)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cate
            ? `https://lotofgoods.herokuapp.com/api/products?category=${cate}`
            : "https://lotofgoods.herokuapp.com/api/products"
        );
        setProducts(res.data);
        setLoading(false);
        //console.log(res);
      } catch (err) {}
    };
    getProducts();
  }, [cate]);

  useEffect(() => {
    cate &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cate, filters]);

  //Filter newest, high to low, low to hight
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  if (loading) return <h1>..LOADING..</h1>;

  return (
    <Container>
      {cate
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 30)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};
    
export default Products;