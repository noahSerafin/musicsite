import React, { useState } from "react";
import "./MusicDashboard.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import Catalogue from "../../components/Catalogue/Catalogue";
import ReleaseEditor from "../../components/ReleaseEditor/ReleaseEditor";
import Popup from "../../components/Popup/Popup";

const MusicDashboard = () => {

    //get user from props
    const user = {
        subscription_status: "active"
    }

    const [page, setPage] = useState("Releases");
    
    const [product, setProduct] = useState(null);
    const editProduct = (data) =>{
        //console.log("product edit")
        console.log("incoming", data);
        setProduct(data);
        //console.log(product);
        setPage("Editor")
        //return(
            //<MetadataEditor data={product} />
        //)
    }

    const handleRequest = (request) => {
        console.log("request type:", request, "product:", product)
    }

    const handleHeaderButtons = () => { 
        if(product.Published === "incomplete"){
            return(
                <button className="music-dashboard__header__button" onClick={() => handleRequest("delivery")}>Save Changes</button>
            )
        } else if(product.Published === "ready"){
            return(
                <>
                <button className="music-dashboard__header__button" onClick={() => handleRequest("delivery")}>Save Changes</button>
                <button className="music-dashboard__header__button" onClick={() => handleRequest("delivery")}>Request Delivery</button>
                </>
            )
        } else if(product.Published === "published"){
            return(
                <>
                <button className="music-dashboard__header__button" onClick={() => handleRequest("update")}>Request Update</button>
                <button className="music-dashboard__header__button" onClick={() => handleRequest("takedown")}>Request Takedown</button>
                </>
            )
        }
    }

    const className = `music-dashboard__content ${page}`

    const handlePage = () => {
        if(user.subscription_status !== "active"){
            return(
                <div className="music-dashboard restricted">
                    <Popup header="Sorry! This page is restricted." text="You don't seem to have an active subscription on this account." link="#/upgrade" linkText="Upgrade Here"/>
                </div>
            )
        } else {
            if(page==="Releases"){
                return(
                    <div className="music-dashboard">
                        <div className="music-dashboard__header">
                            <h1 className="music-dashboard__header__title">Catalogue:</h1>
                            <button className="music-dashboard__header__button" onClick={() => setPage("Upload")}>UPLOAD NEW +</button>
                        </div>
                        <div className={className}>
                            <Catalogue editProduct={editProduct}/>
                        </div>
                    </div>
                )
            } else if(page==="Upload"){
                return(
                    <div className="music-dashboard">
                        <div className="music-dashboard__header">
                            <h1>Upload:</h1>
                            <button className="music-dashboard__header__button" onClick={() => setPage("Releases")}>CANCEL</button>
                        </div>
                        <div className={className}>
                            <div className="music-dashboard__upload-form">
                                <UploadForm editProduct={editProduct}/>
                            </div>
                        </div>
                    </div>    
                )
            }else if(page==="Editor"){
                return(
                    <div className="music-dashboard">
                        <div className="music-dashboard__header">
                            <h1>Edit Release:</h1>
                            <h4>Status: {product.Published}</h4>
                            {handleHeaderButtons()}
                            <button className="music-dashboard__header__button" onClick={() => setPage("Releases")}>CANCEL</button>
                        </div>
                        <div className={className}>
                            <ReleaseEditor data={product}/>
                        </div>
                    </div>
                )
            }
        }
    }
    //const showForm = () =>{
    //    setIsHidden(!isHidden)
    //}
    //const formClass = `music-dashboard__upload-form${(isHidden?"--hidden":"")}`;
    //const tapeClassName = `tape-product${showBack ? "--back" : "--front"}`;
    

    return (
        <>
            {handlePage()}
        </>
    )
}

export default MusicDashboard;