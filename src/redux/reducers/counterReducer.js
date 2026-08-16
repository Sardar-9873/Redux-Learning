import { CLEAR, DECREMENT, INCREMENT, MANUAL } from "../constants/counterConstants";

const initialStateForCounter = {
    count: 0,
    loading: false,
    error: false
};

export default function counterReducer(state = initialStateForCounter, action) {

    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };


        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };


        case CLEAR:
            return {
                ...state,
                count: initialStateForCounter.count,
            };

        case MANUAL:
            return {
                ...state,
                count: state.count + action.payload
            };

        default:
            return state;

    }

}