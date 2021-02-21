import * as React from 'react';
import { Component } from 'react';
import Popis from "./popis";
import PopisNaslov from "./popisnaslov";
import styles from './main.module.css';
export interface MainProps {
    
}
 
export interface MainState {
    
}
 
class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {visible :true  };
    }
    render() { 
        return (<>
            <div className={styles.Main}>
                <div className={styles.Naslov}>Krešo krijesnica</div>
                <div className={styles.PopisNaslov} id="popis"><PopisNaslov  className={styles.PopisNaslov}/></div> 
                <Popis className={styles.Popis}/>  
            </div>
            </>  );
    }
}
 
export default Main;