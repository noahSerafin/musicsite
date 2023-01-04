import React, { useEffect, useState } from "react";
import BuyNowButton from "../BuyNowButton/BuyNowButton";
import "./ProductList.scss";

const ProductList = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch("/.netlify/functions/products")
        .then((res) => res.json())
        .then((json) => {
            setProducts(json);
        })
    }, [setProducts]);

  

    return (
        <div className="product-container">
        {products && products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <h2>{product.name}</h2>
                <p className="price">${(product.prices[0].unit_amount / 100).toFixed(2)}</p>
                <p className="buynow">
                  <BuyNowButton product={product} />
                </p>
              </div>
            );
          }).reverse()}
      </div>
    )
    
}

export default ProductList;

//extra product info
/* <p className="description">{product.description}</p>
  <p className="sku">SKU: {product.id}</p>
  <p className="img">
  <img src={product.images[0]} alt={product.name} />
  </p>
*/ 