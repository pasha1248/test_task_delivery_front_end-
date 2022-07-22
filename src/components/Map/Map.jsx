/** @format */

import React from 'react'
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  MarkerF,
} from '@react-google-maps/api'
import icon from '../assets/pin.png'

const containerStyle = {
  width: '100%',
  height: '250px',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
}

const Map = ({ center, isLoaded, initialState, diraction }) => {
  const mapRef = React.useRef(undefined)

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined
  }, [])

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF
            position={initialState}
            icon={icon}
            style={{ height: '40px' }}
          />
          {diraction && (
            <>
              <Marker position={initialState} />
              <DirectionsRenderer directions={diraction} />
            </>
          )}
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  )
}

export default Map
