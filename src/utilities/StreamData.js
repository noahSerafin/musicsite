import React, { useEffect, useState } from "react";
import "./StreamData.scss";
import { streams } from "../assets/mockData/mockStreams.js";

const StreamData = (props) => {

const {time, artist, territory, track} = props;
const [streamData, setStreamData] = useState(streams);
const ogStreams = streams[0].toString;


let artistList = []
let regionList = []

useEffect( () => {

    streams.forEach(stream => {
        artistList.push(stream.track_artists);
        regionList.push(stream.stream_country);
    });

},[]);

return(
    <div className="streamData">
        {console.log(regionList)}
    </div>
)
};

export default StreamData;