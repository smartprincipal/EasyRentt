import './Button.css'
const Button = ({style, text, btnclass, btnClick, icon}) => {
  return (
    <div>
        <button className={btnclass} type='submit'style={style} onClick={btnClick}>
            {text} <img src={icon} alt=""  />
        </button>
    </div>
  )
}

export default Button