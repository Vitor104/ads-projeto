import React, {useState} from "react";
import Styles from "./signUp.module.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';


function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const userData = localStorage.getItem('users');
        const users = userData ? JSON.parse(userData) : [];
        const userExiste = users.find(user => user.email === email);
        if (userExiste) {
            alert('Usuário já cadastrado!');
            return;
        }

        const novoUser = { email, password, name, cpf };
        const updatedUsers = [...users, novoUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        alert('Cadastro realizado com sucesso!');
        navigate('/');
        
    }


  return (

    <div className={Styles.container}>
        {/* COMEÇO DA PÁGINA */}

        {/* CONTAINER CONTENDO TODO O CONTEÚDO DA PÁGINA */}
        <h1 className={Styles.title}>Crie sua conta</h1>


    <div>
        {/* INÍCIO DO FORMULÁRIO DE CADASTRO */}
        
        <Form className="bg-light p-4 rounded card" onSubmit={handleSubmit}>
        {/* INÍCIO DO FORMULÁRIO DE CADASTRO - EMAIL */}

    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className={Styles.label}>Email address</Form.Label>
        <Form.Control className={Styles.label} required type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
    </Form.Group>


    {/* INÍCIO DO FORMULÁRIO DE CADASTRO - PASSWORD */}

    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className={Styles.label}>Password</Form.Label>
        <Form.Control className={Styles.label} required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    </Form.Group>

    {/* INÍCIO DO FORMULÁRIO DE CADASTRO - NAME */}

    <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label className={Styles.label}>Name</Form.Label>
        <Form.Control className={Styles.label} required type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
    </Form.Group>

    {/* INÍCIO DO FORMULÁRIO DE CADASTRO - CPF */}

    <Form.Group className="mb-3" controlId="formGroupCPF">
        <Form.Label className={Styles.label}>CPF (apenas números)</Form.Label>
        <Form.Control className={Styles.label} required type="number" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
    </Form.Group>

        {/* ENVIAR DADOS PARA VALIDAÇÃO */}
   
        <Button className={Styles.bttSignUp} type="submit" variant="primary">Sign Up</Button>
    

    </Form>
    </div>
    </div>
    )
};  

export default SignUp;