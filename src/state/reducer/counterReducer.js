const reducer = (state =0 , action) =>{
    if(action.type === 'Addition'){
        return state + 1
    }
    else if (action.type === 'Subtraction'){
        return state - 1
    }
    else{
        return state
    }
}

export default reducer; 




