import React , {useEffect, useState} from "react";
import "./ProductTapes.scss";
import grainBackground from "../../assets/img/grainBG.png";
import tapeLite from "../../assets/img/lite.png";
import tapePlus from "../../assets/img/PLUS.png";
import tapePro from "../../assets/img/PRO.png";
import tapeLiteRev from "../../assets/img/lite_tracklist.png";
import tapePlusRev from "../../assets/img/PLUS_tracklist.png";
import tapeProRev from "../../assets/img/PRO_tracklist.png";
import leftArrow from "../../assets/img/left_arrow.png";
import rightArrow from "../../assets/img/right_arrow.png";
import ProductTape from "../ProductTape/ProductTape";


import BuyNowButton from "../BuyNowButton/BuyNowButton";

const ProductTapes = () => {

    let lengthOfArr = 6;
    const productsArr = [
        {
            "name": "PRO",
            "price": "£129.99",
            "front": tapePro,
            "back": tapeProRev
        },
        {
            "name": "PLUS",
            "price": "£64.99",
            "front": tapePlus,
            "back": tapePlusRev
        },
        {
            "name": "LITE",
            "price": "£24.99",
            "front": tapeLite,
            "back": tapeLiteRev
        }
    ]
    if(productsArr[0] !== undefined && productsArr.length < 6){
        console.log("pushing");
        productsArr.push(productsArr[0]);
        //console.log(productsArr)
        //setPrices(prices.push(prices[0]));
        //console.log(products);
        if(lengthOfArr === 6){
            productsArr.unshift(productsArr[(productsArr.length-2)]);
            productsArr.push(productsArr[(productsArr.length-3)]);
            //console.log("6:", productsArr)
        } else {
            //console.log(productsArr)
            //console.log("unshift", productsArr.length-2)
            productsArr.unshift(productsArr[(productsArr.length-2)]);
            productsArr.push(productsArr[(productsArr.length-2)]);
            productsArr.unshift(productsArr[(productsArr.length-2)]);
            console.log(productsArr)
        }
    }

    const [state, setState] = useState(0);
    const [tapesClass, setTapesClass] = useState();
    const [products, setProducts] = useState(productsArr);
    const [product, setProduct] = useState("LITE");

  
   useEffect(() => {
        setTapesClass(tapesClass => `tape-products tapes${state}`)
   }, [state, setState]);

    const leftClicked = () => {
        let flipButton = document.getElementById('tape-product--back--centered');
        if(flipButton !== null){
            flipButton.click();
        }
        setState(state => state = 1)
        setTimeout(() => {
            if (products.length <= 6){
                //let newArr = 
                products.push(products.shift());
                //setProducts(newArr);
            }
            setState(state => state = 2)
        }, 150);
     
    }

    const rightClicked = () => {
        let flipButton = document.getElementById('tape-product--back--centered');
        if(flipButton !== null){
            flipButton.click();
        }
        setState(state => state = -1)
        setTimeout(() => {
            if  (products.length <= 6){
                let newArr = products;
                newArr.unshift(newArr.pop());
                setProducts(newArr);
                setState(state => state = -2);
                }
                
        }, 150)
       
    }
    //console.log(state);

    //put inside useEffect??
    const tapes = (productsArr) => { 
        
    }

    return (
        <div className="tape-container">
            <h1>Select a package</h1>
            <button className="carousel__button--left" onClick={leftClicked}>
                <img className="carousel__button__img" src={leftArrow} alt="3tonemusic"></img>
            </button>
            <ul className={tapesClass}>
                {products && products.map((product) => {
                if(product === products[3]){
                    return (                       
                        <ProductTape product={product} id={product.id} name={product.name} frontImg={product.front} backImg={product.back} isFlipped={false} Centered={true}/>
                    );
                }else{
                    return (                       
                        <ProductTape product={product} id={product.id} name={product.name} frontImg={product.front} backImg={product.back} isFlipped={false} Centered={false}/>
                    );
                }
            }).reverse()}
            </ul>
            <button className="carousel__button--right" onClick={rightClicked}>
                <img className="carousel__button__img" src={rightArrow} alt="3tonemusic"></img>
            </button>
            <div className="buy-now-button--container">
                <BuyNowButton product={product} />
            </div>
        </div>
    );
}

export default ProductTapes;

//<img className="grain-background" src={grainBackground} alt="3toneMusic"></img>
//<ShaderBackground />