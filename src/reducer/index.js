
import { combineReducers } from "redux";
import changeForm from "./form";
import changeNumber from "./inrement";
//untuk menhandle action yang akan dilakukan dan akan disimpan di redux




const rootReducer = combineReducers({
    decrement : changeNumber,
    form : changeForm
})

export default rootReducer;