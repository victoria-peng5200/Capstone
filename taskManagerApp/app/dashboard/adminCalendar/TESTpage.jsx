"use client"
import './index.css';
import { useEffect, useRef, useState } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import dataSource from './datasource.json';

import { fetchTasks } from "@/app/utility/data";

const AdminCalendarPage = () => {
  const [tasks, setTasks] = useState([]);
  const scheduleObj = useRef(null);

  useEffect(() => {
    const fetchAndSetTasks = async () => {
      const { tasks } = await fetchTasks(null, 1);
      setTasks(tasks);
    };
    
    fetchAndSetTasks();
  }, []);

  const data = extend([], dataSource.zooEventsData, null, true);

  const onEventRendered = (args) => {
    let categoryColor = args.data.CategoryColor;
    if (!args.element || !categoryColor) {
      return;
    }
    if (scheduleObj.current && scheduleObj.current.currentView === 'Agenda') {
      args.element.firstChild.style.borderLeftColor = categoryColor;
    }
    else {
      args.element.style.backgroundColor = categoryColor;
    }
  };

  return (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent
            width='100%'
            height='650px'
            selectedDate={new Date(2021, 1, 15)}
            ref={scheduleObj}
            eventSettings={{ dataSource: data }}
            eventRendered={onEventRendered}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
          </ScheduleComponent>
        </div>
      </div>
    </div>
  );
};

export default AdminCalendarPage;