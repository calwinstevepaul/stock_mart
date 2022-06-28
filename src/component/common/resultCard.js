import React from 'react'

function ResultCard({buy=0, sell=0, loss=0, isLoss = false}) {
    return (
        <div className='result-card'>
            <div style={{"marginRight":"10px"}}>Buying Price: <span className='fw-bold' style={isLoss ? {color:"green"} : {color:"red"}}>0</span></div>
            <div style={{"marginRight":"10px"}}>selling Price: <span className='fw-bold' style={isLoss ? {color:"green"} : {color:"red"}}>0</span></div>
            <div style={{"marginRight":"10px"}}>Loss amount <span className='fw-bold' style={isLoss ? {color:"green"} : {color:"red"}}>0</span></div>
        </div>)
}

export default ResultCard