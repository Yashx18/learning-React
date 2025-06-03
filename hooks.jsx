import { useState, useEffect } from "react";

export function Hooks() {
  const [count, setCount] = useState(0);

  // To manually increase the Count
  function increaseCount() {
    setCount((count) => count + 1);
  }

  // To increase the Count after every 1 second.

  useEffect(() => {
    // let clock = setInterval(() => {
    //   console.log("Mounted");

    //   setCount((count) => count + 1);
    // }, 1000);

    return () => {
      console.log("Unmounted");
      clearInterval(clock);
    };
  }, []);// This effect will run on mount and unmount because the dependency array is empty.

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}
