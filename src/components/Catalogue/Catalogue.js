import React from "react";
import "./Catalogue.scss"
//import img1 from "../../assets/img/Asset20n.png";
//import img2 from "../../assets/img/Asset21n.png";
//import img5 from "../../assets/img/Asset25n.png";
import { products } from "../../assets/mockData/products";

const Catalogue = (props) => {

    const {editProduct} = props;

    /*const products = [
        {
        name: "track1",
        artist: "artist1",
        label: "label1",
        release: "02/01/22",
        status: "Pending",
        cover: img1,
        },
        {
        name: "track2",
        artist: "artist2",
        label: "label2",
        release: "02/01/22",
        status: "Published",
        cover: img2,
        },
        {
            name: "track3",
            artist: "artist1",
            label: "label1",
            release: "02/01/22",
            status: "Published",
            cover: img5
        }
    ]*/

    const setLightClass = (status) => {
        if(status === "published"){
            return "music-dashboard__catalogue__section__light--green"
        } else if(status === "ready"){
            return "music-dashboard__catalogue__section__light--blue"
        } else {
            return "music-dashboard__catalogue__section__light--red"
        }
    }

    return (
        <div className="music-dashboard__catalogue">
                {products && products.map((product) => {
                    return(
                    <>
                        <img className="music-dashboard__catalogue__art" src={product.CoverImg} alt="3tone Music"></img>
                        <div className="music-dashboard__catalogue__art"></div>
                        <div className="music-dashboard__catalogue__section--one">
                            <p className="music-dashboard__catalogue__section__title">{product.Title}</p>
                            <div className="music-dashboard__catalogue__section__aritsts">
                                {product.Artists.map((e) => {return(<p className="music-dashboard__catalogue__section__artists__aritst">{e.name.toString()}</p>)})}
                            </div>
                        </div>
                        <p className="music-dashboard__catalogue__section">{/*product.Label*/}</p>
                        <p className="music-dashboard__catalogue__section">{/*product.Release_Date*/}</p>
                        <p className="music-dashboard__catalogue__section"></p>        
                        <div className="music-dashboard__catalogue__section--last">
                            <p className={setLightClass(product.Published)}>{product.Published}</p>
                            <button className="music-dashboard__catalogue__section__button" onClick={() => editProduct(product)}>Edit</button>
                        </div>
                    </>
            );   
        })}
    </div>
    )
}

export default Catalogue;
//no p descendants

//<p className="music-dashboard__catalogue__header">Title</p>
//<p className="music-dashboard__catalogue__header">Artist</p>

//<p className="music-dashboard__catalogue__header">Label</p>
//<p className="music-dashboard__catalogue__header">Release Date</p>

//<span className="light-container">
//  <p className="music-dashboard__catalogue__status">
//      <span className={setLightClass(product.Published)}>