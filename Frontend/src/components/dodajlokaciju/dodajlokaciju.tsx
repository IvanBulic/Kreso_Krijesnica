import * as React from 'react';
import { Component } from 'react';
import styles from "./dodajlokaciju.module.css";
import LeafletMap from "../main/mappopup/leaflet"
import {Link,Redirect} from "react-router-dom"
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
export interface DodajLokacijuProps {
    
}
 
export interface DodajLokacijuState {
    lon?:number;
    lat?:number;
    opis?:string;
    redirect:boolean;
}
 
class DodajLokaciju extends React.Component<DodajLokacijuProps, DodajLokacijuState> {
    constructor(props: DodajLokacijuProps) {
        super(props);
        this.state = { redirect:false,
                        lat:0,
                        lon:0};
    }
    descchange=(event:{target:{value:string}})=>{
        this.setState({opis:event.target.value});
    };
    handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const locationinfo = {
            lng: this.state.lon,
            lat: this.state.lat,
            date: new Date().toLocaleString(),
            opis: this.state.opis,
          };
          console.log(locationinfo);
        console.log(  axios.post("/dodajlokaciju/process",{locationinfo}).then((res) => {
            console.log(res);
            if(res.status===200)
           {
             this.setState({ redirect: true });
             return;
           }
           
           })); 
    };
    toggleState = ( lat: number,lon:number) => {
        this.setState({lat:lat});
        this.setState({lon:lon});
        console.log(this.state.lat);
        console.log(this.state.lon);
        console.log(new Date().toLocaleString());
      }
    render() { 
        const { redirect } = this.state;

    if (redirect) {
        
      return <Redirect to='/'/>;
    }
        return (
            <form className={styles.DodajLokaciju} onSubmit={this.handleSubmit}> 
                <div className={styles.DodajLokacijuDiv}>
                    
                    <Link to="/" className={styles.Povratak}><FontAwesomeIcon icon={faArrowAltCircleLeft}/></Link>
                    
                    <div className={styles.Header}>   
                            Dodaj Lokaciju    
                    </div>
                    <div id="karta" className={styles.Karta}><LeafletMap toggleState={( lat,lon) => this.toggleState( lat,lon)}  /></div>
                    <div className={styles.KartaNaslov}>Pretisni na lokaciju kresnica</div>{/*<div className={styles.DohvatiMojuLokaciju}>Dohvati moju lokaciju</div>*/}
                    <div className={styles.Opis}>Opis</div>
                    <textarea maxLength={46} placeholder="Približna lokacija, broj jedinki, boja jedinki..." className={styles.OpisUpis} onChange={this.descchange} />
                    <div className={styles.BotunDodajDiv}><input type="submit" className={styles.BotunDodaj} value="Dodaj lokaciju"/> </div>
                </div>
            </form>
         );
    }
}
 
export default DodajLokaciju;