import { useEffect, useState } from "react";

export default function useLocalStorage(name, value) {
    const [state, setState] = useState({ name, value });

    const valueType = typeof state.value;
    // console.log(valueType);

    useEffect(() => {
        switch (valueType) {
            case "object":
                localStorage.setItem(state.name, JSON.stringify(state.value));
                break;
            default:
                localStorage.setItem(state.name, state.value);
        }
    }, [state]);



    const createItem = (name, value) => {
        setState({ name, value });
    };


    const readItem = (name) => {    
        const item = JSON.parse(localStorage.getItem(name));
        return item;
    };


    const updateItem = (name, value) => {
        setState({ name, value });
    };


    const removeItemWithId = (name) => {
        localStorage.removeItem(name);
    };

    const clearStorage = ()=>{
        localStorage.clear();
    };



    const returningValues = { create: createItem, read: readItem, update: updateItem, remove: removeItemWithId, clear: clearStorage };
    return returningValues;
}