import React from "react";
import { Field, useFormikContext } from "formik";

const FormikInput = ({ name, placeholder, classes }) => {
  const { errors, touched, values } = useFormikContext();

  const showError = touched[name] && errors[name];

  //   console.log(values);

  return (
    <div className={`${classes}`}>
      <Field
        name={name}
        placeholder={placeholder}
        className={`border border-black rounded-md h-[50px] px-2 outline-none focus:border-blue-600 ${
          showError ? "border-red-500" : ""
        }`}
      />
      {showError && <div className="text-red-500">{errors[name]}</div>}
    </div>
  );
};

export default FormikInput;
