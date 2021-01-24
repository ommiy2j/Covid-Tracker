import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import StateShow from './StateShow';

const Statedata = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchStateData = async () => {
            const result = await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
            console.log(result)
            setLoading(false);
            setData(result.data.data.regional)
        }
        fetchStateData();
    },[setData])
    return (
    
           isLoading ? (
            <Loading />
        ) :
            (
                <section className="cards">
                    {
                        data.map(item => (
                            <StateShow item={item} />
                        ))
                    }
                </section>
            )
    )
}

export default Statedata
