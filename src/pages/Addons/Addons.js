import React, { useState } from "react";
import "./Addons.scss";
import Popup from "../../components/Popup/Popup"

const Addons = (props) => {

    const [popup, setPopup] = useState("");

    const user = {
        name: "Placeholder",
        isActive: true,
        Sub: "Plus",
        Start: "August 1st 2022",
        Renewal: "August 1st 2023",
        PaymentMethod: 1203,
        BillingAddress: "123 Fake St, Townsford, TW1 1FS"
    };
    const status = (user.isActive ? 'Active' : 'Pending Cancelation');

    const handlePopup = (popup) => {
       switch (popup) {
           case "":
               return;
           case "playlist":
               return <Popup header="Playlist Pitching" text="We'll pitch your music to the editorial teams at key DSP’s, including Spotify, Apple Music, Amazon, Deezer and Tidal , increasing your chances of landing on key curated playlists and gaining listeners."
               link="" linkText="Link to Form" userType={user.Sub} userTypeReq={"Pro"} setTrigger={setPopup} isClosable={true}/>
            case "social":
                return <Popup header="Social Media Verification" text="lorem ipsum" 
                link="" linkText="Link to Form" userType={user.Sub} userTypeReq={"Pro"} setTrigger={setPopup} isClosable={true}/>
            case "vevo":
                return <Popup header="Upload to Vevo" text="We’ve got you covered on all things VEVO related, including uploads and channel creation." 
                link="" linkText="Link to Form" userType={user.Sub} userTypeReq={"Plus"} setTrigger={setPopup} isClosable={true}/>
            case "royalty-collection":
                return <Popup header="Publishing Royalty Collection" text="We can also collect performance and mechanical royalties on your behalf. These are paid out quarterly, in accordance with their reporting from collection societies." 
                link="" linkText="Link to Form" userType={user.Sub} userTypeReq={"Pro"} setTrigger={setPopup} isClosable={true}/>
            case "chart":
                return <Popup header="Chart Registration" text="We can get your tunes registered for the Official Charts in the UK, US and USA."
                link="" linkText="Link to Form" userType={user.Sub} userTypeReq={"Pro"} setTrigger={setPopup} isClosable={true}/>     
           default:
               break;
       }
    }
    console.log(popup)
    return(
        <div className="addons">
            <div className="addons__header">
                <h1 className="addons__header__greeting">Add-Ons</h1>
                <p className="addons__header__sign-up-date">{user.Start}</p>
            </div>
            <div className="addons__content">
                <button className="addons__content__btn playlist" onClick={()=>setPopup("playlist")}><h4 className="addons__content__btn__text">Playlist Pitching</h4>
                <svg className="addons__content__btn__icon" xmlns="http://www.w3.org/2000/svg" width="214.696" height="150.287" viewBox="0 0 214.696 150.287">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0"/>
                    <stop offset="1" stop-color="#545454"/>
                    </linearGradient>
                </defs>
                <path id="Icon_material-playlist-play" data-name="Icon material-playlist-play" d="M185.492,50.439H3v21.47H185.492Zm0-42.939H3V28.97H185.492ZM3,114.848H142.553V93.379H3Zm161.022-21.47v64.409l53.674-32.2Z" transform="translate(-3 -7.5)" fill="url(#linear-gradient)"/>
                </svg>
                </button>
                <button className="addons__content__btn social"  onClick={()=>setPopup("social")}><h4 className="addons__content__btn__text">Social Media Verification</h4>
                <svg className="addons__content__btn__icon" xmlns="http://www.w3.org/2000/svg" width="175.659" height="175.659" viewBox="0 0 175.659 175.659">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0"/>
                    <stop offset="1" stop-color="#545454"/>
                    </linearGradient>
                </defs>
                <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M176.222,88.392A87.83,87.83,0,1,1,88.392.563,87.829,87.829,0,0,1,176.222,88.392ZM78.233,134.9,143.4,69.733a5.667,5.667,0,0,0,0-8.013l-8.013-8.013a5.666,5.666,0,0,0-8.014,0L74.226,106.85,49.415,82.038a5.667,5.667,0,0,0-8.014,0l-8.013,8.013a5.667,5.667,0,0,0,0,8.013L70.219,134.9A5.667,5.667,0,0,0,78.233,134.9Z" transform="translate(-0.563 -0.563)" fill="url(#linear-gradient)"/>
                </svg>
                </button>
                <button className="addons__content__btn vevo"  onClick={()=>setPopup("vevo")}><h4 className="addons__content__btn__text">Upload to Vevo</h4>
                <svg className="addons__content__btn__icon" xmlns="http://www.w3.org/2000/svg" width="429.398" height="108.187" viewBox="0 0 429.398 108.187">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0"/>
                    <stop offset="1" stop-color="#545454"/>
                    </linearGradient>
                </defs>
                <path id="path5069" d="M-383.412-61.383A54.093,54.093,0,0,0-437.5-7.289,54.093,54.093,0,0,0-383.412,46.8,54.093,54.093,0,0,0-329.318-7.289,54.093,54.093,0,0,0-383.412-61.383Zm0,79.337c-13.524,0-23.44-10.819-23.44-25.244s9.924-25.244,23.44-25.244,23.44,10.821,23.44,25.244S-369.888,17.954-383.412,17.954ZM-542.085-7.289c0-29.875-23.411-54.093-52.29-54.093s-52.29,24.218-52.29,54.093S-623.229,46.8-593.474,46.8c23.766,0,42.4-14.364,48.6-34.259h-31.474c-4.366,6.461-10.787,8.114-17.13,8.114-12.165,0-19.916-8.373-22.349-19.834h73.15a56.348,56.348,0,0,0,.587-8.114Zm-52.29-28.85c10.434,0,18.52,7.187,21,18.031h-42.038C-612.609-29.38-605.138-36.139-594.375-36.139ZM-698.956,45.9l-59.761-104.13h35.185L-698.956-10.9l24.576-47.332h35.185Zm209.161,0-59.761-104.13h35.185L-489.8-10.9l24.576-47.332h35.185Z" transform="translate(758.717 61.383)" fill="url(#linear-gradient)"/>
                </svg>
                </button>
                <button className="addons__content__btn pub"  onClick={()=>setPopup("royalty-collection")}><h4 className="addons__content__btn__text">Publishing Royalty Collection</h4>
                <svg className="addons__content__btn__icon" xmlns="http://www.w3.org/2000/svg" width="185.91" height="185.91" viewBox="0 0 185.91 185.91">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0"/>
                    <stop offset="1" stop-color="#545454"/>
                    </linearGradient>
                </defs>
                <path id="Icon_ionic-ios-paper" data-name="Icon ionic-ios-paper" d="M37.339,17.676v143.9a6.275,6.275,0,0,1-6.257,6.257h0a6.275,6.275,0,0,1-6.257-6.257V31.977h-7.15a14.285,14.285,0,0,0-14.3,14.3V174.984a14.285,14.285,0,0,0,14.3,14.3h157.8a13.818,13.818,0,0,0,13.809-13.809V17.676a14.285,14.285,0,0,0-14.3-14.3L50.746,4.269C42.836,4.269,37.339,9.766,37.339,17.676Zm29.5,14.3h37.54a6.275,6.275,0,0,1,6.257,6.257h0a6.275,6.275,0,0,1-6.257,6.257H66.835a6.275,6.275,0,0,1-6.257-6.257h0A6.275,6.275,0,0,1,66.835,31.977Zm0,71.5h66.141a6.275,6.275,0,0,1,6.257,6.257h0a6.275,6.275,0,0,1-6.257,6.257H66.835a6.275,6.275,0,0,1-6.257-6.257h0A6.275,6.275,0,0,1,66.835,103.48Zm87.592,48.265H66.835a6.275,6.275,0,0,1-6.257-6.257h0a6.275,6.275,0,0,1,6.257-6.257h87.592a6.275,6.275,0,0,1,6.257,6.257h0A6.275,6.275,0,0,1,154.427,151.746Zm0-71.5H66.835a6.275,6.275,0,0,1-6.257-6.257h0a6.275,6.275,0,0,1,6.257-6.257h87.592a6.275,6.275,0,0,1,6.257,6.257h0A6.275,6.275,0,0,1,154.427,80.242Z" transform="translate(-3.375 -3.375)" fill="url(#linear-gradient)"/>
                </svg>
                </button>
                <button className="addons__content__btn chart" onClick={()=>setPopup("chart")}><h4 className="addons__content__btn__text">Chart Registration</h4>
                <svg className="addons__content__btn__icon" width="135.772" height="144.824" viewBox="0 0 135.772 144.824">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0"/>
                    <stop offset="1" stop-color="#646464"/>
                    </linearGradient>
                </defs>
                <path id="Icon_metro-list-numbered" data-name="Icon metro-list-numbered" d="M49.756,119.6h90.515v18.1H49.756Zm0-54.309h90.515v18.1H49.756Zm0-54.309h90.515v18.1H49.756ZM22.6,1.928V38.134H13.55V10.98H4.5V1.928ZM13.55,76.32v7.071h18.1v9.051H4.5V71.794l18.1-8.486V56.237H4.5V47.186H31.653V67.834Zm18.1,25.174v45.257H4.5V137.7H22.6v-9.052H4.5V119.6H22.6v-9.051H4.5v-9.051Z" transform="translate(-4.499 -1.928)" fill="url(#linear-gradient)"/>
                </svg>
                </button>
            </div>
            {handlePopup(popup)}
        </div>
    )
}
export default Addons;