import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Home = (props) => {
    const data = props;
    const [confirmed, setConfirmed] = useState(0);
    const [active, setActive] = useState(0);
    const [Recovered, setRecovered] = useState(0);
    const [decesed, setDecesed] = useState(0);
    useEffect(() => {
        setConfirmed(data.data.confirmedCasesIndian);
        setDecesed(data.data.deaths)
        setRecovered(data.data.discharged)
        setActive(confirmed - (Recovered + decesed));
    },[active,Recovered,decesed,confirmed])
    return (
        <div>
            <div className="container">
                <div className="maincontent">
                    <div className="search">
                        <p>Search your district or state</p>
                        <div className="input-search">
                            <input type="text" />
                            <FontAwesomeIcon className="search_icon" icon='search' />
                        </div>
                    </div>
                    <div className="cases">
                        <div className="totalCases">
                            <p>Confirmed Cases</p>
                            <h1 className="data">{confirmed.toLocaleString()}</h1>
                        </div>
                        <div className="activeCases">
                            <p>Active Cases</p>
                            <h1 className="data">{ active.toLocaleString() }</h1>
                        </div>
                        <div className="Recovered">
                            <p>Recovered</p>
                            <h1 className="data">{ Recovered.toLocaleString() }</h1>
                        </div>
                        <div className="Decesed">
                            <p>Deceased</p>
                            <h1 className="data">{ decesed.toLocaleString() }</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
