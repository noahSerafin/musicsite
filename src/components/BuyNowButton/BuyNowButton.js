import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./BuyNowButton.scss";

const BuyNowButton = ({ product }) => {
    const { isLoading, isAuthenticated, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  
    const buy = async () => {
      // We need an access token for our API to get the
      // Stripe Customer ID from
      const access_token = await getAccessTokenSilently();
  
      // Call the API endpoint, passing in the access token
      // as a header, and the Price ID as the payload
      fetch("/.netlify/functions/buy", {
        method: "POST",
        headers: {
          authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({
          priceId: product.prices[0].id,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          // The response is a checkout session object,
          // which has a `url` attribute which we simply
          // redirect the user to
          window.location.assign(json.url);
        });
    };
  
    if (isLoading) return <></>;
  
    if (isAuthenticated) {return <button className="buy-now-button" onClick={buy}>Buy Now</button>}
    else{
      return <button className="buy-now-button" onClick={loginWithRedirect}>Log In To Purchase</button>;
    }
};

export default BuyNowButton;