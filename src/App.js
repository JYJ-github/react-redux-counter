import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNum } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const globarNumber = useSelector((state) => state.counter.number);

  const addNumHandler = () => {
    dispatch(addNum(1));
  };

  const minsuNumHandler = () => {
    dispatch(addNum(-1));
  };
  return (
    <div>
      <h2>counter</h2>
      <div>{globarNumber}</div>
      <input type="button" value="+" onClick={addNumHandler} />
      <input type="button" value="-" onClick={minsuNumHandler} />
    </div>
  );
};

export default App;
