import useDebounce from "@/custom-hooks/use-debounce";
import React, { ChangeEvent, useState } from "react";

const DebouncedInput = () => {
  const [input, setInput] = useState("");
  const debounced = useDebounce(input);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type='text' onChange={handleChange} />
      <h1>Normal value - {input}</h1>
      <h1>Debounced value - {debounced}</h1>
    </div>
  );
};

export default DebouncedInput;
