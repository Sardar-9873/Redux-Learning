import { DELETE, READ, UPDATE } from "../constants/userConstants";

export const Read = (payload) => {
    return {
        type: READ,
        payload
    };
};


export const Update = (payload) => {
    return {
        type: UPDATE,
        payload
    };
};


export const Delete = (payload) => {
    return {
        type: DELETE,
        payload
    };
};