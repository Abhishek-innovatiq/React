import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
      if(count===10){
            setCount(0)
      }
      else{
    setCount(count + 1);
      }
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        border: "2px solid black",
        padding: "20px",
        width: "300px",
        margin: "auto",
        borderRadius: "10px",
      }}
    >
      <h2>Counter App</h2>

      <h1>{count}</h1>

      <button onClick={increaseCount} style={{ margin: "5px" }}> Increase</button>

      <button onClick={decreaseCount} disabled={count === 0} style={{ margin: "5px" }}>Decrease</button>

      <button onClick={resetCount} disabled={count === 0} style={{ margin: "5px" }}> Reset</button>
    </div>
  );
}

export default Counter;
