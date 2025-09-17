    import React, {useState} from "react";
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

        {/* COMEÇO DA PÁGINA */}
        

        <div className={Styles.formContainer}>
            {/* CONTAINER CONTENDO TODO O CONTEÚDO DA PÁGINA */}

            <h1 className={Styles.text}>Bem vindo(a)!</h1>

            <div className={Styles.icons}>
                    {/* ÍCONES DE LOGIN COM REDES SOCIAIS */}
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className={`bi bi-facebook bg-transparent rounded p-1 border border-dark ${Styles.iconBtt}`}
                 viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={`bi bi-google bg-transparent rounded p-1 border border-dark ${Styles.iconBtt}`} viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={`bi bi-linkedin bg-transparent rounded p-1 border border-dark ${Styles.iconBtt}`} viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
            </div>


            <p className={Styles.description}>ou use sua conta do Google:</p>


            <form onSubmit={handleSubmit} className={`card p-4 border border-dark rounded shadow-sm ${Styles.form}`}>
                {/* INICIO DO FORMULÁRIO DE LOGIN - EMAIL */}
                <div className={Styles.inputGroup}> 

                    <div className={Styles.iconEmailAndPassword}>

                        {/* DIV PARA O ICON DO EMAIL */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>

                    </div>

                    <input onChange={(e) => setEmail(e.target.value)} className={Styles.inputField} type="email" id="email" name="email" placeholder="Email" required />
                </div>


                <div className={Styles.inputGroup}>
                    {/* INÍCIO DO FORMULÁRIO DE LOGIN - SENHA */}

                    <div className={Styles.iconEmailAndPassword}>

                        {/* DIV PARA O ICON DA SENHA */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
                        </svg>

                    </div>

                    <input className={Styles.inputField} type="password" id="password" name="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/* ENVIAR DADOS PARA VALIDAÇÃO */}
                <Button className={Styles.button} type="submit" >Sign In</Button>
                <Link className={Styles.linkBtt} to={'./Sign Up'}>
                    <Button className={Styles.bttSignUp} type="submit">Sign Up</Button>
                </Link>
                
            </form>
        </div>   


        <div className={Styles.signUpDesktop}>
            {/* CONTAINER PARA O BOTÃO DE SIGN UP NA VERSÃO DESKTOP */}
            
                <h2 className={Styles.text}>Olá, visitante!</h2>
                <p className={Styles.description}>Ainda não possui uma conta?</p>
                <Link to={'./Sign Up'}>
                    <Button className={Styles.bttSignUp} type="submit" variant="light">Sign Up</Button>
                </Link>
        </div>
    </div>
    )

};


export default LoginPage;