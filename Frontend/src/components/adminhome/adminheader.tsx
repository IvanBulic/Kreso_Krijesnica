import * as React from 'react';
import { Component } from 'react';
import {Link} from 'react-scroll';
import styles from './adminheader.module.css';
import Popup from 'reactjs-popup';
import{Link as LinkPocetna} from 'react-router-dom'

export interface HeaderProps {
    
}
 
export interface HeaderState {
    
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {visible :true  };
    }
    render() { 
        return ( 
            <div id="header" className={styles.Header}>
                <div className = {styles.HeaderNav123}>
                    <div className={styles.HeaderNav1} ><Link spy={true} offset={-1000} smooth={true} className={styles.HeaderNav1l}   to="header" >Početna</Link></div>

                    <div className={styles.HeaderNav2} ><Link spy={true} offset={-70} smooth={true} className={styles.HeaderNav2l}  to="popis">Popis</Link></div>
                 </div>  
                    <div className={styles.HeaderNav4}> 
                    <LinkPocetna className={styles.HeaderNav4l} to="/">Odjavi se</LinkPocetna>
                </div>
            </div>
        
          );
    }
}
 
export default Header;