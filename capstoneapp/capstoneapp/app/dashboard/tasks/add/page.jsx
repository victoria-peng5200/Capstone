"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "@/app/ui/dashborad/tasks/addtask.module.css";

const Addtask = () => {
  const [startDate, setStartDate] = useState(new Date());

  const generateTimeOptions = (interval) => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        times.push(time);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions(30);

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="First Name" name="fname" required />
        <input type="text" placeholder="Last Name" name="lname" required />
        <select name="list" id="list">
          <option value="general">Choose a Task</option>
          <option value="yoga">Yoga</option>
          <option value="bike">Bike</option>
          <option value="movie">Movie</option>
          <option value="dinner">Dinner</option>
          <option value="dinner">Afternoon Tea</option>
          <option value="dinner">Reading</option>
        </select>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            name="date"
            dateFormat="MMMM d, yyyy"
            className="my-datepicker"
            calendarClassName="my-datepicker-calendar"
          />

        <select name="start" required>
          <option value="">Select Start Time</option>
          {timeOptions.map((time, index) => (
            <option key={`start-${index}`} value={time}>
              {time}
            </option>
          ))}
        </select>

        <select name="end" required>
          <option value="">Select End Time</option>
          {timeOptions.map((time, index) => (
            <option key={`end-${index}`} value={time}>
              {time}
            </option>
          ))}
        </select>

        <textarea
          name="detail"
          id=""
          cols="30"
          rows="10"
          placeholder="Details..."
        ></textarea>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Addtask;
