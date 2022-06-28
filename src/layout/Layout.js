import React, { useEffect, useState } from 'react'
import ResultCard from '../component/common/resultCard';
import InputBox from '../component/common/input';
import Navbar from './component/Navbar';
import './style.css'
import services from '../Services/Service';

function Layout() {
    const [TC, setTC] = useState();
    const [BP, setBP] = useState();
    const [SL, setSL] = useState();
    const [TAL, setTAL] = useState();

    const [positionSize, setPositionSize] = useState(0);
    const [requiredCapital, setrequiredCapital] = useState(0);

    const [error, setError] = useState({});




    useEffect(() => {
        let findPositionSize = () => {
            console.log("super")
            // quantity
            const quantity = services.findQuantity(TC, BP)

            // total Stop-Loss
            const totalStopLoss = services.totalStopLoss(BP, SL, quantity)

            // totalAffordableLoss
            const totalAffordableLoss = services.totalAffordableLoss(TC, TAL)

            // result

            let positionSizeTemp
            if(totalAffordableLoss > totalStopLoss){
                positionSizeTemp = totalStopLoss/(BP-SL); 
            }
            else if(totalAffordableLoss <= totalStopLoss){
                positionSizeTemp = totalAffordableLoss/(BP-SL); 
            }
            setPositionSize(positionSizeTemp)
            setrequiredCapital(positionSizeTemp*BP)
            
            console.log("quantity: ", quantity)
            console.log("totalStopLoss: ", totalStopLoss)
            console.log("totalAffordableLoss: ", totalAffordableLoss)
            console.log("positionSizeTemp: ", positionSizeTemp)




        }


        if (
            (TC && BP && SL && TAL) &&
            (TC > 0 && BP > 0 && SL >= 0) &&
            (TAL > 0 && TAL <= 100) &&
            (SL < BP)
        ) {
            findPositionSize()
        }





    }, [TC, BP, SL, TAL])


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
                                        name: "Initial Capital",
                                        placeholder: "Amount to be invested",
                                        startAdornment: "₹",
                                        state: TC,
                                        setState: setTC,
                                        error: error,
                                        setError: setError
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
                                        setState: (value) => {
                                            setBP(value)
                                            if(value >= TC) setError({ ...error, "Buy Price": "Please enter a value less than Initial Value" })
                                        },
                                        error: error,
                                        setError: setError
                                    }}
                                />

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <InputBox
                                    data={{
                                        name: "Stop-Loss",
                                        placeholder: "Loss per stock",
                                        startAdornment: "₹",
                                        state: SL,
                                        setState: (value) => {
                                            setSL(value)
                                            if(value > BP) setError({ ...error, "Stop-Loss": "Please enter a value less than Buy Price" })
                                        },
                                        error: error,
                                        setError: setError

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
                                        setState:(value) => {
                                            setTAL(value) 
                                            if (value <= 0 || value >= 100) setError({ ...error, "Total Affordable Loss": "Please enter a value between 0 - 100" })
                                        },

                                        error: error,
                                        setError: setError

                                    }}
                                />

                            </div>
                        </div>
                    </div>
                    <div className='result-container'>
                        <div className='mb-2 result-box-1'>
                            <ResultCard />
                            <ResultCard />

                        </div>

                        <div className='result-box-2'>
                            <div className='result'>Position Size : <span>{positionSize}</span></div>
                            <div className='result'>Required Capital : <span>{requiredCapital}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout