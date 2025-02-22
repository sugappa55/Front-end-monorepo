import { useCallback, useState } from "react";

const useToggle = (init = false): [boolean, () => void] => {
  const [val, setVal] = useState(init);
  const toggleVal = useCallback(() => setVal(p => !p), []);
  return [val, toggleVal];
};

export default useToggle;
