import React from "react";

function Input(props) {
  return (
    <input
      {...props}
      className="block my-1 rounded-3xl p-2 text-sm border-2 border-gray-300 outline-none  focus:border-black hover:border-black"
    />
  );
}

export default Input;
