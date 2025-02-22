import { useRef } from "react";

const usePrevious = <T>(current: T) => {
  const currentValueRef = useRef<T>(current);
  const previousValueRef = useRef<T | null>(null);
  if (currentValueRef.current !== current) {
    previousValueRef.current = currentValueRef.current;
    currentValueRef.current = current;
  }
  return previousValueRef.current;
};
export default usePrevious;
