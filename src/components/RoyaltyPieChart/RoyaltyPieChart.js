import React, { useEffect, useState } from "react";
import { 
    ResponsiveContainer,
    PieChart,
    Tooltip,
    Pie
} from "recharts";
import "./RoyaltyPieChart.scss";

const RoyaltyPieChart = (props) => {
    
    const {data, artist, track, territory} = props;
    //console.log(data[1])
    const [sortedData, setSortedData] = useState([]);


    const sortData = (dataIn, artist, track, territory) => {
        if (artist === "All" && track === "All" && territory === "All"){
            return dataIn;
        } else {
            let sorted = []
            dataIn.forEach(sale => {
                if (artist === "All" && track === "All" && territory === sale.territory){
                sorted.push(sale);
                } else if(artist === "All" && track === sale['track_title'] && territory === "All"){
                    sorted.push(sale);
                }
                else if(sale['track_artist'] === artist){
                    if(track === "All" && territory === "All"){
                        //console.log("all tracks")
                        sorted.push(sale)
                    } else if(sale['track_title'] === track && territory === "All"){
                        sorted.push(sale)
                    } else if(sale['track_title'] === "All" && territory === sale.territory){
                        sorted.push(sale)
                    } else if(sale['track_title'] === track && territory === sale.territory){
                        sorted.push(sale)
                    }
                }
            });
            return sorted;
        }
    }

    const getDSPs = (dataIn) => {
        let DSPlist = [];
        dataIn.forEach(sale => {
            DSPlist.push(sale.source);
        });
        DSPlist = Array.from(new Set(DSPlist));
        DSPlist.sort();
        let objs = []
        DSPlist.forEach(DSP => {
            objs.push({'name': DSP, 'value': 0, 'fill': '', 'percentage': 0})
        });
        //console.log(objs);
        return objs;
    }

    const addTotals = (dataIn, DSPs) => {
        DSPs.forEach(DSP => {
            dataIn.forEach(sale => {
                if(sale.source === DSP.name){
                    DSP.value += sale['net_payable'];
                }
            });
        });
        return DSPs;
    }
    //console.log(addTotals(data, getDSPs(data)));

    const setColors = (arr) => {
        arr.forEach(e => {
            switch (e.name) {
                case 'Spotify':
                    e.fill = '#1db954'
                    break;
                case 'Apple Music':
                    e.fill = '#f46683'//'#bcbcbc'
                    break;
                case 'Youtube':
                    e.fill = '#ff0000'
                    break;
                case 'Amazon':
                    e.fill = '#ff9900'
                    break;
                case 'TikTok':
                    e.fill = '#f40199'
                    break;
                case 'Douyin':
                    e.fill = '#f40199'
                    break;
                case 'Resso':
                    e.fill = '#f41671'
                    break;
                case 'Deezer':
                    e.fill = '#22efcb'
                    break;
                case 'TIDAL':
                    e.fill = '#69cfcf'
                    break;            
                case 'SoundCloud':
                    e.fill = '#ff5500'
                    break;
                case 'Trebel':
                    e.fill = '#fff200'
                    break;
                case 'Anghami':
                    e.fill = '#a452cf'
                    break;
                case 'Netease':
                    e.fill = '#800000'
                    break;   
                default:
                    e.fill = '#000000'
                    break;
            }
        });
        return arr;
    }

    const getPercentages = (arr) => {
        let total = 0;
        arr.forEach(e => {
            total += e.value;
        });
        arr.forEach(e => {
            e.percentage = ((100 * e.value) / total).toFixed(2);
        });
    }

    let sortedStreams = sortData(data, artist, track, territory);
    const pieData = setColors(addTotals(sortedStreams, getDSPs(sortedStreams)));//sorted with filters on change// useEffect? need more data to see
    pieData.sort((a, b) => {
        return parseFloat(b.value) - parseFloat(a.value);
    });

    getPercentages(pieData);
    //console.log(pieData);

    return (
        <div className="pie-chart">
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={pieData} dataKey={"value"} nameKey={"name"} />
                </PieChart>
            </ResponsiveContainer>
            <div className="pie-chart__list">
                <div className="pie-chart__list__header">
                    <p></p>
                    <h5 className="pie-chart__list__header__h">DSP</h5>
                    <h5 className="pie-chart__list__header__h--total">Total</h5>
                    <h5 className="pie-chart__list__header__h">Percentage</h5>
                </div>
                <div className="pie-chart__list__main">
                {pieData && pieData.map((e) => {  
                            //const dotColor = `background-color: ${e.fill};`;
                            //console.log(dotColor);               
                            return (   
                                <div className="pie-chart__list__item">
                                    <span className="pie-chart__list__item__color" style={{backgroundColor: e.fill}}></span>
                                    <div className="pie-chart__list__item__left">
                                        {e.name}
                                    </div>
                                    <div className="pie-chart__list__item__field">
                                        {((Math.round(e.value * 100) / 100).toFixed(2) < 0.01) ? `<£0.01`: `£${(Math.round(e.value * 100) / 100).toFixed(2)}`}
                                    </div>
                                    <div className="pie-chart__list__item__right">
                                        {(e.percentage === NaN) ? "0" : e.percentage }%
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    )
}

export default RoyaltyPieChart;

// <span className="pie-chart__list__item__color" style={`background-color: ${e.fill}`}></span>

/*

{artistList && artistList.map((e) => {                      
                    return (                      
                       <Pie data={sortedData[e]}>
                    );
                })}

*/

//  || ((Math.round(e.value * 100) / 100).toFixed(2) == NaN)