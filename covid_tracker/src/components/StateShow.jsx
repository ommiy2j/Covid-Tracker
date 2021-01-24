import React from 'react'

const StateShow = (props) => {
    const data = props.item;
    return (
        <div>
            <div className="container-state-show">
                <div className="columns-state">
                    <div className="statename">{ data.loc }</div>
                    <div className="confirmed-state">{ data.confirmedCasesIndian }</div>
                    <div className="active-state">{ (data.confirmedCasesIndian-data.deaths-data.discharged) }</div>
                    <div className="recovered-state">{ data.discharged }</div>
                    <div className="decesed-state">{ data.deaths }</div>
                </div>
            </div>
        </div>
    )
}

export default StateShow
