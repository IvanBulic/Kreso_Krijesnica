import * as React from "react";
import { Component } from "react";
import styles from "./main.module.css";
import axios from "axios";
export interface PopisProps {
  className: string;
}
export interface PopisState {
  list:[];
}
class Popis extends React.Component<PopisProps, PopisState> {

UNSAFE_componentWillMount()
{
    axios.get("/loadpopis").then((response) => {
        this.state=({list: response.data});
        console.log(this.state.list); 
      });
}
  render() {if(this.state.list!=null)
    {
    return (
      <div className={styles.Popis}>
        { 
       this.state.list.map((post, index) => {/*
            console.log(post);
              return ( 
                <div className={styles.PopisDiv}>
                  <div>{index}</div>
                  <div>{"lat:"+post.lat + "lng:" + post.lng}</div>
                  <div>{post.date}</div>
                  <div>{post.desc}</div>
                </div>
              );
              */})
        }
      </div>
    );
    }
  }
}

export default Popis;
