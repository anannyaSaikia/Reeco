import { applyMiddleware, legacy_createStore as createStore} from "redux";
import { orderReducer } from "./orderReducer";
import thunk from "redux-thunk"

export const store = createStore(orderReducer, applyMiddleware(thunk));