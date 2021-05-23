import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {changeIncAsync, dec, inc} from "./counterSlice";

const CountButtons = () => {

    const dispatch = useDispatch()
    const fnInc = useCallback(() => {
        dispatch(changeIncAsync())
    })
    const fnDec = useCallback(() => {
        dispatch(dec())
    })

    return (
        <div>
            <button onClick={fnInc}>++</button>
            <button onClick={fnDec}>--</button>
        </div>
    );
};

export default CountButtons;