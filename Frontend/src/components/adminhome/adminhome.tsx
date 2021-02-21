import React ,{useEffect, useState} from 'react';
import styles from "./adminhome.module.css"
import Header from './adminheader';
import Main from "./main/main"
import Footer from './adminfooter';
import {Redirect} from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
const AdminHome = () => {
    const [mount,setMount]=useState(true)
    const lastLocation = useLastLocation();
   useEffect(() => {
    console.log(lastLocation?.pathname);
    console.log(lastLocation?.pathname!='/login');
   /*if(lastLocation?.pathname!='/login')
   {alert("Pristup zabranjen");
    setMount(false);
   }*/
  });
  if(mount==true)
  {
    return (
        <div className={styles.AdminHome}>
        <Header/>
        <Main/>
        <Footer/>
        </div> 
        );}
        else
        return(
<Redirect to='/'/>
        );
  };
   
  export default AdminHome;
