import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import PaginationHandler from "./components/PaginationHandler";
import styles from "./styles.module.css";
import { PAGE_SIZE } from "../../constants";

const index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);

  const numberOfPages = Math.ceil(products.length / PAGE_SIZE);
  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = (currentPage + 1) * PAGE_SIZE;

  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=500&select=title,price,thumbnail"
      );

      if (response.status === 200) {
        const products = await response.json();

        setProducts(products.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Pagination</h1>

      <PaginationHandler
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className={styles.product__container}>
        {products?.slice(startIndex, endIndex)?.map((product, index) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default index;
