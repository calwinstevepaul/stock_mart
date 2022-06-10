import React from 'react'

function Card({ data, index }) {
    return (
        <div key={index} className='card-common d-flex mb-3 align-items-center justify-content-around ' >
            <div className='mr-6'>
                <img src={data.img_url} width={"150px"}  />
            </div>

            <div>
                {
                    data.list.map((ele, index) =>  <div key={index}>{ele.key} : {ele.value}</div> )
                }
            </div>
        </div>
    )
}

export default Card