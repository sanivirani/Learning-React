import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "svj95",
    age: 23,
  };
  let myArry = [1, 2, 3];

  return (
    <>
      <h1 className=" bg-gray-600 rounded-xl p-4 text-black mb-4">
        Test Tailwind
      </h1>
      <Card username="Nora" btnText="Click Me" />
      <Card username="Delba" />
    </>
  );
}

export default App;
