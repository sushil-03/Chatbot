import React from "react";

function Input(props) {
  return (
    <input
      {...props}
      className={`block my-1 rounded-3xl p-2 text-sm border-2  outline-none  
      ${
        props.error
          ? "border-red-600 bg-red-500 placeholder:text-white  text-white"
          : "border-gray-300 hover:border-black focus:border-black  "
      }`}
    />
  );
}

export default Input;
