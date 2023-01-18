import React from "react";

const TextInput = ({
  label,
  className = "",
  placeholder = "Search...",
  name,
  onChange,
  error,
}) => {
  console.log(error);
  return (
    <div>
      {label && <label className="text-red-500">{label}</label>}
      <input
        type="text"
        name={name}
        onChange={onChange}
        className={`px-2 rounded-tl-[0px] rounded-bl-[0px] py-4 h-full border border-gray-500 text-gray-900 text-sm rounded-lg outline-none placeholder:text-lg focus:border-yellow-500 block w-full ${className}`}
        placeholder={placeholder}
      />
      {error && <div className="text-purple-600 ">{error}</div>}
    </div>
  );
};

export default TextInput;
