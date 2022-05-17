import React from "react";
import "./button.css"

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="inline-flex items-center rounded px-4 py-2 font-semibold focus:outline-none focus-visible:ring focus-visible:ring-primary-500 shadow-sm bg-primary-500 text-white border border-primary-600 hover:bg-primary-600 hover:text-white active:bg-primary-500 disabled:bg-primary-400 disabled:hover:bg-primary-400">
      {props.label}
    </button>
  );
};

export default Button;
