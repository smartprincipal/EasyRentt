import './Calendar.css'
import React, { useState } from 'react';
import Calendarlib from "@fall-out/react-calendar";
import "@fall-out/react-calendar/dist/Calendar.css";

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='calendarOn'>
      <Calendarlib onChange={onChange} value={value} />
    </div>
  )
}

export default Calendar