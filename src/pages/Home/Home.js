import React from "react";
import "./Home.scss";
import ThreeDBackground from "../../components/3Dbackground/ThreeDBackground";//R
import { NavLink } from "react-router-dom";
//import ProductTapes from "../../components/ProductTapes/ProductTapes";
//import ShaderBackground from "../../components/ShaderBackground/ShaderBackgroundStarter";

const Home = () => {

  return (
    <>
    <ThreeDBackground />
    <div className="homepage-container">
      <div className="homepage-container__top">
        <div className="homepage-container__top__title-container">
          <h1 className="homepage-container__top__title-container__title">GET HEARD</h1>
          <h4 className="homepage-container__top__title-container__subtitle">LOREM IPSUM DOLOR SIT AMET <br></br>consectetur adipiscing elit</h4>
          <NavLink className="homepage__link" to="my-account">Go to Account</NavLink>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;

/*
<Collage img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} />

<div className="homepage-container">
      <div className="homepage-container__top">
      <ThreeDBackground />
        <div className="homepage-container__top__title-container">
          <h1 className="homepage-container__top__title-container__title">RELEASE <br></br>UNLIMITED <br></br>MUSIC <br></br>EVERYWHERE</h1>
          <h4 className="homepage-container__top__title-container__subtitle">UNLIKE DISTRO AND DITTO, WE ACTUALLY MEAN <br></br>UNLIMITED AND EVERYWHERE</h4>
        </div>
        <Collage img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} />
        </div>
      <div className="homepage-container__mid">
        <ProductList />
      </div>
    </div>
*/