const intialState = {
    Data: new Date().toLocaleDateString() , 
    Time:    new Date().toLocaleTimeString(), 
    notes:"lkfds"
    
}

const NotesReducer = (state = intialState , action ) =>{
    switch (action.type) {
        case 'ADD':
            console.log(action , state)
            return { ...state , Date:action.payload.obj , Time:action.payload.obj , Notes:action.payload.obj}
            
        
        default:
            return state;
    }
}

export default NotesReducer;