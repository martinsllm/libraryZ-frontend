import React, { Component } from 'react';
import { Container, Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image.jpg';
import '../../styles/style.css';

class SignUp extends Component {
    render() {
        return (
            <Container className="container">
                <Form className="form col-md-5">
                    <img src={Logo} alt="LibraryZ logo" />
                    <Input type="email" placeholder="E-mail"></Input>
                    <Input type="password" placeholder="Senha"></Input>
                    <Input type="password" placeholder="Confirme sua senha"></Input>
                    <Button>Cadastrar</Button>
                    <hr/>
                    <Link to="/">Fazer login</Link>
                </Form>
            </Container>
        )
    }
}

export default SignUp;