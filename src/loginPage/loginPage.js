import React from "react";
import Styles from "./loginPage.module.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className={Styles.container}>
        

        <div className={Styles.formContainer}>
            <h1>Bem vindo(a)!</h1>
            <form className={Styles.form}>
                <div className={Styles.inputGroup}> 
                    <label htmlFor="username">Usuário:</label>
                    <input className={Styles.inputField} type="text" id="username" name="username" required />
                </div>
                <div className={Styles.inputGroup}>
                    <label htmlFor="password">Senha:</label>
                    <input className={Styles.inputField} type="password" id="password" name="password" required />
                </div>
                <Button className={Styles.button} type="submit" variant="info">Sign In</Button>
                <Link className={Styles.linkBtt} to={'./Sign Up'}>
                    <Button className={Styles.bttSignUp} type="submit" variant="info">Sign Up</Button>
                </Link>
                
            </form>
        </div>   


        <div className={Styles.signUpDesktop}>
            <h2>Olá, visitante!</h2>
            <p>Ainda não possui uma conta?</p>
            <Link to={'./Sign Up'}>
                <Button className={Styles.bttSignUp} type="submit" variant="secondary">Sign Up</Button>
            </Link>
        </div>
        
    </div>
    )
};


export default LoginPage;