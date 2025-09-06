import React from "react";
import Styles from "./signUp.module.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import Form from 'react-bootstrap/Form';


function SignUp() {
  return (

    <div className={Styles.container}>
        <h1>Crie sua conta</h1>
    <div>
        
        <Form className="bg-light p-4 rounded">

    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupCPF">
        <Form.Label>CPF (apenas números)</Form.Label>
        <Form.Control required type="number" placeholder="CPF" />
    </Form.Group>

    <Link to={'/'}>
        <Button className={Styles.bttSignUp} type="submit" variant="primary">Sign Up</Button>
    </Link>

    </Form>
    </div>
    </div>
    )
};  

export default SignUp;