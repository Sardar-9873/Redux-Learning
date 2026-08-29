import { useState } from "react";

export default function useToggle() {
    const [value, setValue] = useState(false);

    const toggle = () => {
        setValue(prev => !prev);
    };

    const on = () => {
        setValue(true);
    };

    const off = () => {
        setValue(false);
    };

    const returningValues = { value, toggle, on, off };
    return returningValues;
}