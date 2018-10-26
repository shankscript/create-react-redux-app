import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
/*
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger"
import promise from "redux-promise-middleware"
const middleware = composeWithDevTools(applyMiddleware(promise(), thunk, logger()))
*/
import reducer from "./reducers";


export default createStore(reducer, applyMiddleware(thunk));
