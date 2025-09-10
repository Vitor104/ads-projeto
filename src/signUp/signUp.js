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
        <h1>Crie sua conta</h1>
    <div>
        
        <Form className="bg-light p-4 rounded" onSubmit={handleSubmit}>

    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupCPF">
        <Form.Label>CPF (apenas números)</Form.Label>
        <Form.Control required type="number" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
    </Form.Group>

   
        <Button className={Styles.bttSignUp} type="submit" variant="primary">Sign Up</Button>
    

    </Form>
    </div>
    </div>
    )
};  

export default SignUp;