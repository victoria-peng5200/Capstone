
import { updateMyTask } from "@/app/utility/action";
import { fetchTask } from "@/app/utility/data";
import styles from "@/app/ui/dashborad/tasks/onetask.module.css"
import Image from "next/image";


const OnetaskPage = async ({ params }) => {
  const { id } = params;
  const task = await fetchTask(id);

  const generateTimeOptions = (interval) => {
    const times = [];
    for (let hour = 6; hour <= 21; hour++) { // Changed loop bounds
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
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {task.task}
      </div>
      <div className={styles.formContainer}>
        <form action={updateMyTask} className={styles.form}>
          <input type="hidden" name="id" value={task.id} />
          <label>Frist Name</label>
          <input type="text" name="fname" placeholder={task.fname} />
          <label>Last Name</label>
          <input type="text" name="lname" placeholder={task.lname} />
          <label>Task</label>
          <input type="text" name="task" placeholder={task.task} />
          <label>Date</label>
          <input type="date" name="date" value={task.date} placeholder={task.date}/>
          <label>Start Time</label>
          <select name="startTime" id="startTime">
          <option >{task.startTime}</option>
          {timeOptions.map((time, index) => (
            <option key={`start-${index}`} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label>End Time</label>
        <select name="endTime" id="endTime" >
          <option >{task.endTime}</option>
          {timeOptions.map((time, index) => (
            <option key={`end-${index}`} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label>location</label>
          <input type="text" name="location" placeholder={task.location} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default OnetaskPage;
