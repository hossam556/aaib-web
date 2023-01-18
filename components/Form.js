import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikInput from "../components/FormikInput";
import Select2 from "./Select2";
import TextInput from "./TextInput";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),
  //   email: Yup.string().email("Invalid email").required("Required"),
  test: Yup.string().required("Required"),
  country: Yup.object({
    label: Yup.string().required("label req"),
    value: Yup.string().required("value req"),
  }),
});

const options = [
  { value: "Brazil", label: "Brazil" },
  { value: "Argentine", label: "Argentine" },
];

const DisplayingErrorMessagesExample = () => {
  return (
    <div>
      {/* <h1>Displaying Error Messages</h1> */}
      <Formik
        initialValues={{
          //   username: "",
          //   email: "",
          test: "",
          country: {
            label: "",
            value: "",
          },
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          handleChange,
          values,
          setFieldValue,
        }) => (
          <Form>
            {/* <FormikInput name="username" placeholder="name..." />
            <FormikInput
              name="email"
              placeholder="enter email..."
              classes="my-3"
            /> */}
            <Select2
              name="country"
              options={options}
              onChange={(val) => setFieldValue("country", val)}
              value={values.country}
              //   placeholder={{ label: "choose country", value: "choose country" }}
            />
            {/* <Select2
              name="country"
              options={options}
              onChange={(val) =>
                handleChange({ target: { value: val, name: "country" } })
              }
              value={values.country}
            /> */}
            {touched.country && errors.country && (
              <div className="text-red-500">{errors.country.value}</div>
            )}

            <TextInput
              label="name"
              name="test"
              onChange={(e) => setFieldValue("test", e.target.value)}
              error={touched.test && errors.test ? errors.test : ""}
            />
            {/* {touched.test && errors.test && (
              <div className="text-red-500">{errors.test}</div>
            )} */}

            <button
              type="submit"
              className="px-3 py-2 my-2 text-white bg-green-600 rounded-md"
            >
              Submit
            </button>
            {/* <button type="button" onClick={() => handleSubmit()}>
            test
          </button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DisplayingErrorMessagesExample;
