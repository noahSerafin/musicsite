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
            <div className="product">
                <h2>LITE</h2>
                <p className="price">24.99</p>
                <p className="product__subscription">/a year</p>
                <p className="buynow">
                  <BuyNowButton product="LITE" />
                </p>
            </div>
            <div className="product">
                <h2>PLUS</h2>
                <p className="price">64.99</p>
                <p className="product__subscription">/a year</p>
                <p className="buynow">
                  <BuyNowButton product="PLUS" />
                </p>
            </div>
            <div className="product">
                <h2>PRO</h2>
                <p className="price">129.99</p>
                <p className="product__subscription">/a year</p>
                <p className="buynow">
                  <BuyNowButton product="PRO" />
                </p>
            </div>
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