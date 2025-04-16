import React from "react";
import styles from "../styles.module.css";

const ProductCard = ({ product }) => {
  const { title, price, thumbnail, id } = product;

  return (
    <div className={styles.product}>
      {id}
      <img
        src={thumbnail}
        alt="product_image"
        className={styles.product__img}
      />

      <div className={styles.product__info}>
        <h3>{title}</h3>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
