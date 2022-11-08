import Button from '../../Components/Button/Button'
import './Login.css'
import google from '../../Assets/google.svg'
import facebook from '../../Assets/facebook.svg'
import twitter from '../../Assets/twitter.svg'

const loginStyle = {width:'100%', height: '41px',background: '#FCBC0E', color: '#fff', borderRadius: '8px', border: 'none'}
const Login = () => {
  return (
    <div className='login-container'>
        <h3 className='login-heading'>Login</h3>
        <p className='login-paragraph'>Fill the information below to signup</p>
        <form action="">
            <div>
                <label htmlFor="login-email" className='login-email'>Email Address</label>
                <input type="text" id='login-email' className='login-email-input' placeholder='Enter email adress...' name='email'/>
            </div>
            <div>
                <label htmlFor="login-password" className='login-password'>Password</label>
                <input type="text" id='login-password' className='login-password-input' placeholder='Enter Password...' name='password'/>
            </div>
            <div className='login-checkbox-flex'>
                <div className='checkbox-label-container'>
                    <input type="checkbox" name="checkbox" id="login-checkbox" className='login-checkbox'/>
                    <label htmlFor="login-checkbox" className='checkbox-label'>Remember Me</label>
                </div>
                <p className='login-forgot-password'>Forgot Password?</p>
            </div>
            <Button style={loginStyle} text={'Login'} />
        </form>
        <p className='login-account-paragraph'>Don’t have an account yet? <span className='login-signup'>Sign Up.</span></p>
        <p className='login-switch'>Or Login with </p>
        <div className='login-social-logos'>
            <img src={google} alt="google logo" /><img src={facebook} alt="facebook logo" className='login-facebook'/><img src={twitter} alt="twitter logo" />
        </div>
        <span className='times'>&times;</span>
    </div>
  )
}

export default Login