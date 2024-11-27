// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); // state

  //let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    // setCounter((precounter) => precounter + 1);
    // setCounter((precounter) => precounter + 1);

    console.log("clicked", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> Counter</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;

// array obj is can change constant(const) value //
