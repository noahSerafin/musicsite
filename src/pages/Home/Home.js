import React from "react";
import "./Home.scss";
import ThreeDBackground from "../../components/3Dbackground/ThreeDBackgroundC";//R
import Collage from "../../components/Collage/Collage";
import img1 from "../../assets/img/Asset20n.png";
import img2 from "../../assets/img/Asset21n.png";
import img3 from "../../assets/img/Asset22n.png";
import img4 from "../../assets/img/Asset23n.png";
import img5 from "../../assets/img/Asset25n.png";
import AnimatedCollage from "../../components/AnimatedCollage/AnimatedCollage";
//import ProductList from "../../components/ProductList/DummyProductList";
//import Checklist from "../../components/Checklist/Checklist";
import ProductTapes from "../../components/ProductTapes/ProductTapes";
import ShaderBackground from "../../components/ShaderBackground/ShaderBackgroundStarter";
import ArtistTestimonial from "../../components/ArtistTesimonial/ArtistTestimonial";
import nxdia from "../../assets/img/nxdia.png";
import troi from "../../assets/img/troi.png";
import GetPlaylisted from "../../components/GetPlaylisted/GetPlaylisted";


/*function HtmlContent({ className, style, children, portal }) {
  const { size } = useThree()
  return (
    <Html
      portal={portal}
      style={{
        position: 'absolute',
        top: -size.height / 2,
        left: -size.width / 2,
        width: size.width,
        height: size.height
      }}>
      <div className={className} style={style}>
        {children}
      </div>
    </Html>
  )
}*/

const Home = () => {

  return (
    <>
    <div className="homepage-container">
      <div className="homepage-container__top">
      <ThreeDBackground />
        <div className="homepage-container__top__title-container">
          <h1 className="homepage-container__top__title-container__title">RELEASE <br></br>UNLIMITED <br></br>MUSIC <br></br>EVERYWHERE</h1>
          <h4 className="homepage-container__top__title-container__subtitle">UNLIKE DISTRO AND DITTO, WE ACTUALLY MEAN <br></br>UNLIMITED AND EVERYWHERE</h4>
        </div>
        <AnimatedCollage />
      </div>
      <div className="homepage-container__mid">
        <ShaderBackground />
        <ProductTapes />
      </div>
      <div className="homepage-container__bottom">
        <GetPlaylisted />
        <div className="testimonial-container">
          <ArtistTestimonial img={nxdia} header="Nxdia" quote={`"It's great to get the oppurtunity to have my ides heard and bounced between me and another person."`}/>
          <ArtistTestimonial img={troi} header="Troi Irons" quote={`"I can tell you that they all deeply care about music. They put the artist first as much as they say they do. It's not a cute PR move - that aspect of their message is genuine."`}/>
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