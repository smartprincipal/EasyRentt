import React from 'react'
import './Map.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 7.150000,
  lng: 3.350000
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCVvPfU4YWSFJoCusIsZ15gwzETDuAxN88"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)


// import React from 'react'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// const Map = () => {
//   const render = (status: Status ): ReactElement => {
//     if (status === Status.FAILURE) return <ErrorComponent />;
//     return <Spinner />;
//   };
//   return (
//     <div>

// <Wrapper apiKey={"AIzaSyCVvPfU4YWSFJoCusIsZ15gwzETDuAxN88"}>
//     <MyMapComponent />
//   </Wrapper>

//     </div>
//   )
// }

// export default Map