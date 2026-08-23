// import { useDispatch, useSelector } from "react-redux";
// import { CLEAR, DECREMENT, INCREMENT, MANUAL } from "../redux/constants/counterConstants";
// import { Clear, Decrement, Increment, Manual } from "../redux/actions/counterActions";
import { useRef, useState } from "react";
// import { clear, decrement, increment, manual } from "../redux/slices/counterSlice";
import { useCounter } from "../zustand/counter";

function Counter() {

    const counter = useCounter(state => state);
    const [manualNumberAdding, setManualNumberAdding] = useState(false);

    // const count = useSelector((state) => { return state.counter.count });
    const [manualCounter, setManualCounter] = useState(counter.count);
    // const error = useSelector((state) => { return state.counter.error });

    // console.log(counter);


    // const dispatch = useDispatch();

    // const manualValueRef = useRef();
    // const manualValue = manualValueRef.current.value;

    console.log(manualCounter, "===>>>manual counter<<<===");
    // console.log(count, "===count from store");

    return (
        <>
            {/* Counter Hero */}

            <h1>Counter</h1>
            <p>{counter.count}</p>
            <p>Error: {counter.error.toString()}</p>

            {/* Counter Hero End */}

            <hr />

            {/* Counter Actions */}

            {/* <button onClick={() => { dispatch(increment(null)) }} id={INCREMENT}>{INCREMENT}</button>
            <button onClick={() => { dispatch(decrement(null)) }} id={DECREMENT}>{DECREMENT}</button>
            <button onClick={() => { dispatch(clear(null)) }} id={CLEAR}>{CLEAR}</button> */}

            <button id="increment" onClick={() => { counter.increment() }}>Increment</button>
            <button id="decrement" onClick={() => { counter.decrement() }}>Decrement</button>
            <button id="clear" onClick={() => { counter.clear() }}>Clear</button>
            <button onClick={() => { setManualNumberAdding(!manualNumberAdding) }} id="manual">Manual</button>

            {/* Counter Actions End */}

            <hr />

            {/* Counter Manual Adding */}

            {manualNumberAdding &&
                <>
                    <input
                        id="manual-value"
                        value={manualCounter}
                        type="number"
                        placeholder="Manual Number for Adding in counter"
                        onChange={(e) => { setManualCounter(e.target.value) }}
                    />
                    {/* <button id="add-manual" onClick={() => { dispatch(manual(+manualCounter)); setManualNumberAdding(false) }}>Add Manual</button> */}
                    <button id="add-manual" onClick={() => { counter.manual(+manualCounter); setManualNumberAdding(false) }}>Add Manual</button>
                </>}


            {/* Counter Manual Adding End  */}

        </>
    );
}

export default Counter;