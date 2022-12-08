import './Signup.css';
// import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Overlay from '../../Components/Overlay/Overlay';

import facebook from '../../Assets/facebook.svg';
import twitter from '../../Assets/twitter.svg';
import google from '../../Assets/google.svg';

import { useFormik } from 'formik';
import * as Yup from "yup";



function SignUp ({openModal, closeModal}) {
   // Formik logic statement
    const initialValues = {username: "", email: "", password: "", confirmPassword: ""};
    const formik = useFormik({initialValues, 

        // Formik Submit 
        onSubmit: (values) => {
            console.log(values)

        //     const user = inputValues;
        // console.log(user)
            axios.post("https://easyrent.onrender.com/users/signup", values)
            .then(res => {
                console.log(res);
                console.log(res.data);
                
            }).catch(err => console.log(err))
        },

        // Validation of form values
        validationSchema: Yup.object({
            username: Yup.string()
                .min(3, "Username must have at least 3 character")
                .max(15, "Username must not exceed 15 character")
                .required("Provide a username")
            ,
            email: Yup.string()
                .email("Provide a valid email address")
                .required("Enter an email address")
            ,
            password: Yup.string()
                .min(8, "Password character must have at least 8 characters")
                .max(20, "Password character must not exceed 20 characters")
                .required("Enter a password with 8-20 characters")
            ,
            confirmPassword: Yup.string()
            .min(8, "Password character must have at least 8 characters")
            .max(20, "Password character must not exceed 20 characters")
            .required("Confirm your password")
        })
    });

    
    
     
    // const validate = (values) => {
    //     const errors = {};
    //     // const nameRegex = /^([A-Za-z0-9]).{5,20}$/;
    //     const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //     const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
    //     if(!values.username) {
    //         errors.username = "Enter your first name";
    //     } else if(values.username.length < 5) {
    //         errors.username = "First name must be more than five(5) characters"
    //     }
    //     if(!values.email) {
    //         errors.email = "Enter your e-mail address";
    //     } else if(!regex.test(values.email)) {
    //         errors.email = "This is not a valid email address";
    //     }
    //     if(!values.password) {
    //         errors.password = "Create a password, it is required";
    //     } else if(values.password.length < 8) {
    //         errors.password = "Password characters must be more than eight(8)";
    //     } else if(values.password.length > 20) {
    //         errors.password = "Password characters must not be more than twenty(20)";
    //     } else if(passwordRegex.test(values.password)) {
    //         errors.password ="Password must have a number, capital letter and a special character"
    //     }
    //     if(!values.confirmPassword) {
    //         errors.confirmPassword = "Confirmed your password";
    //     } else if(values.confirmPassword !== values.password) {
    //         errors.confirmPassword = "Password not matched...";
    //     };
    //     return errors;
    // }

    // useEffect(()=> {
    //     console.log(inputErrors);
    //     if(Object.keys(inputErrors).length === 0 && isSubmit)    {
    //         // console.log(inputValues)
    //     }
    // }, [inputErrors]
    // );

    

    // const handleBlur =(e) => {
    //     setInputErrors(validate(inputValues));
    //     setFocused(true)
              
    // }

    return (
    <>
    <Overlay OverlayShow={openModal} overlayClick={closeModal} />
    <div className="login-form" style={{transform: openModal ? 'translateY(0)':'translateY(-100vh)', opacity: openModal ? '1':'0'}}>
       
        
        <h2 className="sign_head">
            Sign Up
        </h2>

        <p className="p-head">
            
            Fill the information below to signup
        </p>

        <form className="signup_form" onSubmit={formik.handleSubmit}>
            <div className="input-wrap">
                <label className={formik.touched.username && formik.errors.username ? "small_tag" : "input_label"} htmlFor= "username">
                    {formik.errors.username ? formik.errors.username :  "Username"}
                </label>
                <input className="input_type" type="text" value={formik.values.username} onChange={formik.handleChange} id="firstName" name="username" placeholder="Enter username..." onBlur={formik.handleBlur} />
                <small className="small_tag"></small>
            </div>

           <div className="input-wrap">
            <label className={formik.touched.email && formik.errors.email ? "small_tag" : "input_label"} htmlFor="email">
            {formik.errors.email ? formik.errors.email :  "Email address"}
            </label>
                <input className="input_type" type="email" value={formik.values.email} onChange={formik.handleChange} id="eMail" name="email" placeholder="Enter email address..." onBlur={formik.handleBlur} />
                <small className="small_tag"></small>
            </div>
            
            <div className="input-wrap">
                <label className={formik.touched.password && formik.errors.password ? "small_tag" : "input_label"} htmlFor="password">
                    {formik.errors.password ? formik.errors.password :  "Password"}
                </label>
                <input className="input_type" type="password" value={formik.values.password} onChange={formik.handleChange} id="password" name="password" placeholder="Password" onBlur={formik.handleBlur} />
                <small className="small_tag"></small>
            </div>
    
            <div className="input-wrap">
                <label className={formik.touched.confirmPassword && formik.errors.confirmPassword ? "small_tag" : "input_label"} htmlFor="confirmedPassword">
                {formik.errors.confirmPassword ? formik.errors.confirmPassword : "Confirm Password"}
                </label>
                <input className="input_type" type="password" value={formik.values.confirmPassword} onChange={formik.handleChange} id="password" name="confirmPassword" placeholder="Confirmed password..." onBlur={formik.handleBlur}/>
                <small className="small_tag"></small>
            </div>
            <button className="signButton" type="submit">Sign Up</button>
    
            
        </form>

        <p className="hav-acct">Already have an account?
            <span className="login">
             <Link to="/">Login.</Link>
            </span>
        </p>

        <p className="or-opt"><span className="or">Or</span><br/>
        Sign up with
        
         </p>
            
        <div className="login-opt">
            <Link to="/">
                <img className="m-icon m-icon2" src={google} alt="google icon" />
            </Link>
            
            <Link to="/">           
                <img className="m-icon" src={facebook} alt="facebook icon" />
            </Link>

            <Link to="/">
             <img className="m-icon m-icon2" src={twitter} alt="twitter icon" />
            </Link>
            
        </div>
        
        {/* close icon */}
        <div className='close_icon'>
            
            <span className='x-icon' onClick={closeModal}>&times;</span>             
            
        </div>
        
    </div>
    </>
    )
}

export default SignUp;