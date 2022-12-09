import '../DetailsForm/DetailsForm.css'
import Button from '../Button/Button';
import {useFormik} from Formik;
import { useFormik } from 'formik';
import * as Yup from "yup"




function DetailsForm () {
    return(
        
        <form className="payforms_wrapper">
            <h2 className="tag_h2">Personal Information</h2>
            {/* Personal Information - PIform */}
            <div className="PI_form">
            
                <div className="PIform_left">
                    <div className="pay_input">
                        <label class="tag_label" htmlFor="Title">Title</label>
                        <select className='titled_select'>
                            <option value=''>Select</option>
                            <option value='Mr.'>Mr</option>
                            <option value='Mrs'>Mrs</option>
                            <option value='Miss'>Miss</option>
                            <option value='Chief'>Chief</option>
                        </select>
                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="first_name">First name*</label>
                        <input className="tag_input" type="text" name="first_name" placeholder="First Name" />
                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="middle_name">Middle name*</label>
                        <input className="tag_input" type="text" name="middle_name" placeholder="Middle Name" />
                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="middle_name">Last name</label>
                        <input className="tag_input" type="text" name="last_name" placeholder="Last Name" />
                    </div>
                    <div className='pay_input'>

                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="marital_status">Marital Status</label>
                        <select className='tag_select'>
                            <option value=''>Select</option>
                            <option value='Single'>Single</option>
                            <option value='Married'>Married</option>
                            <option value='Divorced'>Divorced</option>
                            <option value='Widowed'>Widowed</option>
                        </select>
                    </div>  
                </div>
                
                <div className="PIform_right">
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="phone">Phone Number</label>
                            <input className="tag_input" type="phone" name="phone" placeholder="Phone Number" />
                    </div>
                    <div className='pay_input'>

                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="email">Email address</label>
                            <input className="tag_input" type="email" name="email" placeholder="Email address" />
                        </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="date">Move in Date</label>
                            <input className="tag_input" type="date" name="date" placeholder="Move in date " />
                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="lease_term">Lease Terms (month)</label>
                            <input className="tag_input" type="number" name="lease_term" placeholder="Lease terms (month)" />
                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="prefer">Preferred name</label>
                            <input className="tag_input" type="text" name="prefer" placeholder="Preferred name" />
                    </div>
                </div>
            </div>


            {/* Address Infromation - Add_I */}
            <h2 className="tag_h2">Address Information</h2>
            <div className="Add_I">
                <div className="Add_I_left">
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="country">Country</label>
                            <select className='
        tag_select'>
                                <option value=''>Country</option>
                                <option value='Nigeria'>Nigeria</option>
                                <option value='Ghana'>Ghana</option>
                                <option value='Mali'>Mali</option>
                                <option value='Benin Republic'>Benin Republic</option>
                            </select> 
                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="address">Address</label>
                            <input className="tag_input" type="text" name="address" placeholder="Address" />
                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="city">City</label>
                            <input className="tag_input" type="text" name="city" placeholder="City" />
                    </div>
                    <div className='pay_input'>

                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="apt_comm">Apartment Community</label>
                            <input className="tag_input" type="text" name="apt_comm" placeholder="Apartment Community" />
                    </div>
                    
                </div>

                <div className="Add_I_right">
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="res_from">Residence from</label>
                            <input className="tag_input" type="text" name="res_from" placeholder="Residence from" />
                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="mth_pay">Monthly Rent Payment</label>
                            <input className="tag_input" type="text" name="mth_pay" placeholder="Monthly Rent Payment" />
                    </div>
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="reas_move">Reasons for moving</label>
                            <input className="tag_input" type="text" name="reas_move" placeholder="Reasons for moving" />
                    </div>
                </div>
            </div>

            {/* Employment Information - Emp_I */}
            <h2 className="tag_h2">Employment Infromation</h2>
            <div className="Emp_I">
                <div className="Emp_I_left">
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="country">Country</label>
                            <select className='
        tag_select'>
                                <option value=''>Country</option>
                                <option value='Nigeria'>Nigeria</option>
                                <option value='Ghana'>Ghana</option>
                                <option value='Mali'>Mali</option>
                                <option value='Benin Republic'>Benin Republic</option>
                            </select>
                    </div> 
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="emp_status">Employment Status</label>
                            <select className='
        tag_select'>
                                <option value=''>Select</option>
                                <option value='Employed'>Employed</option>
                                <option value='Unemployed'>Unemployed</option>
                            </select>    
                    </div> 
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="job_titled">Job Titled</label>
                            <input className="tag_input" type="text" name="job_titled" placeholder="Job Titled" />
                    </div> 
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="empld_since">Employed Since</label>
                            <input className="tag_input" type="text" name="empld_since" placeholder="Employed since" />    
                    </div>      
                </div>
                <div className="Emp_I_right">
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="employer">Employer</label>
                            <input className="tag_input" type="text" name="employer" placeholder="Employed since" />    
                    </div> 
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="comp_add">Company Address</label>
                            <input className="tag_input" type="text" name="comp_add" placeholder="Company Address" />    
                    </div> 
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="emp_phone">Employer's phone</label>
                            <input className="tag_input" type="phone" name="emp_phone" placeholder="Employer's phone" />
                    </div> 
                    <div className='pay_input'>
                        <label class="tag_label" htmlFor="add_income">Employed Since</label>
                            <input className="tag_input" type="text" name="add_income" placeholder="Addition Income" />    
                    </div> 
                </div>
            </div>

            {/* Pet Information */}
            <h2 className="tag_h2">Pet Infromation</h2>
            <div className='veh_Info'>
                <p>Do you have any Pet?*</p>
                <div className="veh_check">
                    <div className='input_radio'>
                        <input className="type_radio" type="radio" />
                            <label htmlFor="yes">Yes</label>
                    </div>   
                    <div className='input_radio'>
                        <input className="type_radio" type="radio" />
                            <label htmlFor="no">No</label>    
                    </div>   
                </div>
            </div>

            {/* Vehicle Information */}
             <h2 className="tag_h2 btm_h2">Vehicle Information</h2>  
            <div className='veh_Info'>
                <p>Do you have any vehicle?*</p>
                <div className="veh_check">
                    <div className='input_radio'>
                        <input className="type_radio" type="radio" />
                            <label htmlFor="yes">Yes</label>
                    </div>   
                    <div className='input_radio'>
                        <input className="type_radio" type="radio" />
                            <label htmlFor="no">No</label>    
                    </div>   
                </div>
            </div>

            {/* Agreement */}
            <h2 className="tag_h2 btm_">Agreement</h2>
            <div className="input_check">
                <input className="type_check" type='checkbox' name='agreement' />
                <label htmlFor="checkbox2" className='label_check'> By signing this application I agree that the Information provided in this application is true and correct* <br/> Use your Mouse or finger to sign in the boxes or Choose a script signature.
                </label>
            </div>

            {/* Save and Save & Continue buttons */}
            <div className="buttons">
                <Button
                    text={"Save"}
                    style={{
                    background: "#0B0000",
                    borderRadius: "16px",
                    padding: "5px 20px",
                    color: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    }}
                />
                <Button
                    text={"Save & Continue"}
                    style={{
                    padding: "8px 20px",
                    background: "#FFC100",
                    borderRadius: "15px",
                    border: "none",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    }}
                />
            </div>

        </form>
    )
};

export default DetailsForm;