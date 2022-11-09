import Button from "../../Components/Button/Button";
import "./Login.css";
import google from "../../Assets/google.svg";
import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const loginStyle = {
  width: "100%",
  height: "41px",
  background: "#FCBC0E",
  color: "#fff",
  borderRadius: "8px",
  border: "none",
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
        .required("email address is required"),
      password: Yup.string()
        .min("8")
        .max("20 ")
        .required("password is required"),
      remember: Yup.array(),
    }),
    //submit form
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);

  return (
    <div className="login-container">
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
            placeholder="Enter email adress..."
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
        <Button style={loginStyle} text={"Login"} />
      </form>
      <p className="login-account-paragraph">
        Don’t have an account yet?{" "}
        <span className="login-signup">Sign Up.</span>
      </p>
      <p className="login-switch">Or Login with </p>
      <div className="login-social-logos">
        <img src={google} alt="google logo" />
        <img src={facebook} alt="facebook logo" className="login-facebook" />
        <img src={twitter} alt="twitter logo" />
      </div>
      <span className="times">&times;</span>
    </div>
  );
};

export default Login;
