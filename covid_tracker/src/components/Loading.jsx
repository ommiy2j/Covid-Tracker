import React from 'react'
import loader from '../assets/loader3.gif'
const Loading = () => {
    return (
        <div className="container-loader">
            <img src={loader} alt=" loading" className="loader" style={{ width: '150px', margin: ' 150px auto', display: 'block' }}/>
        </div>
    )
}

export default Loading
