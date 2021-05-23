import React from 'react';
import {useSelector} from "react-redux";

const CountDisplay = () => {

    const count = useSelector(state => state.counter.count)

    console.log(count)

    return (
        <div>
            <h1>COUNT {count}  </h1>
        </div>
    );
};

export default CountDisplay;