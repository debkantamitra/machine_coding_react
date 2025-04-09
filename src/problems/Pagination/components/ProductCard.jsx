import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, thumbnail, id } = product;

  return (
    <div className="product">
      {id}
      <img src={thumbnail} alt="product_image" className="product__img" />

      <div className="product__info">
        <h3>{title}</h3>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
