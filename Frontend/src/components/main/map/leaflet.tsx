import L from "leaflet";
import * as React from "react";
import { Component } from "react";
import "./Map.css";
import axios from "axios";
export interface LeafletMapProps {}

export interface LeafletMapState {
  lat: number;
  lng: number;
}

class LeafletMap extends React.Component<LeafletMapProps, LeafletMapState> {
  componentDidMount() {
    const map = L.map("map");
    map.setView([45, 15], 8);
    this.onMapReady(map);
    /* var marker = L.marker([45, 15]).addTo(map);
        var marker2 = L.marker([35, 15]).addTo(map);
        
        
        var popup = marker.bindPopup('<b>Hello</b><br />Testing Phase');*/
    axios
      .get("/loadmarkers")
      .then(function (response) {
        response.data.map((post, index) => {
            
            
                var marker = L.marker([post.lat, post.lng]).addTo(map);
                
                var popup = marker.bindPopup(" Opis: "+post.desc +" Vrijeme: "+post.date);
          })
        console.log(response.data);
        return;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	      maxZoom: 19,
	      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}
    ).addTo(map);
  }
  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }
  render() {
    return (
      <>
        <div id="map" />
      </>
    );
  }
}

export default LeafletMap;
