import React from "react";
import "./MyAccount.scss";
import logo from "../../assets/img/artistandlabelservices.png";
import logoWhite from "../../assets/img/3tone_White.png";
import { Link, Outlet, useLocation} from "react-router-dom";

const MyAccount = () => {
    //const [menuClassName, setMenuClassName] = useState("subs");

    const page = useLocation().pathname;
    console.log(page);
    //console.log(menuClassName, userColor, settingsColor)
  
  const menuClassName = () => {
      switch (page) {
      case "/my-account":
      return "subs";
      case "/my-account/settings":
        return "settings";
      case "/my-account/dashboard":
        return "music";
      case "/my-account/analytics":
        return "analytics";
      case "/my-account/royalties":
        return "royalties"; 
      case "/my-account/add-ons":
        return "add-ons";
      case "/my-account/account-support":
        return "acc-support";                         
      default:
        return "subs";
    }
  }
    const subsActive =  menuClassName() === "subs" ? true : false;
    const settingsActive =  menuClassName() === "settings" ? true : false;
    const userColor = menuClassName() === "subs" ? "#f7f7f7" : "#262626";
    const settingsColor = menuClassName() === "settings" ? "#f7f7f7" : "#262626";

  return (
    <div className="my-account">
      <div className="my-account__container">
        <div className="my-account__container__top">
          <div className="my-account__container__top__header"></div>
          <div className="my-account__container__top__options">
            <Link className={`my-account__container__top__options__nav--user ${subsActive}`} to="">
              <svg className="my-account__container__top__options__nav--user__icon" xmlns="http://www.w3.org/2000/svg" width="41.606" height="41.606" viewBox="0 0 41.606 41.606"><path id="Person" d="M25.3,25.3A10.4,10.4,0,1,0,14.9,14.9,10.432,10.432,0,0,0,25.3,25.3Zm0,5.2c-6.891,0-20.8,3.511-20.8,10.4v5.2H46.106v-5.2C46.106,34.014,32.194,30.5,25.3,30.5Z" transform="translate(-4.5 -4.5)" fill={`${userColor}`}/></svg>         
            </Link>
            <Link className={`my-account__container__top__options__nav--settings ${settingsActive}`} to="settings">
              <svg className="my-account__container__left__nav__icon" xmlns="http://www.w3.org/2000/svg" width="41.606" height="41.617" viewBox="0 0 41.606 41.617"><path id="Settings" d="M42.671,25.3a5.354,5.354,0,0,1,3.435-4.995,21.222,21.222,0,0,0-2.568-6.187,5.426,5.426,0,0,1-2.178.466,5.342,5.342,0,0,1-4.887-7.519A21.158,21.158,0,0,0,30.3,4.5a5.349,5.349,0,0,1-9.99,0,21.222,21.222,0,0,0-6.187,2.568,5.342,5.342,0,0,1-4.887,7.519,5.249,5.249,0,0,1-2.178-.466,21.691,21.691,0,0,0-2.557,6.2,5.352,5.352,0,0,1,.011,9.99A21.222,21.222,0,0,0,7.079,36.5a5.344,5.344,0,0,1,7.054,7.054,21.346,21.346,0,0,0,6.187,2.568,5.34,5.34,0,0,1,9.968,0,21.222,21.222,0,0,0,6.187-2.568A5.349,5.349,0,0,1,43.527,36.5,21.346,21.346,0,0,0,46.1,30.309,5.379,5.379,0,0,1,42.671,25.3ZM25.4,33.96a8.668,8.668,0,1,1,8.668-8.668A8.666,8.666,0,0,1,25.4,33.96Z" transform="translate(-4.5 -4.5)" fill={`${settingsColor}`}/></svg>
            </Link>
          </div>
        </div>
        <div className={`my-account__container__left ${menuClassName()}`}>
            <a href="/" className="my-account__container__left__logo__home-link">
              <img id="dashboard-logo" className="logo" src={logoWhite} alt="3tone Music"></img>
            </a>
            <Link className="my-account__container__left__nav"  to="dashboard">
              <svg className="my-account__container__left__nav__icon" xmlns="http://www.w3.org/2000/svg" width="44.843" height="44.844" viewBox="0 0 44.843 44.844"><path id="Icon_awesome-music" data-name="Icon awesome-music" d="M44.842,2.8A2.8,2.8,0,0,0,41.2.132L13.173,8.408a2.8,2.8,0,0,0-1.962,2.671v22.9a12.116,12.116,0,0,0-2.8-.343C3.764,33.633,0,36.142,0,39.238s3.764,5.605,8.408,5.605,8.408-2.509,8.408-5.605V18.77L39.238,12.2V28.371a12.116,12.116,0,0,0-2.8-.343c-4.644,0-8.408,2.509-8.408,5.605s3.764,5.605,8.408,5.605,8.408-2.509,8.408-5.605V2.8Z" transform="translate(0 0.001)" fill="#fff"/></svg>
              My Music</Link>
            <Link className="my-account__container__left__nav" to="analytics">
              <svg className="my-account__container__left__nav__icon" xmlns="http://www.w3.org/2000/svg" width="50.274" height="47.316" viewBox="0 0 50.274 47.316"><path id="Chart" d="M48.776,26.615H26.847l14.6,14.6a1.483,1.483,0,0,0,2.051.063A22.133,22.133,0,0,0,50.26,28.265a1.481,1.481,0,0,0-1.484-1.65Zm-1.463-5.988A22.232,22.232,0,0,0,26.689,0a1.487,1.487,0,0,0-1.553,1.5V22.18h20.68A1.486,1.486,0,0,0,47.313,20.627ZM20.7,26.615V4.686A1.481,1.481,0,0,0,19.052,3.2,22.163,22.163,0,0,0,.013,25.91a22.453,22.453,0,0,0,22.447,21.4,22.007,22.007,0,0,0,12.5-4.069A1.468,1.468,0,0,0,35.1,41.02Z" transform="translate(0 0)" fill="#fff"/></svg>
              Analytics</Link>
            <Link className="my-account__container__left__nav"  to="royalties">
              <svg className="my-account__container__left__nav__icon" xmlns="http://www.w3.org/2000/svg" width="23.53" height="41.606" viewBox="0 0 23.53 41.606"><path id="Dollar" d="M22.147,22.76c-5.247-1.364-6.934-2.774-6.934-4.97,0-2.519,2.335-4.276,6.241-4.276,4.114,0,5.64,1.965,5.779,4.854H32.34a9.214,9.214,0,0,0-7.42-8.807V4.5H17.986V9.493c-4.484.971-8.09,3.883-8.09,8.344,0,5.339,4.415,8,10.864,9.546,5.779,1.387,6.934,3.421,6.934,5.571,0,1.595-1.133,4.137-6.241,4.137-4.762,0-6.634-2.127-6.888-4.854H9.48c.277,5.062,4.068,7.905,8.506,8.853v5.016H24.92v-4.97c4.507-.855,8.09-3.467,8.09-8.206C33.01,26.366,27.394,24.124,22.147,22.76Z" transform="translate(-9.48 -4.5)" fill="#f7f7f7"/></svg>
              Royalties</Link>
            <Link className="my-account__container__left__nav" to="add-ons">
              <svg className="my-account__container__left__nav__icon" xmlns="http://www.w3.org/2000/svg" width="45.656" height="45.656" viewBox="0 0 45.656 45.656"><path id="Icon_material-library-add" data-name="Icon material-library-add" d="M7.566,12.131H3V44.09a4.579,4.579,0,0,0,4.566,4.566H39.524V44.09H7.566ZM44.09,3H16.7a4.579,4.579,0,0,0-4.566,4.566V34.959A4.579,4.579,0,0,0,16.7,39.524H44.09a4.579,4.579,0,0,0,4.566-4.566V7.566A4.579,4.579,0,0,0,44.09,3ZM41.807,23.545H32.676v9.131H28.111V23.545H18.979V18.979h9.131V9.848h4.566v9.131h9.131Z" transform="translate(-3 -3)" fill="#fff"/></svg>
              Add-ons</Link>
            <button className="my-account__container__left__nav--hidden"></button>
            <Link className="my-account__container__left__nav" to="account-support">
              <svg className="my-account__container__left__nav__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m12 22l-.25-3h-.25q-3.55 0-6.025-2.475Q3 14.05 3 10.5q0-3.55 2.475-6.025Q7.95 2 11.5 2q1.775 0 3.312.662q1.538.663 2.701 1.825q1.162 1.163 1.824 2.7Q20 8.725 20 10.5q0 1.875-.612 3.6q-.613 1.725-1.675 3.2q-1.063 1.475-2.525 2.675Q13.725 21.175 12 22Zm2-3.65q1.775-1.5 2.887-3.512Q18 12.825 18 10.5q0-2.725-1.887-4.613Q14.225 4 11.5 4Q8.775 4 6.888 5.887Q5 7.775 5 10.5q0 2.725 1.888 4.613Q8.775 17 11.5 17H14Zm-2.525-2.375q.425 0 .725-.3t.3-.725q0-.425-.3-.725t-.725-.3q-.425 0-.725.3t-.3.725q0 .425.3.725t.725.3ZM10.75 12.8h1.5q0-.75.15-1.05q.15-.3.95-1.1q.45-.45.75-.975q.3-.525.3-1.125q0-1.275-.862-1.913Q12.675 6 11.5 6q-1.1 0-1.85.612Q8.9 7.225 8.6 8.1l1.4.55q.125-.425.475-.838q.35-.412 1.025-.412q.675 0 1.013.375q.337.375.337.825q0 .425-.25.762q-.25.338-.6.688q-.875.75-1.062 1.187q-.188.438-.188 1.563Zm.75-1.625Z"></path></svg>
              Support</Link>
            <button className="my-account__container__left__nav--hidden"></button>
        </div>
        <div className="my-account__container__right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;


//display in account dropdown
//<button className="my-account__container__top__options__nav__drop-down__nav" onClick={() => setDisplay("details")}>Change my details</button>


//<button className="my-account__container__top__options__nav" onClick={() => setDisplay("royalties")}>Request Royalties</button>
//            <button className="my-account__container__top__options__nav" onClick={() => setDisplay("lite")}>Upgrade</button>

//<button className="my-account__container__left__nav last" onClick={() => setDisplay("subs")}>
//<svg className="my-account__container__left__nav__icon" xmlns="http://www.w3.org/2000/svg" width="41.606" height="41.617" viewBox="0 0 41.606 41.617"><path id="Settings" d="M42.671,25.3a5.354,5.354,0,0,1,3.435-4.995,21.222,21.222,0,0,0-2.568-6.187,5.426,5.426,0,0,1-2.178.466,5.342,5.342,0,0,1-4.887-7.519A21.158,21.158,0,0,0,30.3,4.5a5.349,5.349,0,0,1-9.99,0,21.222,21.222,0,0,0-6.187,2.568,5.342,5.342,0,0,1-4.887,7.519,5.249,5.249,0,0,1-2.178-.466,21.691,21.691,0,0,0-2.557,6.2,5.352,5.352,0,0,1,.011,9.99A21.222,21.222,0,0,0,7.079,36.5a5.344,5.344,0,0,1,7.054,7.054,21.346,21.346,0,0,0,6.187,2.568,5.34,5.34,0,0,1,9.968,0,21.222,21.222,0,0,0,6.187-2.568A5.349,5.349,0,0,1,43.527,36.5,21.346,21.346,0,0,0,46.1,30.309,5.379,5.379,0,0,1,42.671,25.3ZM25.4,33.96a8.668,8.668,0,1,1,8.668-8.668A8.666,8.666,0,0,1,25.4,33.96Z" transform="translate(-4.5 -4.5)" fill="#f7f7f7"/></svg>
//Settings</button>

//<div className="my-account__container__top__options__nav__drop-down"></div> 


/*switch (e) {
          case "subs":
            setContent(content => <MySubscription />);
            console.log("subs set")
            break;
          case "details":
            setContent(content => <ChangeDetails />);
            console.log("deets set")
            break;
          case "music":
              setContent(content => <MusicDashboard />);
              break;
          case "analytics":
            setContent(content =>  <AnalyticsRoyalties />);
            break;
          case "add-ons":
            setContent(content =>  <Addons/>);
            break;
          case "amplify":
            setContent(content =>  <div>Amplify</div>);
            break;
          case "royalties":
            setContent(content =>  <Royalties />);
            break;
          case "settings":
            console.log("settings set")
            setContent(content =>  <AccountSettings />);
            break;
          default:
            setContent(content =>  <MySubscription setDisplay={setDisplay}/>);
      }*/

//{content}