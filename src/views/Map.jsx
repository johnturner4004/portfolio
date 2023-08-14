import { useEffect, useState } from 'react'

import { Loader } from '@googlemaps/js-api-loader'
import TextField from '@mui/material/TextField'

// eslint-disable-next-line spellcheck/spell-checker
const API_KEY = 'AIzaSyBXd4PHFJV9ftDb5vou2hDGH1TGWMJuHcM'

const loader = new Loader({
  apiKey: API_KEY,
  version: 'weekly',
})

const handleChange = (e) => {
  console.log(e.target.value)
}

export default function MapPage() {
  // eslint-disable-next-line no-unused-vars
  const [center, setCenter] = useState({ lat: 44.6402, lng: -93.1435 })

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude })
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  loader.load().then(async () => {
    // eslint-disable-next-line no-undef
    const { Map } = await google.maps.importLibrary('maps')

    // eslint-disable-next-line no-unused-vars
    const map = new Map(document.getElementById('map'), {
      center,
      zoom: 12,
    })
  })
  return (
    <div className="map">
      <h1 className="map-title">Sample Map</h1>
      <div className="map-search">
        <TextField
          name="search"
          label="Search"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="map-results">
        <div className="map-results_list">
          <ul>
            <li>First</li>
            <li>Second</li>
          </ul>
        </div>
        <div id="map" />
      </div>
    </div>
  )
}
