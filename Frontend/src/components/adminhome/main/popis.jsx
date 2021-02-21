import React, { Component } from 'react';
import styles from './main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup'
import axios from "axios";
import {Redirect} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

class Popis extends Component {
    constructor(props) {
        super(props);
        this.state={list:[],
        visible:true};
    }
    componentDidMount()
    { axios.get("/loadpopis").then((response) => {
      this.setState({ list: response.data });
    });
    }
    deleteEntry(id)
    {
      axios.post("/delete_entry",{id}).then((response) => {
        
    }).then(()=>{
this.forceUpdate();
    });
      };
    render() { 
        if (this.state.list != '') {
        return ( <div className={styles.Popis}>
            {this.state.list.map((post, index) => {
            return (
                <div className={styles.PopisDiv} key={post._id} style={{display: this.state.visible ? 'grid' : 'none'}} >
                  <div className={styles.RedniBroj}>{index+1+"."}</div>
                  <div className={styles.Lat}>{"Latitude:" + post.lat}</div>
                  <div className={styles.Lng}>{"Longitude:" + post.lng}</div>
                  <div className={styles.Datum}>{post.date}</div>
                  <div className={styles.Opis}>{post.desc}</div>
                  <div className={styles.Izbrisi} key={post._id} onClick={() => this.deleteEntry(post._id)}><FontAwesomeIcon className={styles.FooterIconsUserCog} icon={faTimesCircle}/></div>
                </div>
              );
            })}
          </div>
        );
      }
      else
      return null;
            
    }
}
 
export default Popis;