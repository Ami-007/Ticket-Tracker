import React, {useState} from "react";
import "./Counter.scss";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
            setCounter(counter + 1);
        }

    const handleDecrement = () => {
        if (counter === 0) {
            setCounter(counter);
        } else {   
            setCounter(counter - 1);
        };
    };
    
    return (
    <div className="counterBox">
        
        <button onClick={handleDecrement} className=""> - </button>
        <p>{counter}</p>
        <button onClick={handleIncrement} className=""> + </button>
    </div>
    )
};

export default Counter;