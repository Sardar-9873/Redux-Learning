import useToggle from "../hooks/useToggle";

function Button() {
    const { value, toggle, on, off } = useToggle();

    return (
        <>
            <h1>{value.toString()}</h1>
            <button id="toggle" onClick={toggle}>Toggle</button>
            <button id="on" onClick={on}>On</button>
            <button id="off" onClick={off}>Off</button>
        </>

    );
}

export default Button;