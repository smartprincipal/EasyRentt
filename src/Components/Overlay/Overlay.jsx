import './Overlay.css'

const Overlay = ({OverlayShow, overlayClick}) => {
  return (
    OverlayShow ? <div className='overlay-main-container' onClick={overlayClick}>

    </div> : null
  )
}

export default Overlay