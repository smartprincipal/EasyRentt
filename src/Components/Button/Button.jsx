import './Button.css'
const Button = ({style, text, btnClick}) => {
  return (
    <div>
        <button style={style} onClick='btnClick'>
            {text}
        </button>
    </div>
  )
}

export default Button