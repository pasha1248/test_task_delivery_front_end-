/** @format */

import React from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import useOnclickOutside from 'react-cool-onclickoutside'
import style from '../../page/cartPage/CartPage.module.scss'
import { Button, TextField } from '@mui/material'

const Autocimplete = ({ isLoaded, onSelect, calculateRoute, setAdres }) => {
  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  })
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions()
  })
  const refBotton = React.useRef(null)
  // React.useEffect(
  //   setAdres(refBotton.current),

  //   [refBotton]
  // )

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value)
    setAdres(e.target.value)
  }

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false)
      clearSuggestions()

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then(results => {
        const { lat, lng } = getLatLng(results[0])
        console.log('📍 Coordinates: ', { lat, lng })
        onSelect({ lat, lng })
      })
    }

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })

  React.useEffect(() => {
    if (isLoaded) {
      init()
    }
  }, [isLoaded, init])

  return (
    <div ref={ref} className={style.autoIntut}>
      <TextField
        ref={refBotton}
        fullWidth='true'
        id='outlined-basic'
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Where are you going?'
      />
      <Button
        style={{ textAlign: 'end', margin: '5px' }}
        onClick={calculateRoute}
      >
        See the way
      </Button>
      {status === 'OK' && (
        <ul className={style.suggestion}>{renderSuggestions()}</ul>
      )}
    </div>
  )
}

export default Autocimplete
