import './Signup.css';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Overlay from '../../Components/Overlay/Overlay';

import facebook from '../../Assets/facebook.svg';
import twitter from '../../Assets/twitter.svg';
import google from '../../Assets/google.svg'



function SignUp ({openModal, closeModal}) {
   
    
    const initialValues = {username: "", email: "", password: "", confirmedPassword: ""};
    const [inputValues, setInputValues] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [focused, setFocused] = useState(false);
    
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({...inputValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputErrors(validate(inputValues));
        setIsSubmit(true);
    }

    const handleClick =() => {
        const user = inputValues;
            axios.post(`https://easyrent.onrender.com/users/signup`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(err => console.log(err))
    }
    
    const validate = (values) => {
        const errors = {};
        // const nameRegex = /^([A-Za-z0-9]).{5,20}$/;
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
        if(!values.username) {
            errors.username = "Enter your first name";
        } else if(values.username.length < 5) {
            errors.username = "First name must be more than five(5) characters"
        }
        if(!values.email) {
            errors.email = "Enter your e-mail address";
        } else if(!regex.test(values.email)) {
            errors.email = "This is not a valid email address";
        }
        if(!values.password) {
            errors.password = "Create a password, it is required";
        } else if(values.password.length < 8) {
            errors.password = "Password characters must be more than eight(8)";
        } else if(values.password.length > 20) {
            errors.password = "Password characters must not be more than twenty(20)";
        } else if(passwordRegex.test(values.password)) {
            errors.password ="Password must have a number, capital letter and a special character"
        }
        if(!values.confirmedPassword) {
            errors.confirmedPassword = "Confirmed your password";
        } else if(values.confirmedPassword !== values.password) {
            errors.confirmedPassword = "Password not matched...";
        };
        return errors;
    }

    useEffect(()=> {
        console.log(inputErrors);
        if(Object.keys(inputErrors).length === 0 && isSubmit)    {
            // console.log(inputValues)
        }
    }, [inputErrors]
    );

    

    const handleBlur =(e) => {
        setFocused(true);
              
    }

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

        <form className="signup_form" onSubmit={handleSubmit}>
            <div className="input-wrap">
                <label className="input_label" htmlFor= "username">Username</label>
                <input className="input_type" type="text" value={inputValues.username} onChange={handleChange} id="firstName" name="username" placeholder="Enter username..." onBlur={handleBlur} focused={focused.toString()} />
                <small className="small_tag">{inputErrors.username}</small>
            </div>

           <div className="input-wrap">
            <label className="input_label" htmlFor="email">Email address</label>
                <input className="input_type" type="email" value={inputValues.email} onChange={handleChange} id="eMail" name="email" placeholder="Enter email address..." onBlur={handleBlur} />
                <small className="small_tag">{inputErrors.email}</small>
            </div>
            
            <div className="input-wrap">
                <label className="input_label" htmlFor="password">Password</label>
                <input className="input_type" type="password" value={inputValues.password} onChange={handleChange} id="password" name="password" placeholder="Password" onBlur={handleBlur} />
                <small className="small_tag">{inputErrors.password}</small>
            </div>
    
            <div className="input-wrap">
                <label className="input_label" htmlFor="confirmedPassword">Confirm Password</label>
                <input className="input_type" type="password" value={inputValues.confirmedPassword} onChange={handleChange} id="password" name="confirmedPassword" placeholder="Confirmed password..." onBlur={handleBlur} focused={focused.toString()} />
                <small className="small_tag">{inputErrors.confirmedPassword}</small>
            </div>
            <button className="signButton" type="submit" onClick={handleClick} >Sign Up</button>
    
            
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
    );
}

export default SignUp;