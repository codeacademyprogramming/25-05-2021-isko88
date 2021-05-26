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