import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const Calender = ({ label }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [active, setActive] = useState(false);

  return (
    <div className="">
      <label htmlFor="date">{label}</label>
      <button
        type="button"
        id="date"
        onClick={() => setActive(!active)}
        className={`date-picker_input ${active ? "" : "inactive"}`}
      >
        {startDate ? (
          <span>{moment(startDate).format("DD MMM, YYYY ")}</span>
        ) : (
          <span className="text-red-400">select</span>
        )}
        {!active && startDate ? (
          <div
            onKeyDown={() => null}
            role="button"
            tabIndex={0}
            className="date-picker_input_clear"
            onClick={(e) => {
              e.stopPropagation();
              //   onClear();
            }}
          >
            clear
          </div>
        ) : (
          <span>Icon</span>
        )}
      </button>
      {active && (
        <DatePicker
          selected={startDate}
          calendarClassName="date-picker_calendar"
          minDate={new Date()}
          onChange={(dates) => {
            setStartDate(dates);
            setActive(false);
          }}
          disabledKeyboardNavigation
          inline
        />
      )}
    </div>
  );
};

export default Calender;
