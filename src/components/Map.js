import { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { getCenter } from 'geolib';

function MapApp({searchResult}) {
	//Get {latitude and longitude} of each object
	const coordinates = searchResult.map(item => ({
		latitude: item.lat,
		longitude: item.long
	}))
	const center = getCenter(coordinates)
	console.log(center)
  return (
  <Map
    mapLib={import('mapbox-gl')}
    initialViewState={{
      longitude: center.longitude,
      latitude: center.latitude,
      zoom: 15
    }}
    style={{width: '100vw', height: '100vh'}}
    mapStyle="mapbox://styles/mirey-og/cls6fmp0n001401qz8lfrdxe5"
	mapboxAccessToken= 'pk.eyJ1IjoibWlyZXktb2ciLCJhIjoiY2xzMzZ0bzF4MHI5aTJwbWVxMWtjMGhhYiJ9.mZVH4Z_U-q-BcgaeDpAIIg'
  >
	{searchResult.map(item => {
		<div key={item.lat}>
			<Marker
			longitude={item.long}
			latitude={item.lat}
			offsetLeft = {-20}
			offsetTop = {-10}
			>
				<p>📌</p>
			</Marker>
		</div>
	})}
  </Map>
  )
}
export default MapApp
