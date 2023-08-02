/* eslint-disable no-console */

import { Loader } from '@googlemaps/js-api-loader'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const mapKey = process.env.MAP_API

const loader = new Loader({
  apiKey: mapKey,
  version: 'weekly',
})

loader.load().then(async () => {
  // eslint-disable-next-line no-undef
  const { Map } = await google.maps.importLibrary('maps')
}).catch((err) => {
  console.error('error getting map', err)
})

app.get('/api/map', (req, res) => {
  res.send(loader)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
