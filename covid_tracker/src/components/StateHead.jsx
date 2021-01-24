import React from 'react'

const StateHead = () => {
    return (
        <div>
            <div className="container-state-show-head">
                <div className="columns">
                    <div className="stateName">State/UT</div>
                    <div className="confirmed-state">Confirmed</div>
                    <div className="active-state">Active</div>
                    <div className="recovered-state">Recovered</div>
                    <div className="decesed-state">Decesed</div>
                </div>
            </div>
        </div>
    )
}

export default StateHead
