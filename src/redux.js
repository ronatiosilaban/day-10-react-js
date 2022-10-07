const redux = require("redux")

const rootReducer =(state = 0, action)=>{
    switch (action.type) {
        case "INCREMENT":
           return state+1
        case "DECREMENT":
            return state-1
        default:
            return state
    }
}


const store = redux.createStore(rootReducer);
console.log("state before increment =",store.getState());

store.dispatch({type:"INCREMENT"})
console.log("state after increment =", store.getState());

