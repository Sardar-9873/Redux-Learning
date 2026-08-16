import { persistReducer } from "redux-persist";
import storageModule from "redux-persist/lib/storage";
import counterReducer from "./reducers/counterReducer";
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";


const storage = storageModule.default;
const config = { storage, key: "root" };
// console.log(storage);

const reducer = combineReducers({
    user: userReducer,
    counter: counterReducer
});

export const persistedReducer = persistReducer(config, reducer);