import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/img/newLogo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Header = ({children, ...props}) => {

    const { isLoading, isAuthenticated, logout } = useAuth0();
	const {page} = props;
	//console.log(page);
	let isAccount;
	if(page === "/my-account" || page === "/my-account/settings" || page === "/my-account/dashboard" || page === "/my-account/upgrade" || page === "/upgrade" || page === "/my-account/analytics" || page === "/my-account/royalties" || page === "/my-account/add-ons" || page === "/my-account/account-support"){
		isAccount=true;
	}
	
	let isHome = false;
	if(page === "Home" || page === "/"){
		isHome = true;
	}
	const className = `header${isAccount?"--hidden":""}`;
	
	const [showMenu, setShowMenu] = useState(false);
	const handleClick = () => {
		setShowMenu(!showMenu);
	}   
	const burgerClassName = `burger-list${
        showMenu ? "--anim" : ""
    }`

    return(
        <header className={className} id="header">
            <button id="header__burger" className="header__burger"  onClick={handleClick}>
				<div className="header__burger__container" id="burger-open">
					<svg aria-hidden="true" role="img" className="iconify iconify--openmoji" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 72" id="burger" data-icon="openmoji:hamburger-menu">
						<path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M16 26h40M16 36h40M16 46h40"></path>
					</svg>
				</div>
				<nav className={burgerClassName} id="burger-list">
					{isHome ? "" : <><a className="nav-item" href="/">Home</a><p className="desktop-only">|</p></>}
					<NavLink className="nav-item" to="my-account">My Account</NavLink><p className="desktop-only">|</p>
					<NavLink className="nav-item" id="nav-login" to='Login'>Login</NavLink><p className="desktop-only">|</p>
					{!isLoading && isAuthenticated && (
						<NavLink className="nav-item" onClick={logout}>Logout</NavLink>
					)}
					<NavLink className="nav-item" id="nav-login" to='support'>Support</NavLink>
				</nav>
			</button>

			<div className="header__logo">
				<a href="/Home" className="header__logo__home-link">
					<div class="header__logo__home-link__logo">
						<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24">
							<path fill='white' d="M1 13h-1v-1h1v1zm22-1h-1v1h1v-1zm-20-1h-1v3h1v-3zm18 0h-1v3h1v-3zm-14 0h-1v3h1v-3zm10-1h-1v5h1v-5zm-12 0h-1v5h1v-5zm14-1h-1v7h1v-7zm-10 0h-1v7h1v-7zm2-2h-1v10h1v-10zm4 0h-1v10h1v-10zm-2-2h-1v14h1v-14z"/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24">
							<path fill='white' d="M1 13h-1v-1h1v1zm22-1h-1v1h1v-1zm-20-1h-1v3h1v-3zm18 0h-1v3h1v-3zm-14 0h-1v3h1v-3zm10-1h-1v5h1v-5zm-12 0h-1v5h1v-5zm14-1h-1v7h1v-7zm-10 0h-1v7h1v-7zm2-2h-1v10h1v-10zm4 0h-1v10h1v-10zm-2-2h-1v14h1v-14z"/>
						</svg>
					</div>
					MUSIC SITE
				</a>
			</div>

			<div className="header__socials">
				<script src="https://code.iconify.design/2/2.2.1/iconify.min.js"></script>
				<a className="header__socials__nav-item" href="/">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
					</svg>
				</a>
				<a className="header__socials__nav-item" href="/">
					<svg aria-hidden="true" role="img" className="iconify" width="1em" height="1em" viewBox="0 0 24 24" data-icon="akar-icons:instagram-fill">
						<path fill="currentColor" fillRule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z" clipRule="evenodd"></path>
					</svg>
				</a>
				<a className="header__socials__nav-item" href="/">
					<svg aria-hidden="true" role="img" className="iconify iconify--akar-icons" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="akar-icons:facebook-fill">
						<path fill="currentColor" fillRule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
        </header>
    )
}

export default Header;