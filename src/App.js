import React from "react";
import './App.css';
import Profile from "./components/profile";
import Login from "./components/login";
import ChangeColor from "./components/changeColor";

function App() {

    return (
    <div className="App">
        <Profile />
        <Login/>
        <ChangeColor/>
    </div>
  );
}

export default App;

/* import { useDispatch, useSelector} from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount
} from "./redux/slices/counter";
const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
    <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
    </div>
  );
}*/