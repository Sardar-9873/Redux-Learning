import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./rootReducer";


export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);
