import React from "react";
import "./ArtistTestimonial.scss";
import circle from "../../assets/img/circle_without_name_720.png";

const ArtistTestimonial = (props) => {

    const {img, header, quote} = props;

    return (
        <div className="testimonial">
            <img className="testimonial__img" src={img} alt="3tonemusic"></img>
            <div className="testimonial__text">
            <img className="testimonial__text__img" src={circle} alt="3tonemusic"></img>
                <h1 className="testimonial__text__header">{header}</h1>
                <p className="testimonial__text__quote">{quote}</p>
            </div>
        </div>
    );
}

export default ArtistTestimonial;