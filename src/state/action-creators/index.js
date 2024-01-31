export const AddOne = (counter) =>{
   return (dispatch)=>{
    dispatch({
        type : 'Addition',
        
    })

   }
}

export const SubtractOne = (counter) =>{
    return (dispatch)=>{
        dispatch({
            type : 'Subtraction',
          
        })
       } 
}