import React from "react";
import { dsps } from "../../assets/mockData/dsps";
import "./ReleaseDeliveries.scss";

const ReleaseDeliveries = () => {

    //import delivery data, combine into dsps array

    return(
        <div className="deliveries">
            <h3 className="deliveries__header">Deliveries</h3>
            <p>View the status of the DSP deliveries for this release. Note that although delivery may be listed as complete, this does not necessarily mean that the release is live on the DSP.</p>
            <div className="deliveries__grid">
                <h4 className="deliveries__grid__header">Action</h4>
                <h4 className="deliveries__grid__header">Target</h4>
                <h4 className="deliveries__grid__header">Finished</h4>
                <h4 className="deliveries__grid__header">Batch ID</h4>
                {dsps && dsps.map((dsp) => {                       
                            return (
                                <>
                                <p className="deliveries__grid__item"></p>
                                <p className="deliveries__grid__item">{dsp}</p>
                                <p className="deliveries__grid__item"></p>
                                <p className="deliveries__grid__item"></p>
                                </>
                            );
                        })}
            </div>
        </div>
    )
}

export default ReleaseDeliveries;