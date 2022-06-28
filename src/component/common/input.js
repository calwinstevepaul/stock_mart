import React from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';


function InputBox({data}) {
    let {error,setError } = data;
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
                    onChange={(e)=>{ 
                        setError({...error,[data.name]:""})
                       
                        if(e.target.value >= 0){
                            if(e.target.value == "-") {}
                            else if(e.target.value[0] == 0){
                                let newValue = e.target.value.substring(1,  e.target.value.length-1);
                                data.setState(parseFloat(newValue));

                            }else{
                                data.setState(parseFloat(e.target.value) || 0);
                            }
                        }
                        else{
                            data.setState(0);
                        }
                    }}
                    fullWidth={true}
                    startAdornment={<InputAdornment position="start">{data.startAdornment}</InputAdornment>}
                    endAdornment={<InputAdornment position="end">{data.endAdornment}</InputAdornment>}
                />
                <p  className="error">{error[data.name] ? error[data.name]  : "" }</p>
            </div>

        </div>
    )
}

export default InputBox