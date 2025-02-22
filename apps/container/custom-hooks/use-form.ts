import { useState } from "react";

const useForm = <T>(initState: T): [T, (...args: any[]) => void] => {
  const [state, setState] = useState<T>(initState);
  const handleUpdate = (e: any) => {
    const { name, value } = e.target;
    setState(p => ({ ...p, [name]: value }));
  };
  return [state, handleUpdate];
};
export default useForm;
