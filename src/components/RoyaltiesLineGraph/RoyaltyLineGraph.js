import React, { useEffect, useState } from "react";
import "./RoyaltyLineGraph.scss";
//import { Line } from 'react-chartjs-2';
import { 
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid
} from 'recharts';

const RoyaltyLineGraph = (props) => {

    const {data, artist, track, territory, timePeriod} = props;
    //console.log("incoming data:", data)
    const dummyDates = [
            "20220321T15:43:00",
            "20220408T16:37:00",
            "20220111T16:51:00",
            "20220221T09:55:00",
            "20220326T13:25:00",
            "20220424T00:22:00",
            "20220424T00:22:00",
            "20220424T00:22:00",
            "20220424T00:22:00",
            "20220424T00:22:00",
            "20220129T21:05:00",
            "20220421T21:51:00",
            "20220421T21:51:00",
            "20220421T21:51:00",
            "20220421T21:51:00",
            "20220531T00:55:00",
            "20220113T22:21:00",
            "20220218T20:23:00",
            "20220426T15:00:00",
            "20220301T05:42:00",
            "20220111T16:51:00"
    ]

    const [sales, setSales] = useState(data);

    //functions for sorting dates for graph, could be put in ./utilities?
    const sortDates = (arr) => {
        var counts = [];//{}
        counts[0] =  arr[0];
        let j = 0;
        for (let i = 1; i < arr.length; i++) {
            if(counts.some(e => e.date === arr[i].date)){
                //console.log("increment this date", "i:", i, "j:", j, counts[j])
                counts[j].units += arr[i].units;
            } else {
                //console.log("no date, add this date")
                counts.push(arr[i]);
                j ++;
                //console.log("i:", i, "j:", j)
            }
        }

        const sorted = counts.sort((a, b) => {
            var aa = a.date.split('/').reverse().join(),
                bb = b.date.split('/').reverse().join();
            return aa < bb ? -1 : (aa > bb ? 1 : 0);
        });

        //console.log("counts:", counts)
        return sorted;
    }

    /*const formatDates = (dates) => {
        //needs to sort by year
        let formattedDates = [];
    
        dates.forEach(date => {
            formattedDates.push(
                //take year as well/////////////////
                date.slice(4, 6) + "/" + date.slice(6, 8)
            );
        });
        formattedDates.sort();
        //console.log("dates sorted:", formattedDates)

        return formattedDates;
    }*/
  
    const getStreamDates = () => {
        let streamDates = []
        data.forEach(stream => {
            if (artist === "All" && track === "All" && territory === "All"){
                streamDates.push({date: stream.sale_date, units: stream.units})
            } else if (artist === "All" && track === "All" && territory === stream.territory){
                streamDates.push({date: stream.sale_date, units: stream.units})
            } else if(artist === "All" && track === stream.TrackTitle && territory === "All"){
                streamDates.push({date: stream.sale_date, units: stream.units})
            }
            else if(stream.track_artist === artist){
                if(track === "All" && territory === "All"){
                    console.log("all tracks")
                    streamDates.push({date: stream.sale_date, units: stream.units})
                } else if(stream.track_title === track && territory === "All"){
                    streamDates.push({date: stream.sale_date, units: stream.units})
                } else if(stream.track_title === "All" && territory === stream.territory){
                    streamDates.push({date: stream.sale_date, units: stream.units})
                } else if(stream.track_title === track && territory === stream.territory){
                    streamDates.push({date: stream.sale_date, units: stream.units})
                }
            }
        });
        //console.log(streamDates);
        //let unsortedDates = formatDates(streamDates);
       //console.log(streamDates);
        return streamDates;
    }

    //let unsortedDates = getStreamDates();//formatDates(dummyDates);
    //console.log("unsorted:", unsortedDates);
    //let sortedDates = sortDates(unsortedDates);
    //let sortedDates = sortDates(getStreamDates()); ///Use with real data
    //console.log("sorted:", sortedDates)

    useEffect( () => {
        //getStreamDates()
        //console.log("datas:", data);
        //console.log("sales:", sales);
        let unsortedDates = getStreamDates();//formatDates(dummyDates);
        //console.log("unsorted:", unsortedDates);
        let sortedDates = sortDates(unsortedDates);
        setSales(sortedDates);
        console.log("sorted:", sortedDates);
    }, [data, artist, track, territory, timePeriod] );
    
    const monthFinder = (key) => {
        switch (key.slice(3, 5)) {
            case "01":
                return "Jan"
            case "02":
                return "Feb"
            case "03":
                return "Mar"
            case "04":
                return "Apr"
            case "05":
                return "May"
            case "06":
                return "Jun"
            case "07":
                return "Jul"
            case "08":
                return "Aug"
            case "09":
                return "Sep"
            case "10":
                return "Oct"
            case "11":
                return "Nov"
            case "12":
                return "Dec"        
            default:
                //console.log("month not found");
        }
    }
    const CustomTooltip = ({active, payload, label}) => {
        if (active && sales !== [undefined] && sales !== [] && sales.length > 1) {
            let total = sales.find(o => o.date === label)
            //console.log(total);
            return (
                <div className="tooltip">
                    <h4>{label.slice(0, 2)}{monthFinder(label)}</h4>
                    <h4>{total.units} streams</h4>
                </div>
            )
        }
    }

    return(
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sales}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1" >
                        <stop offset="0%" stopColor="#d62329" stopOpacity={1} />
                        <stop offset="75%" stopColor="#d62329" stopOpacity={0.2} />
                    </linearGradient>
                </defs>

                <Area dataKey="units" stroke="#d62329" fill="url(#color)"/>

                <XAxis dataKey={"date"} axisLine={false} tickLine={false} tickFormatter={date => {
                    //sort by year as well as month
                    //const day = date.slice(-2);
                    //const month = monthFinder(date);
                    //if (day % 7 === 0){
                        return date;//month + " " + day;
                    //}
                    //return "";
                }} />
                <YAxis dataKey={"units"} axisLine={false} tickLine={false} allowDecimals={false}/>

                <Tooltip content={<CustomTooltip />}/>

                <CartesianGrid opacity={0.2} vertical={false}/>

            </AreaChart>
        </ResponsiveContainer>
    )
}

export default RoyaltyLineGraph;