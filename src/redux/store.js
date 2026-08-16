// import { createStore } from "redux";
// import { persistedReducer } from "./rootReducer";
import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { persistedUserReducer, persistedCounterReducer } from "./rootReducer";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";



// export const store = createStore(persistedReducer);
export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        counter: persistedCounterReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});
// console.log(store);
export const persistedStore = persistStore(store);
// console.log(persistedStore);
