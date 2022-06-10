import React from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';


function InputBox({data}) {

    return (
        <div className='mb-3'>
            <div className='lable'>{data.name}</div>
            <div>
                <Input
                    id="standard-adornment-amount"
                    color='primary'
                    type='number'
                    placeholder={data.placeholder}
                    value={data.state}
                    onChange={(e)=>{ e.target.value >= 0 ? data.setState(e.target.value) : data.setState(0)}}
                    fullWidth={true}
                    startAdornment={<InputAdornment position="start">{data.startAdornment}</InputAdornment>}
                    endAdornment={<InputAdornment position="end">{data.endAdornment}</InputAdornment>}
                />
            </div>

        </div>
    )
}

export default InputBox