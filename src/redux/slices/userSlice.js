import { createSlice } from "@reduxjs/toolkit";

const initialStateForUser = {
    info: {
        name: "Sahal",
        age: 14,
        gender: "Male"
    },
    loading: false,
    error: false
};

const user = createSlice(
    {
        name: "user",
        initialState: initialStateForUser,
        reducers: {
            read: (state) => {
                alert("Name: " + state.info.name + " Age: " + state.info.age + "  Gender: " + state.info.gender);
                state;
            },

            remove: (state) => {
                state.info.name = "";
                state.info.age = 0;
                state.info.gender = "";
            },

            update: (state, action) => {
                state.info.name = action.payload.name;
                state.info.age = action.payload.age;
                state.info.gender = action.payload.gender;
            }
        }
    }
);

export const UserReducer = user.reducer;
export const { read, remove, update } = user.actions;
// console.log(user.actions);