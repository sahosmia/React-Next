import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <p className="bg-red-800 text-white p-2 px-5 font-medium my-5 rounded">
      {message}
    </p>
  );
};

export default ErrorMessage;
