import React, { Component } from 'react';
import { Container, Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image.jpg';
import api from '../../services/api';
import '../../styles/style.css';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        confPassword: '',
        error: ''
    }

    handleSignUp = async e => {
        e.preventDefault();
        const { email, password, confPassword } = this.state;

        if (!email || !password || !confPassword) {
            this.setState({ error: "Preencha todos os dados para se cadastrar!" });
        } else {
            try {
                await api.post('/user', { email, password }) 
                this.reload()
            } catch (error) {
                this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
            }
        }

    }

    reload() {
        setTimeout(() => {
            window.location.href = '/'
        }, 1000)
    }

    render() {
        return (
            <Container className="container">
                <Form className="form col-md-5" onSubmit={this.handleSignUp}>
                    <img src={Logo} alt="LibraryZ logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <Input 
                        type="email" 
                        placeholder="E-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <Input 
                        type="password" 
                        placeholder="Confirme sua senha"
                        onChange={e => this.setState({ confPassword: e.target.value })}
                    />
                    <Button type="submit">Cadastrar</Button>
                    <hr/>
                    <Link to="/">Fazer login</Link>
                </Form>
            </Container>
        )
    }
}

export default SignUp;