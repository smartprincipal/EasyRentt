import { useState } from 'react';
import './CatalogueCard.css'
import Button from '../Button/Button'
import locateIcon from '../../Assets/location-icon.svg'
import imgtab from '../../Assets/imgtab.png'
import ShareIcon from '../../Assets/shareIcon.svg'
import Likebutton from "../Button/LikeButton/Likebutton";
import {EmailShareButton, FacebookShareButton,  TwitterShareButton, WhatsappShareButton, EmailIcon, FacebookIcon, TwitterIcon, WhatsappIcon,} from "react-share";
import { FaTimesCircle } from 'react-icons/fa';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaBed } from 'react-icons/fa';
import { BiBath } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const CatalogueCard = ({location, catcardmaindiv, cardtype}) => {

  const viewBlack={
    background:"#0B0000",
    borderRadius: "30px",
    width: "120px",
    height: "40px",
    fontFamily: "Inter",
    fontSize: "12px",
    fontWeight: "500px",
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#fff",
    border: "none"
  };

   //Usestate for Share button
   const [shareToggle, setShareToggle] = useState(false)

   const handleShareToggle = () => {
     return setShareToggle(prevToggle =>!prevToggle)
   };

  const sharedUrl = 'https://easy-rentt.vercel.app';

  const timesButtonStyle = { fontSize: "2rem", cursor: 'pointer' };
  const bedBathIcon = { color: "grey"}

  return (
    <div className='catCard'>
      <div className={catcardmaindiv}>
        <div className='catlocationdiv'>
          <img src={locateIcon} alt="location"/>
          <p>{location}</p>
        </div>
        <img src={imgtab} className='imgtab'alt="imgtab"  />
      </div>
      <div className='catcardfooterdiv'>
          <div className='catcardsubdiv1'>
              <p>{cardtype}</p>
              <p><TbCurrencyNaira />205,000,000</p>
          </div>
          <div className='catcardsubdiv2'>
              <div className='bed-div'>
                  <FaBed style={bedBathIcon}/>
                  <p>5 Beds</p>
              </div>
              <div className='bath-div'>
                  <BiBath style={bedBathIcon}/>
                  <p>2 Baths</p>
              </div>
          </div>
          <hr />
          <div className='catcardsubdiv3'>
            <Link to='/Viewmore'>
              <Button style={viewBlack} text={"View details"}/>
            </Link>
              <div className='sharelikediv'>
                  <div onClick={handleShareToggle}>
                    {shareToggle ? <FaTimesCircle style={timesButtonStyle}/> :  <img src={ShareIcon} className='shareimg' alt="share-icon" />}
                  </div>
                  <div className='like-div'>
                    <Likebutton style={timesButtonStyle} />
                  </div>
                  <div className={shareToggle ? 'shareactive' : 'shareinactive' }>
                      <div className='shareicon'>
                        <FacebookShareButton url={sharedUrl}>
                          <FacebookIcon size={25} round={true} />
                        </FacebookShareButton>
                      </div>
                      <div className='shareicon'>
                        <EmailShareButton url={sharedUrl}>
                          <EmailIcon size={25} round={true} />
                        </EmailShareButton>
                      </div>
                      <div className='shareicon'>
                        <TwitterShareButton url={sharedUrl}>
                          <TwitterIcon size={25} round={true} />
                        </TwitterShareButton>
                      </div>
                      <div className='shareicon'>
                        <WhatsappShareButton url={sharedUrl}>
                          <WhatsappIcon size={25} round={true} />
                        </WhatsappShareButton>
                      </div>
            
                    </div>
              </div>
          </div>
      </div>

    </div>
  )
}

export default CatalogueCard