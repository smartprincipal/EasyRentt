import './Login.css'

const Login = () => {
  return (
    <div>
        <h3 className='login-heading'>Login</h3>
        <p className='login-paragraph'>Fill the information below to signup</p>
        <form action="">
            <div>
                <label htmlFor="login-email" className='login-email'>Email Address</label>
                <input type="text" id='login-email' className='login-email-input' placeholder='Enter email adress...' name='email'/>
            </div>
            <div>
                <label htmlFor="login-password" className='login-password'>Password</label>
                <input type="text" id='login-password' className='login-password' placeholder='Enter Password...' name='password'/>
            </div>
            <div>
                <div>
                    <input type="checkbox" name="checkbox" id="login-checkbox" />
                    <label htmlFor="login-checkbox">Remember me</label>
                </div>
                <p className='login-'>Forgot Password?</p>
            </div>
        </form>
    </div>
  )
}

export default Login