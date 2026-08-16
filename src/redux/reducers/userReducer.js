import { READ, UPDATE, DELETE } from "../constants/userConstants";

const initialStateForUser = {
    info: {
        name: "Sahal",
        age: 14,
        gender: "Male"
    },
    loading: false,
    error: false
}

export default function userReducer(state = initialStateForUser, action) {

    switch (action.type) {

        case READ:
            alert("Name: " + state.info.name + " Age: " + state.info.age + "  Gender: " + state.info.gender);
            return state;

        case DELETE:
            return {
                ...state, info: {name: "", age: 0, gender: ""}
            };

        case UPDATE:
            return {
                ...state, info: { name: action.payload.name, age: action.payload.age, gender: action.payload.gender }
            };


        default:
            return state;

    }

}