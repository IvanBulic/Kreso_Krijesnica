import * as React from 'react';
import { Component } from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
export interface FooterProps {
    
}
 
export interface FooterState {
    
}
 
class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = { visible:true  };
    }
    render() { 
        return (
            <div className={styles.Footer}>
            <div className={styles.FooterIcons}>
                
                <div onClick={()=> window.open("https://www.facebook.com/kresokrijesnica/", "_blank")} ><FontAwesomeIcon icon={faFacebook}className={styles.FooterIconsFacebook} /></div>
                <a href="mailto:kreso.krijesnica1@gmail.com" ><FontAwesomeIcon icon={faEnvelope}className={styles.FooterIconsEnvelope} /></a>
                <div ><Link to="/login"><FontAwesomeIcon className={styles.FooterIconsUserCog} icon={faUserCog}/></Link> </div>
                
            </div>
            <div className={styles.FooterPageName}>Krešo Krijesnica</div>
            <div className={styles.FooterRights}>©2021, All rights reserved</div>
            </div>
            );
    }
}
 
export default Footer;