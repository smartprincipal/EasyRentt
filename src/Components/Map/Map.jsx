import React from 'react'
import './Map.css'
import { Loader } from '@googlemaps/js-api-loader';

const Map = () => {
 const loader = new Loader({
  apiKey: "AIzaSyCVvPfU4YWSFJoCusIsZ15gwzETDuAxN88",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

  return (
   loader
   .load()
   .then((google) => {
     new google.maps.Map(document.getElementById("map"), mapOptions);
   })
   .catch(e => {
     // do something
   })
  )
}

export default Map