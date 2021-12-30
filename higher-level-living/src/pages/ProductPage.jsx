import React from "react";
import { oneProduct } from "../data";

function ProductPage() {
  return (
    <div>
      <h2>{oneProduct.title}</h2>
      <h3>Price: ${oneProduct.price}</h3>
      <h3>Description: {oneProduct.description}</h3>
      <h3>Pledges:</h3>
    </div>
  );
}

export default ProductPage;
