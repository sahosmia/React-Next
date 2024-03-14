import React from "react";

const InputField = ({ label, htmlFor, children, error }) => {
  return (
    <div className="flex flex-col my-4">
      <label className="pb-2 font-medium" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
};

export default InputField;
