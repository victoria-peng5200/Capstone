"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "@/app/ui/dashborad/tasks/addtask.module.css";
import { addTaskToDB } from "@/app/utility/action";

const Addtask = () => {
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [isOtherTaskSelected, setIsOtherTaskSelected] = useState(false);
  const [customLocation, setCustomLocation] = useState("");
  const [customTask, setCustomTask] = useState("");

  const handleSelectChange = (e) => {
    const isOther = e.target.value === "other";
    setIsOtherSelected(isOther);
    // Reset or set default value for customLocation when "Other" is selected
    if (isOther) {
      setCustomLocation(""); // Or set a default value like 'Type your location...'
    }
  };
  const handleTaskSelectChange = (e) => {
    const isOther = e.target.value === "other";
    setIsOtherTaskSelected(isOther);
    // Reset or set default value for customLocation when "Other" is selected
    if (isOther) {
      setCustomTask(""); // Or set a default value like 'Type your location...'
    }
  };
  const handleCustomLocationChange = (e) => {
    setCustomLocation(e.target.value);
  };
  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const [startDate, setStartDate] = useState(new Date());

  const generateTimeOptions = (interval) => {
    const times = [];
    for (let hour = 6; hour <= 21; hour++) {
      // Changed loop bounds
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
      <form action={addTaskToDB} className={styles.form}>
        <input type="text" placeholder="First Name" name="fname" required />
        <input type="text" placeholder="Last Name" name="lname" required />
        {/* <input type="text" placeholder="Task" name="" required /> */}
        <select name="task" id="list" onChange={handleTaskSelectChange}>
          <option value="general">Choose a Task</option>
          <option value="yoga">Yoga</option>
          <option value="bike">Bike</option>
          <option value="movie">Movie</option>
          <option value="dinner">Dinner</option>
          <option value="afternoon-tea">Afternoon Tea</option>
          <option value="reading">Reading</option>
          <option value="cooking">Cooking </option>
          <option value="basketball">Basketball</option>
          <option value="other">Other</option>
        </select>
        {isOtherTaskSelected && (
        <input
          type="text"
          placeholder="Enter Task"
          name="task"
          value={customTask}
          onChange={handleCustomTaskChange}
        />
      )}

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          name="date"
          dateFormat="MMMM d, yyyy"
          className="calendar"
          calendarClassName="my-datepicker-calendar"
        />
        <select name="startTime" required>
          <option value="">Select Start Time</option>
          {timeOptions.map((time, index) => (
            <option key={`start-${index}`} value={time}>
              {time}
            </option>
          ))}
        </select>

        <select name="endTime" required>
          <option value="">Select End Time</option>
          {timeOptions.map((time, index) => (
            <option key={`end-${index}`} value={time}>
              {time}
            </option>
          ))}
        </select>

        <select name="location" id="location" onChange={handleSelectChange}>
          <option value="general">Choose a Location</option>
          <option value="building-1">Building #1</option>
          <option value="fitness-center">Fitness Center</option>
          <option value="main-floor">Main floor</option>
          <option value="building-2">Building #2</option>
          <option value="swimming-pool">Swimming Pool</option>
          <option value="park">Park</option>
          <option value="other">Other</option>
        </select>
        {isOtherSelected && (
          <input
            type="text"
            placeholder="Enter custom location"
            name="location"
            value={customLocation}
            onChange={handleCustomLocationChange}
          />
        )}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Addtask;
