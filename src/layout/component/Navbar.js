import React from 'react'

function Navbar({title}) {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className='d-flex align-items-center justify-content-between Navbar'>
               {title}
            </div>
        </div>
    )
}

export default Navbar