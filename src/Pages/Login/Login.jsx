import Button from "../../Components/Button/Button";
import "./Login.css";
import google from "../../Assets/google.svg";
import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Overlay from "../../Components/Overlay/Overlay";
import axios from 'axios';
import { Link } from "react-router-dom";
import SignUp from "../Signup/Signup";

const loginStyle = {
  width: "100%",
  height: "41px",
  background: "#FCBC0E",
  color: "#fff",
  borderRadius: "8px",
  border: "none",
  fontFamily: 'DM Sans',
  fontSize: '19px',
  fontWeight: '700',
};
const Login = ({ show, closeModal }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    }
    ,
    remember: "",
    //validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min("8")
        .max("20 ")
        .required("Password is required"),
      remember: Yup.array(),
    }),
    //submit form
    onSubmit: (values, onSubmitProps) => {
      console.log(values);
      console.log(values.password);
      // let data = {...values}
      axios.post('https:easyrent.onrender.com/users/login', values)
      .then(res => {
        console.log(res.data)
        // setToken(res.data.token)
      })
      .catch(err => console.log(err))
      console.log(values)
      onSubmitProps.resetForm()
    },
  });
  // console.log(formik.errors);


  const googleLoginHandler = () =>  {
    axios.get('https://easyrent.onrender.com/users/auth/google')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  const facebookLoginHandler = () =>  {
    axios.get('https://easyrent.onrender.com/users/auth/facebook')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  const twitterLoginHandler = () =>  {
    axios.get('https://easyrent.onrender.com/users/auth/twitter/oauth')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }



  return (
    <>
    <Overlay OverlayShow={show} overlayClick={closeModal}/>
    <div className="login-container" style={{transform: show ? 'translateY(0)':'translateY(-100vh)', opacity: show ? '1':'0'}}>
      <h3 className="login-heading">Login</h3>
      <p className="login-paragraph">Fill the information below to signup</p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label
            htmlFor="login-email"
            className={
              formik.touched.email && formik.errors.email
                ? "login-email-error"
                : "login-email"
            }
          >
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : "Email Address"}
          </label>
          <input
            type="text"
            id="login-email"
            className="login-email-input"
            placeholder="Enter email address..."
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label
            htmlFor="login-password"
            className={
              formik.touched.password && formik.errors.password
                ? "login-password-error"
                : "login-password"
            }
          >
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : "Password"}
          </label>
          <input
            type="password"
            id="login-password"
            className="login-password-input"
            placeholder="Enter Password..."
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="login-checkbox-flex">
          <div className="checkbox-label-container">
            <input
              type="checkbox"
              name="checkbox"
              id="login-checkbox"
              className="login-checkbox"
              value={formik.values.remember}
              onChange={formik.handleChange}
            />
            <label htmlFor="login-checkbox" className="checkbox-label">
              Remember Me
            </label>
          </div>
          <p className="login-forgot-password">Forgot Password?</p>
        </div>
        <Button style={loginStyle} text={"Login"} btnclass={'submit-btn'} />
      </form>
      <p className="login-account-paragraph">
        Don’t have an account yet?{" "}
        <Link to={'SignUp'}><span className="login-signup">Sign Up</span></Link>
      </p>
      <p className="login-switch">Or Login with </p>
      <div className="login-social-logos">
        <img src={google} alt="google logo" className="login-google" onClick={googleLoginHandler}/>
        <img src={facebook} alt="facebook logo" className="login-facebook" onClick={facebookLoginHandler}/>
        <img src={twitter} alt="twitter logo" className="login-twitter" onClick={twitterLoginHandler}/>
      </div>
      <span className="times" onClick={closeModal}>&times;</span>
    </div>
    </>
  );
};

export default Login;
