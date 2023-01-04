import React from "react";
import "./GetPlaylisted.scss";
import playlist from "../../assets/img/playlisted.png";
import star from "../../assets/img/star_emblem.png";

const GetPlaylisted = () => {

    return(
        <div className="get-playlisted">
            <img className="get-playlisted__playlist-img" src={playlist} alt="3tonemusic"></img>
            <div className="get-playlisted__text">
                <h1 className="get-playlisted__text__header">Get</h1>
                <h1 className="get-playlisted__text__header">Playlisted</h1>
                <p className="get-playlisted__text__text">We'll get your music closer to the editorial teams of key DSP's, increasing your chances of gaining fans and landing playlists</p>
                <img className="get-playlisted__text__img"  src={star} alt="3tonemusic"></img>
            </div>
        </div>
    )
}

export default GetPlaylisted;