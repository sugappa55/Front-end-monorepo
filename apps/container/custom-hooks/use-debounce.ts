import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedVal, setDebouncedVal] = useState<T>(value);
  useEffect(() => {
    const id = setTimeout(() => setDebouncedVal(value), delay);
    return () => clearTimeout(id);
  }, [value]);

  return debouncedVal;
};
export default useDebounce;
