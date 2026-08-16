import { persistReducer } from "redux-persist";
import storageModule from "redux-persist/lib/storage";
import { UserReducer } from "./slices/userSlice";
import { CounterReducer } from "./slices/counterSlice";
// import counterReducer from "./reducers/counterReducer";
// import { combineReducers } from "redux";
// import userReducer from "./reducers/userReducer";


const storage = storageModule.default || storageModule;
const config = { storage, key: "root" };
// console.log(storage);

// const reducer = combineReducers({
//     user: userReducer,
//     counter: counterReducer
// });

// export const persistedReducer = persistReducer(config, reducer);

export const persistedUserReducer = persistReducer(config, UserReducer);
// console.log(persistedUserReducer);
export const persistedCounterReducer = persistReducer(config, CounterReducer);
// console.log(persistedCounterReducer);