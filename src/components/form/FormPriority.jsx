import { useState } from "react";

export default function FormPriority({ priority, setPriority, setError }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setPriority(e.target.value);
    setErrorMessage(e.target.value === "" ? "Priority filed is required" : "");
    setError(e.target.value === "" ? true : false);
  };
  const priorityList = ["Low", "Medium", "High"];
  return (
    <div className="space-y-2 lg:space-y-3">
      <label htmlFor="priority">Priority</label>
      <select
        className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
        name="priority"
        id="priority"
        value={priority}
        onChange={handleChange}
      >
        <option value="">Select Priority</option>
        {priorityList.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      {errorMessage !== "" && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
}
