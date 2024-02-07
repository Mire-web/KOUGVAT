import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import { getCenter } from "geolib";
import Image from "next/image";

function MapApp({ searchResult }) {
  //Get {latitude and longitude} of each object
  const coordinates = searchResult.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));
  const center = getCenter(coordinates);
  console.log(center);
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mirey-og/cls4h78ma00v401qsal1gez5l"
      mapboxAccessToken="pk.eyJ1IjoibWlyZXktb2ciLCJhIjoiY2xzMzZ0bzF4MHI5aTJwbWVxMWtjMGhhYiJ9.mZVH4Z_U-q-BcgaeDpAIIg"
    >
      {searchResult.map((item) => {
        <div key={item.lat}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offset={20}
          >
			<div className="w-20 h-20">
			<Image src={item.img} layout='fill' objectFit='cover'/>
			</div>
          </Marker>
        </div>
      })}
    </Map>
  );
}
export default MapApp;
