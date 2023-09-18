import React, { useEffect, useState } from "react";
import { 
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Cell,
    Tooltip
} from "recharts";
import { countryCodes } from '../../assets/mockData/international';

const RoyaltyBarGraph = (props) => {

    const {data, artist, track, territories} = props;

    let displayTerritories = territories;
    let cleanData = [];
    data.forEach(sale => {
        if(artist === "All"){
            if(sale.net_payable > 0){
                cleanData.push(sale);
            }
        } else if (artist === sale.track_artist && track === "All"){
            if(sale.net_payable > 0){
                cleanData.push(sale);
            }
        } else if (artist === sale.track_artist && track === sale.track_title){
            if(sale.net_payable > 0){
                cleanData.push(sale);
            }
        }
    });
    //console.log(cleanData);
    let totals = []   
    displayTerritories.forEach(territory => {
        totals.push({'name': territory, 'value': 0})
    });

    totals.forEach(total => {
        cleanData.forEach(sale => {
            if(sale.territory===total.name){// && sale.NetPayable > 0){
                //console.log(sale.NetPayable);
                total.value += sale.net_payable;
            }
        });
        //console.log(total.value)
    });
    const checkZero = (total) => {
        //return total.value > 0;
        return (total.value).toFixed(2) > 0;
    }
    const cleanTotals = totals.filter(checkZero)
   // console.log(cleanTotals)

    const findCountryName = (code) => {
        var obj;
        return obj[code];
    }

    const CustomTooltip = ({active, payload, label}) => {
        if (active) {
            let obj = countryCodes.find(o => o.code === label);
            let country = obj.country
            let code = cleanTotals.find(o => o.name === label);
            //let value = code.value
            return (
                <div className="custom-tooltip">
                    <h4>{country}</h4>
                    <h6>£{code.value}</h6>
                </div>
            )
        }
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            data={cleanTotals}
            >
             <XAxis dataKey="name" fontSize={"1.1rem"}/>   
             <YAxis dataKey={"value"} />   
             
             <Bar
                dataKey="value"
             >
                {data.map((entry, index) => (
            <Cell fill="#6dd4d5" />
                ))}
             </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default RoyaltyBarGraph;

// x axis interval={0} for all names
//<Tooltip content={<CustomTooltip />}/>