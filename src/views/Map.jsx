import { Loader } from '@googlemaps/js-api-loader'

// eslint-disable-next-line spellcheck/spell-checker
const API_KEY = 'AIzaSyBXd4PHFJV9ftDb5vou2hDGH1TGWMJuHcM'

const loader = new Loader({
  apiKey: API_KEY,
  version: 'weekly',
})

loader.load().then(async () => {
  // eslint-disable-next-line no-undef
  const { Map } = await google.maps.importLibrary('maps')

  // eslint-disable-next-line no-unused-vars
  const map = new Map(document.getElementById('map'), {
    center: { lat: 44.6402, lng: -93.1435 },
    zoom: 12,
  })
})

export default function MapPage() {
  return (
    <div className="map">
      <div id="map" />
    </div>
  )
}
