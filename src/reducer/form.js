const changeForm = (state = [], action)=>{
    switch (action.type) {
        case "INPUT":
           return action.payload
        default:
            return state
    }
}

export default changeForm