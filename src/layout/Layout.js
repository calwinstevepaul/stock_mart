import React, { useState } from 'react'
import InputBox from './component/input';
import Navbar from './component/Navbar';
import './style.css'

function Layout() {
    const [TC, setTC] = useState(0);
    const [BP, setBP] = useState(0);
    const [SL, setSL] = useState(0);
    const [TAL, setTAL] = useState(0);

    return (
        <div className='layout-container d-flex justify-content-center align-items-center'>
            <div className='layout-container-inner p-3'>
                <Navbar title="Stock Mart" />
                <div className='tab-container d-flex flex-column justify-content-between'>
                    <div>
                        <div className='row'>
                            <div className='col-6'>
                                <InputBox
                                    data={{
                                        name: "Total Capital",
                                        placeholder: "Amount to be invested",
                                        startAdornment: "₹",
                                        state: TC,
                                        setState: setTC
                                    }}
                                />

                            </div>
                            <div className='col-6'>
                                <InputBox
                                    data={{
                                        name: "Buy Price",
                                        placeholder: "Cost per stock",
                                        startAdornment: "₹",
                                        state: BP,
                                        setState: setBP
                                    }}
                                />

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <InputBox
                                    data={{
                                        name: "Stop Loss",
                                        placeholder: "Loss per stock",
                                        startAdornment: "₹",
                                        state: SL,
                                        setState: setSL
                                    }}
                                />

                            </div>
                            <div className='col-6'>
                                <InputBox
                                    data={{
                                        name: "Total Affordable Loss",
                                        placeholder: "Affordable Loss percentage",
                                        endAdornment: "%",
                                        state: TAL,
                                        setState: setTAL


                                    }}
                                />

                            </div>
                        </div>
                    </div>
                    <div>
                      
                      
                        <div className='d-flex justify-content-around align-items-center'>
                            <div className='result'>Quantity : 0</div>
                            <div className='result'>Required Capital : 0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout