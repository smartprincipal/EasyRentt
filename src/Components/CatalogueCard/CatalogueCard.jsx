import React from 'react'
import './CatalogueCard.css'
import Button from '../Button/Button'
import ShareIcon from '../../Assets/shareIcon.svg'
import FavouriteIcon from '../../Assets/favouriteIcon.svg'

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
  }
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
        <div>
         <img src={ShareIcon} alt="" />
        </div>
        <div>
         <img src={FavouriteIcon} alt="" />
        </div>
       </div>
      </div>
      

     </div>

    </div>
  )
}

export default CatalogueCard