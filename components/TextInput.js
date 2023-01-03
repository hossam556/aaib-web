import React from "react";

const TextInput = ({ label, className = "", placeholder = "Search..." }) => {
  return (
    <div>
      {label && <label className="text-red-500">{label}</label>}
      <input
        type="text"
        className={`px-2 rounded-tl-[0px] rounded-bl-[0px] py-4 h-full border border-gray-500 text-gray-900 text-sm rounded-lg outline-none placeholder:text-lg focus:border-yellow-500 block w-full ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
