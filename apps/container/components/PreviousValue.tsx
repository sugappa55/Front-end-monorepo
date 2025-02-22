import usePrevious from "@/custom-hooks/use-previous";
import React, { useState } from "react";

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <div>
      <h2>Current - {count}</h2>
      <h2>Previous - {previous}</h2>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={() => setCount(count - 1)}>Decrement count</button>
    </div>
  );
};

export default PreviousValue;
