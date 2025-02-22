import useForm from "@/custom-hooks/use-form";
import React, { FormEvent } from "react";

type Props = {};

const FormState = (props: Props) => {
  const [state, handleChange] = useForm<{
    name: string;
    password: string;
    gender: "male" | "female" | "other";
    study: "ssc" | "12th" | "UG" | "PG";
  }>({ name: "", password: "", gender: "male", study: "ssc" });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='name'>Name</label>
      <input type='text' onChange={handleChange} value={state.name} name='name' />
      <br />
      <label htmlFor='password'>Password</label>
      <input type='password' onChange={handleChange} value={state.password} name='password' />

      <br />
      <input type='radio' onChange={handleChange} value='male' defaultChecked={state.gender === "male"} name='gender' />
      <label>Male</label>
      <br />
      <input
        type='radio'
        onChange={handleChange}
        value='female'
        defaultChecked={state.gender === "female"}
        name='gender'
      />
      <label>Female</label>
      <br />
      <input
        type='radio'
        onChange={handleChange}
        value='other'
        defaultChecked={state.gender === "other"}
        name='gender'
      />
      <label>Other</label>
      <br />
      <label htmlFor='study'></label>
      <select name='study' value={state.study} onChange={handleChange}>
        <option value='ssc'>
          10<sup>th</sup>
        </option>
        <option value='12th'>
          12 <sup>th</sup>
        </option>
        <option value='UG'>UG</option>
        <option value='PG'>PG</option>
      </select>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormState;
