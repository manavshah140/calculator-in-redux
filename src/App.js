import React from "react";
import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import {incNumber, decNumber, mulNumber, divideNumber } from "./actions/index"

const App = () => {

    const myState = useSelector((state) => state.ChangeTheNumber);
    const myOtherState = useSelector((state) => state.MultTheNumber);
    const dispatch = useDispatch();
    console.log(myState);

    return(
        <>
            <div className="container">
                <h1>Increment/Decrement counter</h1>
                <h4>Using React and Redux</h4>

                <div className="quantity">
                    <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
                    <input type='text' value={myState} className="quantity__input"/>
                    <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
                </div>
            </div>

            <div className="container my-5">
                <h1>Multiplication/Division counter</h1>
                <h4>Using React and Redux</h4>

                <div className="quantity">
                    <a className="quantity__minus" title="Decrement" onClick={() => dispatch(divideNumber())}><span>/</span></a>
                    <input type='text' value={myOtherState} className="quantity__input"/>
                    <a className="quantity__plus" title="Increment" onClick={() => dispatch(mulNumber(5))}><span>*</span></a>
                </div>
            </div>
        </>
    )
}

export default App;