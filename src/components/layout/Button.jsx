import React from "react";

const Button = ({ children, type }) => {
  return (
    <button
      className="flex items-center justify-center w-full gap-2 text-xl font-bold text-center text-white duration-200 rounded-lg h-14 bg-blue hover:-translate-y-1"
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
