//untuk menampung data dari action FECTH_USER
const usersReducers = (state =[], action)=>{
    switch (action.type) {
        case 'FETCH_USER':
        return [...state, action.payload]
        default:
            return state;
    }
}

export default usersReducers