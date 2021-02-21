import L from 'leaflet';
import * as React from 'react';
import { Component } from 'react';
import "./Map.css";
export interface LeafletMapProps {
    
    toggleState: ( lat: number, lon:number) => void;
}
 
export interface LeafletMapState {
    lat:number;
    lon:number;
}
 
class LeafletMap extends React.Component<LeafletMapProps, LeafletMapState> {
    constructor(props: LeafletMapProps) {
        super(props);
        this.state = {lat :  0,lon:0};
    }
    componentDidMount(){
        this.props.toggleState.bind(this);
        const map = L.map('map');
        map.setView([45, 15], 8);
        this.onMapReady(map);
       
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
    }
       onMapReady=(map: L.Map)=> {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
    var theMarker = {};  
    map.on('click',(e) =>{
        this.setState({ lat : e.latlng.lat});
        this.setState({ lon : e.latlng.lng});
      
      
      console.log("You clicked the map at LAT: "+ this.state.lat+" and LONG: "+this.state.lon );
          //Clear existing marker, 
          if (theMarker != undefined) {
                map.removeLayer(theMarker);
          };
      //Add a marker to show where you clicked.
       theMarker = L.marker([this.state.lat,this.state.lon]).addTo(map); 
       this.props.toggleState(this.state.lat,this.state.lon);
      
  }); 
 
}   
    render(){
        return(<>
        <div id="map"/>
        </>)
    }  
}
 
export default LeafletMap;
export interface LeafletMapProps {
    
}
 
export interface LeafletMapState {
    
}
 