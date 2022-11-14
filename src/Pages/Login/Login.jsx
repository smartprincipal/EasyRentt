import Button from "../../Components/Button/Button";
import "./Login.css";
import google from "../../Assets/google.svg";
import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Overlay from "../../Components/Overlay/Overlay";

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
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: "",
    },
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
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);

  const show = true
  return (
    <>
    <Overlay />
    <div className="login-container" style={{transform: show?'translateY(100)':'translateY(0)'}}>
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
              value="checked"
              onChange={formik.handleChange}
            />
            <label htmlFor="login-checkbox" className="checkbox-label">
              Remember Me
            </label>
          </div>
          <p className="login-forgot-password">Forgot Password?</p>
        </div>
        <Button style={loginStyle} text={"Login"} btnclass={'submit-btn'}/>
      </form>
      <p className="login-account-paragraph">
        Don’t have an account yet?{" "}
        <span className="login-signup">Sign Up.</span>
      </p>
      <p className="login-switch">Or Login with </p>
      <div className="login-social-logos">
        <img src={google} alt="google logo" className="login-google"/>
        <img src={facebook} alt="facebook logo" className="login-facebook" />
        <img src={twitter} alt="twitter logo" className="login-twitter"/>
      </div>
      <span className="times">&times;</span>
    </div>
    </>
  );
};

export default Login;
