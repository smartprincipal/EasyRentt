import './Button.css'
const Button = ({style, text, btnclass, btnClick}) => {
  return (
    <div>
        <button className={btnclass} type='submit'style={style} >
            {text}
        </button>
    </div>
  )
}

export default Button