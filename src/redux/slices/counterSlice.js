import { createSlice } from "@reduxjs/toolkit";

const initialStateForCounter = {
    count: 0,
    loading: false,
    error: false
};

const counter = createSlice(
    {
        name: "counter",
        initialState: initialStateForCounter,
        reducers: {
            increment: (state) => {
                state.count += 1;
            },

            decrement: (state) => {
                state.count -= 1;
            },

            manual: (state, action) => {
                state.count += action.payload
            },

            clear: (state) => {
                state.count = initialStateForCounter.count;
            }
        }
    }
);

export const CounterReducer = counter.reducer;
export const { increment, decrement, manual, clear } = counter.actions;