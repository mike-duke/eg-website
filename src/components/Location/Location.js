import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Location = ({ info }) => {
  console.log(info)
  return (
    <div className="location">
      <Map center={info.coords} zoom={11}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={info.coords}></Marker>
      </Map>
    </div>
  )
}

export default Location;