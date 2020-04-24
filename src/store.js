import {createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import shuffle from "./Util";

export default function configureStore(){
    return createStore(
        rootReducer        
    );
    
}