import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Logo from '../../assets/livro.jpg';
import { Button, Container, Input } from 'reactstrap';
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const Book = () => {
    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        async function getBook() {
            const response = await api.get(`/book/${id}`)
            setData(response.data);
            console.log(response.data)
        }

        getBook();
    });
        
    return (
        <div>
            <Header />
                <Container>
                    <h1 className="display-5 my-2">{data.name}</h1>
                    <img className="images" src={Logo} alt="Livro" />
                    <span><IoIosHeartEmpty className="mx-3"/></span>
                    <p className="lead mt-2">{data.description}</p>
                    <p className="text-muted">Autor: {data.author}</p>
                    <p className="text-muted">Preço: R$ {data.price}</p>
                    <Input placeholder="Quantidade" className="form" type="number" min={1}></Input>
                    <Button className="btn-success">Adicionar</Button>
                </Container>
        </div>
    )
}

export default Book;