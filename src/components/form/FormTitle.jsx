import React, { useState } from "react";

export default function FormTitle({ title, setTitle, errorMessage }) {
  // const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    // setErrorMessage(e.target.value === "" ? "Title filed is required" : "");
    // setError(e.target.value === "" ? true : false);
  };

  return (
    <div className="space-y-2 lg:space-y-3">
      <label htmlFor="title">Title</label>
      <input
        className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={handleChange}
      />
      {errorMessage !== "" && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
}
