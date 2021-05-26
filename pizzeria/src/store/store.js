import { createStore, applyMiddleware } from "redux";
import reducer from "../components/reducers/index"

function loggerMiddleware(storeAPI) {
    return function (next) {
        return function (action) {
            console.log("storeAPI", storeAPI);
            console.log("next", next);
            console.log("action", action);
            return next(action)
        }
    }
}

const logger = storeAPI => next => action => {
    console.log("Store before action dispatch:", storeAPI.getState());
    console.log("Action dispatch:", action);
    const result =  next(action);
    console.log("Store after action dispatch:", storeAPI.getState());
    return result;
}

const middlewares = applyMiddleware(loggerMiddleware,logger);
const store = createStore(reducer, middlewares);
export default store;