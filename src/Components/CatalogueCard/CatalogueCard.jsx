import { useState } from 'react';
import './CatalogueCard.css'
import Button from '../Button/Button'
import ShareIcon from '../../Assets/shareIcon.svg'
import Likebutton from "../Button/LikeButton/Likebutton";
import {EmailShareButton, FacebookShareButton,  TwitterShareButton, WhatsappShareButton, EmailIcon, FacebookIcon, TwitterIcon, WhatsappIcon,} from "react-share";
import FavouriteIcon from '../../Assets/favouriteIcon.svg';
import { FaTimesCircle } from 'react-icons/fa';

const CatalogueCard = (props) => {

  const viewBlack={
    background:"#0B0000",
    borderRadius: "30px",
    width: "157px",
    height: "50px",
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "500px",
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#fff",
    border: "none"
  };

   // Usestate for Share button
   const [shareToggle, setShareToggle] = useState(false)

   const handleShareToggle = () => {
     return setShareToggle(prevToggle =>!prevToggle)
   };

  const sharedUrl = 'www.google.com';

  const timesButtonStyle = { fontSize: "3rem" };

  return (
    <div classname='catalogueCard'>
     <img src={props.catalogueImg} alt="" classname='catalogueImg'/>
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
          {shareToggle ? <FaTimesCircle style={timesButtonStyle}/> :  <img src={ShareIcon} alt="share-icon" />}
         
        </div>
        <div>
            <Likebutton  />
        </div>
        <div className={shareToggle ? 'active' : 'inactive' }>
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
      

     </div>

    </div>
  )
}

export default CatalogueCard