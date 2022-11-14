import './Button.css'
const Button = ({style, text, btnClick}) => {
  return (
    <div>
        <button className='submit-btn' type='submit'style={style} >
            {text}
        </button>
    </div>
  )
}

export default Button