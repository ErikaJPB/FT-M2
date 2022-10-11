import React from "react";
import { useState } from "react";

export const validate = (input) => {
  let errors = {};

  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
};

export default function Form() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    setInput({ ...input, [property]: value });
    setErrors(validate({ ...input, [property]: value }));
  };

  return (
    <form>
        <label>Username:</label>
        <input
        className={errors.username && 'danger'}
          name='username'
          type='text'
          onChange={handleInputChange}
          value={input.username}
        ></input>

        {errors.username && (<p className='danger'>{errors.username}</p>)} 
      
         <hr style= {{borderStyle: 'none'}} />

         <label>Password:</label>
        <input
        className={errors.password && 'danger'}
          name='password'
          type='password'
          onChange={handleInputChange}
          value={input.password}
        ></input>

        {errors.password && (<p className='danger'>{errors.password}</p>)} 
      
      <hr style= {{borderStyle:'none'}} />
      <button 
              onClick={handleInputChange}
              disabled = {errors.username || errors.password}
              > Submit</button>
    </form>
  );
}

//html for : indica que el label corresponde a ese input
