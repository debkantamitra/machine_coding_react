import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import PaginationHandler from "./components/PaginationHandler";
import "./styles.css";

const index = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "https://dummyjson.com/products?limit=500&select=title,price,thumbnail"
    );

    if (response.status === 200) {
      const products = await response.json();

      setProducts(products.products);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h1>Pagination</h1>

      <PaginationHandler />

      <div className="product__container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default index;
