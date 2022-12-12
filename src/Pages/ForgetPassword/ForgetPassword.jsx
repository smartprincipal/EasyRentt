import "./ForgetPassword.css"

import Logo from '../../Assets/EasyRent.svg';
import Button from "../../Components/Button/Button";

const ForgetPassword = () => {
  return (
    <div className="reset_body">
        <div>
            <img className="formLogo" src={Logo} alt="logo" />
        </div>

        <div className="leftArrow">
            <strong className="bk-ent">&#8592;</strong>
            <strong>Back</strong>               
        </div>
        
        <h2 className="reset_H2">Reset Password</h2>
        <p>To reset your password, kindly input your email address.</p>
                
        <form>
            <input className="reset_inputType" type="email" name="firstName" id="email" placeholder="Email" required />
            <Button
                    text={"Reset Password"}
                    style={{
                    padding: "8px 20px",
                    background: "#FFC100",
                    borderRadius: "5px",
                    border: "none",
                    width: "100%",
                    margin: "5px auto",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    }}
                />

            <p className="reset_p">
                Go back to Login page
            </p>
        </form>
    </div>
  )
}

export default ForgetPassword;
