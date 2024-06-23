import React, { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../context/Context';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Logo from '../../assets/livro.jpg';
import { Button, Container, Input } from 'reactstrap';
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { jwtDecode } from 'jwt-decode';

const Book = () => {
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const { setCart } = useContext(DataContext);
    
    const { id } = useParams();
    const token = jwtDecode(sessionStorage.getItem('@token'));

    useEffect(() => {
        async function getBook() {
            const response = await api.get(`/book/${id}`)
            setData(response.data);
        }

        getBook();
    });

    const AddtoCart = () => {
        data.quantity = quantity || 1
        data.user = token.id
        setCart(data)
        window.location.href = '/cart'
    }
        
    return (
        <div>
            <Header />
                <Container>
                    <h1 className="my-2">{data.name}</h1>
                    <img className="images" src={Logo} alt="Livro" />
                    <span><IoIosHeartEmpty className="mx-3"/></span>
                    <p className="lead mt-2">{data.description}</p>
                    <p className="text-muted">Autor: {data.author}</p>
                    <p className="text-muted">Preço: R$ {data.price}</p>
                    <Input 
                        placeholder="Quantidade" 
                        className="form" 
                        type="number" 
                        min={1}
                        onChange={e => setQuantity(e.target.value)}
                    />
                    <Button className="btn-success" onClick={AddtoCart}>Adicionar</Button>
                </Container>
        </div>
    )
}

export default Book;