import React, { useState, useEffect } from "react";
import "./RoyaltyTopProducts.scss";
import placeholder from "../../assets/img/3tone_gradient.png";

const RoyaltyTopProducts = (props) => {

    const {data, artist, products, territory} = props;
    //console.log(data);

    //get track data using ISRC// img / length / media

    let totals = []   
    products.forEach(product => {
        totals.push({'name': product, 'value': 0, "Artist": "", image: placeholder})
    });
    totals.forEach(total => {
        data.forEach(sale => {
            if(total.name === sale.track_title){
                total.value += sale.net_payable
                if(total.Artist === ""){
                    total.Artist = sale.track_artist
                }
            }
        })
    });


    totals.sort((a, b) => {
        return parseFloat(b.value) - parseFloat(a.value);
    });

    //console.log(totals);
    let topTotals = totals.slice(0, 10)

    return(
        <div className="analytics-tracklist">
            <div className="analytics-tracklist__header">
                
            </div>
            
            <div className="analytics-tracklist__top">
                <h3 className="analytics-tracklist__top__header--number">#</h3>
                <h3 className="analytics-tracklist__top__header--transparent">_</h3>
                <h3 className="analytics-tracklist__top__header">Total</h3>
                <h3 className="analytics-tracklist__top__header">Title</h3>
                <h3 className="analytics-tracklist__top__header">Artist</h3>
                <h3 className="analytics-tracklist__top__header">Length</h3>
                <h3 className="analytics-tracklist__top__header">Media</h3>
                <h3 className="analytics-tracklist__top__header--end"></h3>
            </div>
            <div className="analytics-tracklist__tracklist">
                {topTotals && topTotals.map((product, index) => {
                    return(
                        <div className="analytics-tracklist__tracklist__track">
                            <p className="analytics-tracklist__tracklist__track__number">{index + 1}</p>
                            <img className="analytics-tracklist__tracklist__track__image" src={product.image} alt="3tone Music"></img>
                            <p>£{(product.value).toFixed(2)}</p>
                            <p>{product.name}</p>
                            <p>{product.Artist}</p>
                            <p>{product.Length}</p>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RoyaltyTopProducts;

/*<button className="tracklist__tracklist__track__button" >
                                <div className={`tracklist__tracklist__track__button__button-bank${buttonBankClasses[index]}`}>
                                    <button className="tracklist__tracklist__track__button__button-bank__button" onClick={()=> editTrack(track, index)}>Edit</button>
                                    <AudioPlayer audio={track.audio} />
                                    <button className="tracklist__tracklist__track__button__button-bank__button" onClick={()=> handleDelete(index, true)}>Delete</button>
                                </div>
                            </button>*/


//onClick={()=> showBank(buttonBankClasses[index], index)}
//<svg className="tracklist__tracklist__track__button__icon" xmlns="http://www.w3.org/2000/svg" width="41.606" height="41.617" viewBox="0 0 41.606 41.617"><path id="Settings" d="M42.671,25.3a5.354,5.354,0,0,1,3.435-4.995,21.222,21.222,0,0,0-2.568-6.187,5.426,5.426,0,0,1-2.178.466,5.342,5.342,0,0,1-4.887-7.519A21.158,21.158,0,0,0,30.3,4.5a5.349,5.349,0,0,1-9.99,0,21.222,21.222,0,0,0-6.187,2.568,5.342,5.342,0,0,1-4.887,7.519,5.249,5.249,0,0,1-2.178-.466,21.691,21.691,0,0,0-2.557,6.2,5.352,5.352,0,0,1,.011,9.99A21.222,21.222,0,0,0,7.079,36.5a5.344,5.344,0,0,1,7.054,7.054,21.346,21.346,0,0,0,6.187,2.568,5.34,5.34,0,0,1,9.968,0,21.222,21.222,0,0,0,6.187-2.568A5.349,5.349,0,0,1,43.527,36.5,21.346,21.346,0,0,0,46.1,30.309,5.379,5.379,0,0,1,42.671,25.3ZM25.4,33.96a8.668,8.668,0,1,1,8.668-8.668A8.666,8.666,0,0,1,25.4,33.96Z" transform="translate(-4.5 -4.5)" fill="#393939"/></svg>