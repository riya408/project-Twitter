import React from "react";

function CustomSelect({ data, handleSelect, defaultOption, className }) {
  return (
    <select
      className={className}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option selected disabled>
        {defaultOption}
      </option>
      {data.map((ele) => (
        <option>{ele}</option>
      ))}
    </select>
  );
}

export default CustomSelect;
