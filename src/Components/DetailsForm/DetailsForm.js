import '../DetailsForm/DetailsForm.css'
import Button from '../Button/Button';

import { useFormik } from 'formik';
// import * as Yup from "yup";



function DetailsForm () {
    

    // const initials = {        
    //     //Personal Information
    //     titled: "",
    //     firstName: "",
    //     middleName: "",
    //     lastName: "",
    //     maritalStatus: "",
    //     email: "",
    //     phone: "", 
    //     date: "",
    //     number: ""
    // }
    const formData = useFormik({
        initials: {        
            //Personal Information
            titled: "",
            firstName: "",
            middleName: "",
            lastName: "",
            maritalStatus: "",
            email: "",
            phone: "", 
            date: "",
            number: ""
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    

    
    return(
        
        <form className="payformsWrapper" onSubmit={formData.handleSubmit}>
            <h2 className="tagH2">Personal Information</h2>
            {/* Personal Information - PIform */}
            <div className="PIForm">
            
                <div className="PIFormLeft">
                    <div className="payInput">
                        <label className="tagLabel" htmlFor="titled">Title</label>
                        <select name="titled"  className='titledSelect'>
                            <option value=''>Select</option>
                            <option value='Mr'>Mr</option>
                            <option value='Mrs'>Mrs</option>
                            <option value='Miss'>Miss</option>
                            <option value='Chief'>Chief</option>
                        </select>
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="firstName">First name*</label>
                        <input className="tagInput" type="text" name="firstName" value={formData.values.firstName} onChange={formData.handleChange}  placeholder="First Name" />
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="middleName">Middle name*</label>
                        <input className="tagInput" type="text" name="middleName" placeholder="Middle Name" />
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="lastName">Last name</label>
                        <input className="tagInput" type="text" name="lastName" placeholder="Last Name" />
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="maritalStatus">Marital Status</label>
                        <select name="maritalStatus" className='tagSelect'>
                            <option value=''>Select</option>
                            <option value='Single'>Single</option>
                            <option value='Married'>Married</option>
                            <option value='Divorced'>Divorced</option>
                            <option value='Widowed'>Widowed</option>
                        </select>
                    </div>  
                </div>
                
                <div className="PIformRight">
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="phone">Phone Number</label>
                            <input className="tagInput" type="phone" name="phone" placeholder="Phone Number" />
                    </div>
                    {/* <div className='payInput'>

                    </div> */}
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="email">Email address</label>
                            <input className="tagInput" type="email" name="email" placeholder="Email address" />
                        </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="date">Move in Date</label>
                            <input className="tagInput" type="date" name="date" placeholder="Move in date" />
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="leaseTerm">Lease Terms (month)</label>
                            <input className="tagInput" type="number" name="leaseTerm" placeholder="Lease terms (month)" />
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="prefer">Preferred name</label>
                            <input className="tagInput" type="text" name="prefer" placeholder="Preferred name" />
                    </div>
                </div>
            </div>


            {/* Address Infromation - Add_I */}
            <h2 className="tagH2">Address Information</h2>
            <div className="Add_I">
                <div className="Add_I_left">
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="country">Country</label>
                            <select name="country" className='tagSelect'>
                                <option value=''>Country</option>
                                <option value='Nigeria'>Nigeria</option>
                                <option value='Ghana'>Ghana</option>
                                <option value='Mali'>Mali</option>
                                <option value='Benin Republic'>Benin Republic</option>
                            </select> 
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="address">Address</label>
                            <input className="tagInput" type="text" name="address" placeholder="Address" />
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="city">City</label>
                            <input className="tagInput" type="text" name="city" placeholder="City" />
                    </div>
                    
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="aptComm">Apartment Community</label>
                            <input className="tagInput" type="text" name="aptComm" placeholder="Apartment Community" />
                    </div>
                    
                </div>

                <div className="Add_I_right">
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="resFrom">Residence from</label>
                            <input className="tagInput" type="text" name="resFrom" placeholder="Residence from" />
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="mthPay">Monthly Rent Payment</label>
                            <input className="tagInput" type="text" name="mthPay" placeholder="Monthly Rent Payment" />
                    </div>
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="reasMove">Reasons for moving</label>
                            <input className="tagInput" type="text" name="reasMove" placeholder="Reasons for moving" />
                    </div>
                </div>
            </div>

            {/* Employment Information - Emp_I */}
            <h2 className="tagH2">Employment Infromation</h2>
            <div className="Emp_I">
                <div className="Emp_I_left">
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="empCountry">Country</label>
                            <select name="empCountry" className='tagSelect'>
                                {/* <option value=''>Country</option> */}
                                <option value='Nigeria'>Nigeria</option>
                                <option value='Ghana'>Ghana</option>
                                <option value='Mali'>Mali</option>
                                <option value='Benin Republic'>Benin Republic</option>
                            </select>
                    </div> 
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="empStatus">Employment Status</label>
                            <select name="empStatus" className='tagSelect'>
                                {/* <option value=''>Select</option> */}
                                <option value='Employed'>Employed</option>
                                <option value='Unemployed'>Unemployed</option>
                            </select>    
                    </div> 
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="jobTitled">Job Titled</label>
                            <input className="tagInput" type="text" name="jobTitled" placeholder="Job Titled" />
                    </div> 
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="empldSince">Employed Since</label>
                            <input className="tagInput" type="text" name="empldSince" placeholder="Employed since" />    
                    </div>      
                </div>
                <div className="Emp_I_right">
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="employer">Employer</label>
                            <input className="tagInput" type="text" name="employer" placeholder="Employed since" />    
                    </div> 
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="compAdd">Company Address</label>
                            <input className="tagInput" type="text" name="compAdd" placeholder="Company Address" />    
                    </div> 
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="empPhone">Employer's phone</label>
                            <input className="tagInput" type="phone" name="empPhone" placeholder="Employer's phone" />
                    </div> 
                    <div className='payInput'>
                        <label class="tagLabel" htmlFor="addIncome">Additional Income</label>
                            <input className="tagInput" type="text" name="addIncome" placeholder="Addition Income" />    
                    </div> 
                </div>
            </div>

            {/* Pet Information */}
            <h2 className="tagH2">Pet Infromation</h2>
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
             <h2 className="tagH2 btm_h2">Vehicle Information</h2>  
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
            <h2 className="tagH2 btm_">Agreement</h2>
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