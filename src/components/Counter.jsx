import { useDispatch, useSelector } from "react-redux";
import { CLEAR, DECREMENT, INCREMENT, MANUAL } from "../redux/constants/counterConstants";
import { Clear, Decrement, Increment, Manual } from "../redux/actions/counterActions";
import { useRef, useState } from "react";

function Counter() {

    const [manualNumberAdding, setManualNumberAdding] = useState(false);
    
    const count = useSelector((state) => { return state.counter.count });
    const [manualCounter, setManualCounter] = useState(count);
    const error = useSelector((state) => { return state.counter.error });


    const dispatch = useDispatch();

    // const manualValueRef = useRef();
    // const manualValue = manualValueRef.current.value;

    console.log(manualCounter , "===>>>manual counter<<<===");
    console.log(count , "===count from store");

    return (
        <>
            {/* Counter Hero */}

            <h1>Counter</h1>
            <p>{count}</p>
            <p>Error: {error.toString()}</p>

            {/* Counter Hero End */}

            <hr />

            {/* Counter Actions */}

            <button onClick={() => { dispatch(Increment(null)) }} id={INCREMENT}>{INCREMENT}</button>
            <button onClick={() => { dispatch(Decrement(null)) }} id={DECREMENT}>{DECREMENT}</button>
            <button onClick={() => { dispatch(Clear(null)) }} id={CLEAR}>{CLEAR}</button>
            <button onClick={() => { setManualNumberAdding(!manualNumberAdding) }} id={MANUAL}>{MANUAL}</button>

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
                    <button id="add-manual" onClick={() => { dispatch(Manual(Number(manualCounter))); setManualNumberAdding(false) }}>Add Manual</button>
                </>}


            {/* Counter Manual Adding End  */}

        </>
    );
}

export default Counter;