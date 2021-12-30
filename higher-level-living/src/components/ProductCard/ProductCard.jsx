import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
  const { productData } = props;
  return (
    <div className="product-card">
      <Link to={`/products/${productData.link}}`}>
        <img src={productData.image} id="product-image" alt="description" />
        <h3 class="product-info">{productData.title}</h3>
        <h4 class="product-info">{productData.description}</h4>
      </Link>
    </div>
  );
}

export default ProductCard;
