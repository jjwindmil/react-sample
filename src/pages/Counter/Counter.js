import React from "react";

function Counter({number, onIncrease, onDecrease}) {
    return (
        <div>
            <div>Number : {number}</div>
            <button onClick={onIncrease}>increment</button>
            <button onClick={onDecrease}>decrement</button>
        </div>
    );
}

export default Counter;