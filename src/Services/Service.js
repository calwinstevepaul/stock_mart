let services = {}

services.findQuantity = (tc = 0, bp = 0)=>{
    return tc/bp
} 

services.totalStopLoss = (bp = 0, stopLoss = 0, quantity=0 )=>{
    return ((bp-stopLoss)*quantity)
} 

services.totalAffordableLoss = (tc = 0, TAL = 0)=>{
    return ((TAL/100)*tc)
} 
export default services