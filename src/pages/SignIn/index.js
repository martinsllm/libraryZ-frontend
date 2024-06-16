import React, { Component } from 'react';
import { Button, Container, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/style.css'
import Logo from '../../assets/image.jpg';
import api from '../../services/api';
import { login } from '../../services/auth';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        console.log(password)

        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                const response = await api.post("/user/login", { email, password });
                login(response.data.token);
                this.reload()
            } catch (err) {
                this.setState({
                error:
                    "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }
    }

    reload() {
        setTimeout(() => {
            window.location.href = '/app'
        }, 1000)
    }

    render() {
        return (
            <Container className="container">
                <Form className="col-md-5 form" onSubmit={this.handleSignIn}>
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
                    <Button type="submit">Entrar</Button>
                    <hr/>
                    <Link to="/signup">Criar conta gratuita</Link>
                </Form>
            </Container>
        )
    }
}

export default SignIn;