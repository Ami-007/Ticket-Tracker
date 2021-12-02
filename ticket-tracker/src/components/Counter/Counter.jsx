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
        <h4 className="counterBox__title">Counter</h4>
        <div className="counter">
            <button onClick={handleDecrement} className="counter__button">-</button>
            <p>{counter}</p>
            <button onClick={handleIncrement} className="counter__button">+</button>
        </div>
    </div>
    )
};

export default Counter;