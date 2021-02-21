import * as React from 'react';
import { Component } from 'react';
import styles from './main.module.css';
export interface PopisNaslovProps {
    className:string
}
 
export interface PopisNaslovState {
    
}
 
class PopisNaslov extends React.Component<PopisNaslovProps, PopisNaslovState> {
    constructor(props: PopisNaslovProps) {
        super(props);
        this.state = {visible :true  };
    }
    render() { 
        return ( 
            <div className={styles.PopisNaslov}>
                Popis lokacija
            </div>
         );
    }
}
 
export default PopisNaslov;