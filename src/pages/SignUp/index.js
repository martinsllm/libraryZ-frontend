import React, { useState } from 'react';
import { Container, Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image.jpg';
import api from '../../services/api';
import '../../styles/style.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async e => {
        e.preventDefault();

        if(password !== confPassword) setError("As senhas precisam ser iguais!")

        if (!email || !password || !confPassword) {
            setError("Preencha todos os dados para se cadastrar!");
        } else {
            try {
                await api.post('/user', { email, password });
                reload();
            } catch (error) {
                setError("Ocorreu um erro ao registrar sua conta. T.T");
            }
        }

    }

    const reload = () => {
        setTimeout(() => {
            window.location.href = '/'
        }, 1000)
    }

    
    return (
        <Container id="container">
            <Form className="form col-md-5" onSubmit={handleSignUp}>
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
                <Input 
                    type="password" 
                    placeholder="Confirme sua senha"
                    onChange={e => setConfPassword(e.target.value)}
                />
                <Button type="submit" className="bt">Cadastrar</Button>
                <hr/>
                <Link to="/">Fazer login</Link>
            </Form>
        </Container>
    )
}

export default SignUp;