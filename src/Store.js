import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import {AllOrders, AllProducts,LoginRequest,AdminDelete} from "./reducer/AllReducer";

const reducer = combineReducers({
    products : AllProducts,
    user : LoginRequest,
    allOrders: AllOrders,
    deletePrd : AdminDelete
});

let initialState = {};

const middleware = [thunk];

const store = legacy_createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;


export const URL = 'http://localhost:4000/api/v1';