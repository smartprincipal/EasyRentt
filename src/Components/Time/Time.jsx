import React from 'react'
import TimePicker from 'react-dropdown-timepicker';

const Time = () => {
  return (
    <div>
     <TimePicker
         time={this.state.time}
         onChange={this.handleTimeChange.bind(this)} />
    </div>
  )
}

export default Time