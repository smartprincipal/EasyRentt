import React from 'react'
import './Calendar.css';
import AppointmentPicker from 'appointment-picker';

class AppoPicker extends React.Component {
 
 constructor(props) {
   super(props);
   this.pickerRef = React.createRef();
   this.onTimeSelect = this.onTimeSelect.bind(this);
 }
 
 render() {
   return <input type="text" ref={ this.pickerRef }></input>;
 }

 onTimeSelect(event) {
   console.log(event.time);
 }
 
 componentDidMount() {
   this.picker = new AppointmentPicker(this.pickerRef.current, {});
   this.pickerRef.current.addEventListener('change.appo.picker', this.onTimeSelect);
 }
 
 componentWillUnmount() {
   this.pickerRef.current.removeEventListener('change.appo.picker', this.onTimeSelect);
   this.picker.destroy();
 }
}

export default Calendar