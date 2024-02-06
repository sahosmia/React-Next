import React, { useState } from "react";

export default function FormDescription({
  description,
  setDescription,
  errorMessage,
}) {
  // const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
    // setErrorMessage(
    //   e.target.value === "" ? "Description filed is required" : ""
    // );
    // setError(e.target.value === "" ? true : false);
  };
  return (
    <div className="space-y-2 lg:space-y-3">
      <label htmlFor="description">Description</label>
      <textarea
        className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={handleChange}
      ></textarea>
      {errorMessage !== "" && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
}
