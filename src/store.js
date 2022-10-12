// untuk membuat store redux
import { legacy_createStore as createStore} from 'redux'
import rootReducer from "./reducer/index";
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && composeWithDevTools()
);

export default store;