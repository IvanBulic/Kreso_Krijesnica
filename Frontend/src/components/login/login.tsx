import * as React from "react";
import { Component } from "react";
import styles from "./login.module.css";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";
export interface LoginProps {}

export interface LoginState {
  email?: string;
  password?: string;
  redirect:boolean;
}
class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = { redirect: false };
  }
  passchange = (event: { target: { value: string } }) => {
    this.setState({ password: event.target.value });
  };

  emailchange = (event: { target: { value: string } }) => {
    this.setState({ email: event.target.value });
  };
  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const logindata = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(logindata);
   axios.post("/login/process", { logindata }).then((res) => {
     console.log(res);
     if(res.status===200)
    {
      this.setState({ redirect: true });
      return;
    }
    
    }).catch((error)=>{
      alert("netocan email ili lozinka");
    });
  };

  render() {

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/adminhome'/>;
    }
    return (
      <form className={styles.Admin} onSubmit={this.handleSubmit}>
        <div className={styles.AdminDiv}>
          <div className={styles.Login}>Prijava</div>
          <div className={styles.Email}>Email</div>
          <div className={styles.EmailUpis}>
            <input
              type="email"
              placeholder="Enter email"
              onChange={this.emailchange}
            />
          </div>
          <div className={styles.Password}>
            <label>Lozinka</label>
          </div>
          <div className={styles.PasswordUpis}>
            <input
              type="password"
              placeholder="Enter password"
              onChange={this.passchange}
            />
          </div>
          <div className={styles.RememberMe}>
            <input type="checkbox" id="customCheck1" />
            <label htmlFor="customCheck1">Zapamti me</label>
          </div>
          <input type="submit" value="Prijavi se" className={styles.Submit}/>
        </div>
      </form>
    );
  }
}

export default Login;
