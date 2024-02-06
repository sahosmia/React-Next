import React, { useState } from "react";

export default function FormTags({ tags = "", setTags, setError }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setTags(e.target.value);
    setErrorMessage(e.target.value === "" ? "Tag filed is required" : "");
    setError(e.target.value === "" ? true : false);
  };
  return (
    <div className="space-y-2 lg:space-y-3">
      <label htmlFor="tags">Tags</label>
      <input
        className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
        type="text"
        name="tags"
        id="tags"
        value={tags}
        onChange={handleChange}
      />
      {errorMessage !== "" && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
}
