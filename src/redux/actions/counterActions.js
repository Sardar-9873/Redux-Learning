import { CLEAR, DECREMENT, INCREMENT, MANUAL } from "../constants/counterConstants";

export const Increment = (payload) => {
    return {
        type: INCREMENT,
        payload
    };
};

export const Decrement = (payload) => {
    return {
        type: DECREMENT,
        payload
    };
};

export const Clear = (payload) => {
    return {
        type: CLEAR,
        payload
    };
};

export const Manual = (payload) => {
    return {
        type: MANUAL,
        payload
    };
};