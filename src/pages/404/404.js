import React from "react";
import "./404.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    
    return(
        <div className="page-not-found">
            <h1>Oops! This page does not exist (404)</h1>
            <Link to="home">Back to Homepage</Link>
        </div>
    )
}

export default PageNotFound