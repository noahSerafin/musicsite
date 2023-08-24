import React, { useEffect, useState } from "react";
import "./AnalyticsRoyalties.scss";
import {streams} from "../../assets/mockData/royalties/ContractSalesJun";
import RoyaltyPieChart from "../../components/RoyaltyPieChart/RoyaltyPieChart";
import RoyaltyLineGraph from "../../components/RoyaltiesLineGraph/RoyaltyLineGraph";
import Popup from "../../components/Popup/Popup";
import RoyaltyBarGraph from "../../components/RoyaltyBarGraph/RoyaltyBarGraph";
import RoyaltyTopProducts from "../../components/RoyaltyTopProducts/RoyaltyTopProducts";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import Tooltip from "../../components/Tooltip/Tooltip";

const AnalyticsRoyalties = () => {

   // const { getAccessTokenSilently } = useAuth0();
   // const location = useLocation();
    //const user = location.state;
    const email = "user@example.com"//user.email;
    const [sales, setSales] = useState(streams)
    console.log(sales)

    const getUserSales = async () => {
        /*const token = await getAccessTokenSilently();
        //console.log(token);
        await fetch('/get-sales-for-user', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            email: email
          }),
        }).then(r => r.json()
        ).then((data) => {
         //console.log("sales:", data)
         setSales(data)
         console.log("sales:", data);
        })
        //console.log(dbUser);
        //setToneUser(dbUser);  */
        setSales(streams);
    }

    useEffect(() => {
        if(email){
            getUserSales();
        }
        //useLocation().state = toneUser;
    }, [])

    //console.log(streams[0]);
    const threeToneArtists = (sales) => {
        let allArtists = []
        sales.forEach(sale => {
            allArtists.push(sale.track_artist)
        })
        return Array.from(new Set(allArtists));
    }

    //filter sales for user artists only may not be needed after python. Or move into Utilites
    // check characters like ' - and $ are still found
    const dummyUser = {
        "threeToneArtists": threeToneArtists(streams),
        "userArtists": ["artistName"]//Rupert Stroud", "Krissi B", "Jazz Morley", "Troi Irons", "Jack Hawitt"]
    }

    //create initial lists for filters
    /*const getArtist = (e) =>{ return e.Track_Title };*/
    //let artistList = dummyUser.threeToneArtists; //// For Admin
    //let artistList = dummyUser.userArtists;
    let artistList = dummyUser.userArtists;//threeToneArtists(sales);
    artistList.sort();

    const sortUserSales = (userArtists) => {//contract id GET
        let newSales = [];
        userArtists.forEach(userArtist => {
            streams.forEach(sale => {
                if(sale['track_artist'] === userArtist){
                    newSales.push(sale);
                    //console.log("pushing artist sale")
                }
            });
        });
        return newSales;
    }
    const userSales = sortUserSales(artistList);//if Admin usersales = sales
    
    const getTerritory = (e) =>{ return e.territory};
    let territoryList = Array.from(new Set(sales.map(getTerritory))); //sales for all, user sales for just userArtist territories
    //console.log(territoryList);
    territoryList.sort();
    
    const [tracks, setTracks] = useState([]);
    const [territories, setTerritories] = useState(territoryList);
   
    const [artistFilter, setArtistFilter] = useState("All");
    const [trackFilter, setTrackFilter] = useState("All");
    //const [DSP, setDSP] = useState("")
    const [territoryFilter, setTerritoryFilter] = useState("All");
    const [timePeriod, setTimePeriod] = useState(6);

    //const [sales, setSales] = useState([]);

    const updateTracklist = (artist, sales) => {
        let trackList = []
        if (artist === "All"){//} && trackFilter === "All" && territoryFilter === "All"){
            console.log("All Sales")
            sales.forEach(sale => {
                trackList.push(sale['track_title'])
            })
        }/* else if (artist === "All" && trackFilter === "All" && territoryFilter === "All"){
            sales.forEach(sale => {
                if(sale['TrackArtist'] === artist){
                    trackList.push(sale['TrackTitle']);
                }
            });
        }*/ 
        else {
            sales.forEach(sale => {
                if(sale['track_artist'] === artist){
                    trackList.push(sale['track_title']);
                }
            });
        }
        trackList = Array.from(new Set(trackList));
        trackList.sort();
        //console.log("updating", trackList)
        return trackList;
    }

    const updateTerritories = (artist, track, sales) => {
        console.log("updating regions")
        let regionList = []
        sales.forEach(sale => {
            if(artist === "All" && track === "All"){
                regionList.push(sale.territory);
            } else if(sale['track_artist'] === artist && track === "All"){
                regionList.push(sale.territory);
            } else if(track === sale['track_title']){
                regionList.push(sale.territory);
            }
        });
        regionList = Array.from(new Set(regionList));
        regionList.sort();
        //console.log("updating regions,", regionList, "track:", track, "region:", territoryFilter)
        return regionList;
    }

    const updateArtistFilter = (e) => {
        setTrackFilter("All");
        setTerritoryFilter("All");
        setArtistFilter(e.target.value);
        //console.log(e.target.value)
    }
    
    const updateTrackFilter = (e) => {
        setTerritoryFilter("All");
        setTrackFilter(e.target.value);
    }

    useEffect( () => { 
        setTracks(updateTracklist(artistFilter, sales));//streams for 3tone, userStreams for user
        setTerritories(updateTerritories(artistFilter, trackFilter, sales))//streams for 3tone, userStreams for user
        /*
        let newSales;
        sales.forEach(sale => {
            if(artistFilter===sale.TrackArtist && trackFilter===sale.TrackTitle && territoryFilter===sale.Territory){
                newSales.push(sale);
            }
        });
        setSales(newSales);
        *///console.log("displayed streams", displayData)
        //console.log("something changed");
    }, [artistFilter, trackFilter, territoryFilter, sales]);
    
    /*if(!user.plan_name){//user.subscription_status !== "active"
        return(
            <div className="analytics-royalties-container--restricted">
                <Popup header="Sorry! This page is restricted." text="You don't seem to have an active subscription on this account." link="#/upgrade" linkText="Upgrade Here"/>
            </div>
        )
    } else {*/
        return(
            <div className="analytics-royalties-container">
                <div className="analytics-royalties-container__header-container" >
                    <h1 className="analytics-royalties-container__header-container__header">Analytics</h1>
                    <div className="analytics-royalties-container__data__filters">
                        <select className="analytics-royalties-container__data__filters__filter" value={artistFilter} onChange={(e) => {updateArtistFilter(e)}}>
                            <option value="" disabled selected>Artist</option>
                            <option value="All">All</option>
                            {artistList && artistList.map((e) => {                      
                                return (                      
                                    <option value={e} >{e}</option>
                                );
                            })}
                        </select>
                        <select className="analytics-royalties-container__data__filters__filter" value={trackFilter} onChange={(e) => {updateTrackFilter(e)}}>
                            <option value="" disabled selected>Track</option>
                            <option value="All">All</option>
                            {tracks && tracks.map((e) => {                      
                                return (                      
                                    <option value={e} >{e}</option>
                                );
                            })}
                        </select>
                        <select className="analytics-royalties-container__data__filters__filter" value={territoryFilter}  onChange={(e) => {setTerritoryFilter(e.target.value)}}>
                            <option value="" disabled selected>Territory</option>
                            <option value="All">All</option>
                            {territories && territories.map((e) => {                       
                                return (                      
                                    <option value={e} >{e}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="analytics-royalties-container__data">
                    <div className="analytics-royalties-container__data__header">
                        <h2 className="analytics-royalties-container__data__header__h">Sales Overview</h2>
                        <Tooltip text="Sales are collected into a specific dates for each month and may not reflect accurate dates of each stream" />
                    </div>
                    <div className="analytics-royalties-container__data__overview">
                        
                            <RoyaltyLineGraph data={sales} artist={artistFilter} track={trackFilter} territory={territoryFilter}/>

                       
                    </div>
                    <h2 className="analytics-royalties-container__data__header">Breakdowns</h2>
                    
                    <div className="analytics-royalties-container__data__breakdowns">
                        <h3>DSPs:</h3>
                        <div className="analytics-royalties-container__data__breakdowns__graph--pie">
                            <RoyaltyPieChart data={sales} artist={artistFilter} track={trackFilter} territory={territoryFilter}/>
                        </div>
                        <h3>Territories:</h3>
                        <div className="analytics-royalties-container__data__breakdowns__graph">
                            <RoyaltyBarGraph data={sales} artist={artistFilter} track={trackFilter} territories={territories}/>
                        </div>

                        <h3>Top Tracks:</h3>
                        <div className="analytics-royalties-container__data__breakdowns__list">
                            <RoyaltyTopProducts data={sales} artist={artistFilter} products={tracks} territory={territoryFilter}/>
                        </div> 
                    </div>
                </div>
            </div>
        )
   //}
}

export default AnalyticsRoyalties;

//<AnalyticsGraph data={userSales} artist={artistFilter} track={trackFilter} territory={territoryFilter} timePeriod={timePeriod} />
//<RoyaltyLineGraph data={userSales} artist={artistFilter} track={trackFilter} territory={territoryFilter}/>

/*
<div className="analytics-royalties-container__data__overview__graph"></div>

<div className="analytics-royalties-container__data__overview__ytd">
<p>YTD Sales</p>
<p>£61,779.76</p>
</div>
<div className="analytics-royalties-container__data__overview__total">
<p>All Time Sales</p>
<p>£92,987.42</p>
</div>
*/
/*
    <select className="analytics-royalties-container__data__filters__filter" value={timePeriod} onChange={(e) => {setTimePeriod(e.target.value)}}>                   
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="" disabled selected>{timePeriod+" Months"}</option>
            <option value="6">6 Months</option>
    </select>
*/