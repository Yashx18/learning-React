import { useState, useEffect } from "react";

function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  useEffect(() => {
    // setInterval(() => {
    //   setCounterVisible((c) => !c);
    // }, 5000);
  }, []);

  return <div>{counterVisible ? <Counter></Counter> : null}</div>;
}

// Mounting
function Counter() {
  const [count, setCount] = useState(0);

  // mounting, re-rendering , unmounting

  // Hooking into the Lifecycle Events of React

  console.log("Counter");

  // useEffect hook makes sure that no matter how many times the code re-renders, the code in useEffect hook run only one at the Mounting.

  useEffect(function () {
    // let clock = setInterval(() => {
    //   setCount((count) => count + 1);
    // }, 1000);
    // console.log('on mount');


    // This is the cleanup code that runs when the component unmounts.
    // return function () {
    //   clearInterval(clock);
    //   console.log('on unmount');
    // };
  }, []);// Empty Array '[]' is dependency array.

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
