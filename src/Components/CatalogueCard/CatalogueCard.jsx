import { useState } from 'react';
import './CatalogueCard.css'
import Button from '../Button/Button'
import locateIcon from '../../Assets/location-icon.svg'
import imgtab from '../../Assets/imgtab.png'
import Victoria from '../../Assets/Victoria.png';
import ShareIcon from '../../Assets/shareIcon.svg'
import Likebutton from "../Button/LikeButton/Likebutton";
import {EmailShareButton, FacebookShareButton,  TwitterShareButton, WhatsappShareButton, EmailIcon, FacebookIcon, TwitterIcon, WhatsappIcon,} from "react-share";
import FavouriteIcon from '../../Assets/favouriteIcon.svg';
import { FaTimesCircle } from 'react-icons/fa';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaBed } from 'react-icons/fa';
import { BiBath } from 'react-icons/bi';


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

  const sharedUrl = 'www.google.com';

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
              <Button style={viewBlack} text={"View details"}/>
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
     {/* <img src={props.catalogueImg} alt="" classname='catalogueImg'/>
     <div className="cardcontent1">
      <div className="subCardContent1">
       <div>
        <p className='catalogueHead'>{props.catalogueHead}</p>
       </div>
       <div>
        <p className='catalogueAmount'>{props.catalogueAmount}</p>
       </div>
      </div>
      <div className="subCardcontent2">
         <div className="subCardcontent22">
         <div>
         <img src={props.catalogueBedImg} alt="" className='catalogueBedImg'/>
         </div>
         <div>
         <p className='catalogueBed'>{props.catalogueBed}</p>
         </div>
         </div>

         <div className="subCardcontent22">
         <div>
         <img src={props.catalogueBathImg} alt="" className='catalogueBathImg'/>
         </div>
         <div>
         <p className='catalogueBath'>{props.catalogueBath}</p>
         </div>
         </div>
  
      </div>
      <div className="viewSection">
       <div>
        <Button style={viewBlack} text={"View details"}/>
       </div>
       <div className='viewSectionIcon'>
        <div onClick={handleShareToggle}>
          {shareToggle ? <FaTimesCircle style={timesButtonStyle}/> :  <img src={ShareIcon} className='shareimg' alt="share-icon" />}
         
        </div>
        <div>
            <Likebutton  />
        </div>
        <div className={shareToggle ? 'shareactive' : 'shareinactive' }>
          <div className='shareicon'>
            <FacebookShareButton url={sharedUrl}>
              <FacebookIcon size={45} round={true} />
            </FacebookShareButton>
          </div>
          <div className='shareicon'>
            <EmailShareButton url={sharedUrl}>
              <EmailIcon size={45} round={true} />
            </EmailShareButton>
          </div>
          <div className='shareicon'>
            <TwitterShareButton url={sharedUrl}>
              <TwitterIcon size={45} round={true} />
            </TwitterShareButton>
          </div>
          <div className='shareicon'>
            <WhatsappShareButton url={sharedUrl}>
              <WhatsappIcon size={45} round={true} />
            </WhatsappShareButton>
          </div>
            
        </div>
        
       </div>
      </div>
      

     </div> */}

    </div>
  )
}

export default CatalogueCard