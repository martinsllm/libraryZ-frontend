import React, { useState } from 'react';
import { Button, Container, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image.jpg';
import api from '../../services/api';
import { login } from '../../services/auth';

const SignIn = () =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async e => {
        e.preventDefault();

        if (!email || !password) {
            setError("Preencha e-mail e senha para continuar!");
        } else {
            try {
                const response = await api.post("/user/login", { email, password });
                login(response.data.token);
                reload()
            } catch (err) {
                setError("Houve um problema com o login, verifique suas credenciais. T.T");
            }
        }
    }

    const reload = () => {
        setTimeout(() => {
            window.location.href = '/home'
        }, 1000)
    }

    return (
        <Container id="container">
            <Form className="form col-md-5" onSubmit={handleSignIn}>
                <img src={Logo} alt="LibraryZ logo" />
                {error && <p className="error">{error}</p>}
                <Input 
                    type="email" 
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button type="submit" className="bt">Entrar</Button>
                <hr/>
                <Link to="/signup">Criar conta gratuita</Link>
            </Form>
        </Container>
    )
    
}

export default SignIn;