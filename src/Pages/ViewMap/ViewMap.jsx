import React from 'react'
import './ViewMap.css'
import CatalogueNavbar from '../../Components/CatalogueNavbar/CatalogueNavbar'
import Map from '../../Components/Map/Map'
const ViewMap = () => {
  return (
    <div>
     <div>
      <CatalogueNavbar/>
     </div>
     <div>
      <Map/>
     </div>
    </div>
  )
}

export default ViewMap