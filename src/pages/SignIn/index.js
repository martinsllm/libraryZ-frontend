import React, { Component } from "react";
import { Button, Container, Form, Input } from "reactstrap";
import './index.css'
import Logo from "../../assets/image.jpg";

class SignIn extends Component {
    render() {
        return (
            <Container className="container">
                <Form className="col-md-5 form">
                    <img src={Logo} alt="LibraryZ logo" />
                    <Input type="email" placeholder="E-mail"></Input>
                    <Input type="password" placeholder="Senha"></Input>
                    <Button>Entrar</Button>
                </Form>
            </Container>
        )
    }
}

export default SignIn;