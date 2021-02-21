import React, { Component } from "react";
import styles from "./main.module.css";
import axios from "axios";
class Popis extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state={list:[]};
    console.log(this.state.list);

   
  }
  componentDidMount()
  { axios.get("/loadpopis").then((response) => {
    this.setState({ list: response.data });
    console.log("componentdidmount");
    console.log(this.state.list);//tu je json objekt
  });
  }
   render() {
    if (this.state.list != '') {
        console.log("render");
      console.log(this.state.list);//TypeError: Cannot read property 'list' of null
      return (
        <div className={styles.Popis}>
          {this.state.list.map((post, index) => {
            console.log(post);
            return (
              <div className={styles.PopisDiv}>
                <div className={styles.RedniBrojPopis}>{index+1+"."}</div>
                <div className={styles.LatPopis}>{"Latitude:" + post.lat }</div>
                <div className={styles.LngPopis}>{ "Longitude:" + post.lng}</div>
                <div className={styles.DatumPopis}>{post.date}</div>
                <div className={styles.OpisPopis}>{post.desc}</div>
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
