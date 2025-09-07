    import React, {use, useState} from "react";
import Styles from "./loginPage.module.css";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const usersData = localStorage.getItem('users');
        const users = usersData ? JSON.parse(usersData) : [];
        const foundUser = users.find(user => user.email === email);

        if (foundUser && foundUser.password === password) {
            navigate('/Products');
        } else {
            alert('Usuário ou senha incorretos!');
        }

        
    }

  return (
    <div className={Styles.container}>
        

        <div className={Styles.formContainer}>
            <h1>Bem vindo(a)!</h1>
            <form className={Styles.form} onSubmit={handleSubmit}>
                <div className={Styles.inputGroup}> 
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className={Styles.inputField} type="email" id="email" name="email" required />
                </div>
                <div className={Styles.inputGroup}>
                    <label htmlFor="password">Senha:</label>
                    <input className={Styles.inputField} type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
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