import React from "react";
import Select from "react-select";

const Select2 = ({ withIcon = true, className, options, onChange, label }) => {
  const optionWithPicture = (option) => {
    return (
      <div className="flex items-center">
        <div>{option.icon}</div>
        <div className="mx-2">{option.label}</div>
      </div>
    );
  };

  return (
    <div>
      {label && (
        <label htmlFor="selectInput" className="text-gray-600 block mb-1">
          {label}
        </label>
      )}
      <Select
        id="selectInput"
        className={className}
        instanceId="selectInput"
        options={options}
        onChange={onChange}
        styles={{
          placeholder: (base) => ({
            ...base,
            color: "#7A7F7F",
            fontSize: 16,
            fontWeight: 700,
          }),
          control: (provided, state) => ({
            ...provided,
            padding: "7px",
            // minHeight: 40,
            height: "100%",
            borderRadius: "8px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            border: state.isFocused ? "1px solid #c4ad62" : "1px solid #d0d0d0",
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #c4ad62",
            },
          }),
        }}
        formatOptionLabel={
          withIcon ? (option) => optionWithPicture(option) : false
        }
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default Select2;
