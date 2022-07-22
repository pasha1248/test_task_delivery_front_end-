/** @format */

import React, { useCallback, useState } from 'react'
import { TextField } from '@mui/material'
import Map from '../../components/Map/Map'
import Autocimplete from '../../components/Map/Autocimplete'
import 'macro-css'
import { useJsApiLoader } from '@react-google-maps/api'
import style from './CartPage.module.scss'
import { Context } from './CartPage'
const initialState = {
  lat: 49.838274,
  lng: 24.019384,
}

const InputInfo = () => {
  const { setAdres, email, setEmail, phone, setPhone, name, setName } =
    React.useContext(Context)

  const libraries = ['places']
  //
  const [diraction, setDiraction] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  //

  //
  const [center, setCenter] = React.useState(initialState)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  })

  async function calculateRoute() {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: initialState,
      destination: center,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,
    })
    setDiraction(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
    console.log(distance)
  }

  const onSelect = useCallback(cordinate => {
    setCenter(cordinate)
  }, [])

  return (
    <div className={style.inputComtainer}>
      <div className={style.map}>
        <Map
          center={center}
          isLoaded={isLoaded}
          initialState={initialState}
          diraction={diraction}
        />
      </div>
      <div className={style.textInput}>
        <div>
          <div className='d-flex justify-between align-center'>
            <h3>Addres:</h3>
            <span>
              Distance:
              <strong style={{ color: '#ab98f2', fontSize: 25 }}>
                {distance}
              </strong>
            </span>
            <span>
              Duration:
              <strong style={{ color: '#ab98f2', fontSize: 25 }}>
                {duration}
              </strong>
            </span>
          </div>

          <Autocimplete
            isLoaded={isLoaded}
            onSelect={onSelect}
            calculateRoute={calculateRoute}
            setAdres={setAdres}
          />
        </div>
        <div>
          <h3>Email:</h3>
          <TextField
            fullWidth='true'
            id='outlined-basic'
            label='Email'
            variant='outlined'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />{' '}
        </div>
        <div>
          <h3>Phone:</h3>
          <TextField
            fullWidth='true'
            id='outlined-basic'
            label='Phone'
            placeholder='+380(63)000300'
            variant='outlined'
            type='tel'
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div>
          <h3>Name:</h3>
          <TextField
            fullWidth='true'
            id='outlined-basic'
            label='Name'
            variant='outlined'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />{' '}
        </div>
      </div>
    </div>
  )
}

export default InputInfo
