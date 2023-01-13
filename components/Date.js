import React, { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from 'dayjs';
import TextField from "@mui/material/TextField";
import TextInput from "./TextInput";

const Date = () => {
  const [value, setValue] = React.useState("2014-08-18T21:11:54");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        shouldDisableYear={(year) => false}
        openTo="day"
        // InputProps={{ className: { color: "red" } }}
      />
    </LocalizationProvider>
  );
};

export default Date;
