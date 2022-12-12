import './Calendar.css'
import React, { useState } from 'react';
import Calendarlib from "@fall-out/react-calendar";
import "@fall-out/react-calendar/dist/Calendar.css";
// import Time from '../Time/Time'


const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='calendarOn'>
      <Calendarlib onChange={onChange} value={value} />
      {/* <Time/> */}
    </div>
  )
}

export default Calendar