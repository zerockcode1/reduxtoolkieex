import React from 'react';
import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";

const Counter = () => {
    return (
        <div>
            <CountDisplay></CountDisplay>
            <CountButtons></CountButtons>
        </div>
    );
};

export default Counter;