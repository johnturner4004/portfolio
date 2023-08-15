/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from '@react-google-maps/api'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const apiKey = process.env.REACT_APP_MAP_API
const libraries = ['places']
const mapContainerStyle = {
  width: '80%',
  height: '600px',
}

const mapOptions = {
  styles: [
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ebe3cd',
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#523735',
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f1e6',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#c9b2a6',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#dcd2be',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ae9e90',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dfd2ae',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dfd2ae',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#93817c',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#a5b076',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#447530',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f1e6',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f8c967',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#e9bc62',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e98d58',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#db8555',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#fdfcf8',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#806b63',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dfd2ae',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8f7d77',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#ebe3cd',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dfd2ae',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#b9d3c2',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#92998d',
        },
      ],
    },
  ],
  disableDefaultUI: true,
}

export default function MapPage() {
  const [center, setCenter] = useState({ lat: 44.6402, lng: -93.1435 })
  const [search, setSearch] = useState('')
  const [hide, setHide] = useState(false)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  })

  const {
    ready, value, suggestions: { status, data }, setValue, clearSuggestions,
  } = usePlacesAutocomplete({
    // requestOptions: {
    //   location: { lat: () => center.lat, lng: () => center.lng },
    //   radius: 200 * 1000,
    // },
  })

  if (loadError) return 'Error loading map'

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude })
    }, (err) => console.error(err))
  }

  const panTo = useCallback(({ lat, lng }) => {
    setCenter({ lat, lng })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
    setValue(e.target.value)
    setHide(true)
  }

  const handleSubmit = () => {
    console.log('click')
    console.log(search)
  }

  const handleSelect = async (address) => {
    console.log(address.description)
    try {
      const results = await getGeocode({ address: address.description })
      const { lat, lng } = getLatLng(results[0])
      console.log(lat, lng)
      setValue(results[0].formatted_address)
      panTo({ lat, lng })
      clearSuggestions()
      setHide(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  if (isLoaded) {
    return (
      <div className="map">
        <h1 className="map-title">Sample Map</h1>
        <div className="map-search">
          <div className="map-results">
            <TextField
              className="map-results__input"
              name="search"
              label="Search"
              value={value}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <div className="map-results__autofill">
              {
                hide && status === 'OK' && data.map(({ id, description }) => <button type="button" className="map-results__autofill-item" key={description} onClick={() => handleSelect({ description })}>{description}</button>)
              }
            </div>
            <div className="map-results__button">
              <Button
                variant="contained"
                onClick={() => handleSubmit()}
                size="large"
              >
                Submit
              </Button>
            </div>
            <div className="map-results_list">
              <ul>
                <li>First</li>
                <li>Second</li>
              </ul>
            </div>
          </div>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={mapOptions}
          >
            ''
          </GoogleMap>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return 'Loading map'
  }
}
