import React from "react";
import "../App.css";
import AboutUs from "../components/AboutUs/AboutUs";
import { allProducts } from "../data";
import ProductCard from "../components/ProductCard/ProductCard";

function HomePage() {
  return (
    <div>
      <div class="AboutUs">
        <AboutUs />
      </div>
      <div id="product-list">
        {allProducts.map((productData, key) => {
          return <ProductCard key={key} productData={productData} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
