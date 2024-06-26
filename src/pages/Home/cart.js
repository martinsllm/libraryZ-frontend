import React, { useContext } from 'react';
import { Container, Button } from 'reactstrap';
import { jwtDecode } from 'jwt-decode';
import { FaShoppingCart, FaCheck, FaTrash } from 'react-icons/fa';
import { DataContext } from '../../context/Context';
import api from '../../services/api';
import Header from '../../components/Header';


const Cart = () => {
    const { cart, setCart } = useContext(DataContext);
    const token = jwtDecode(sessionStorage.getItem('@token'));
    
    const books_user = cart.filter(book => book.user === token.id);
    const other_books = cart.filter(book => book.user !== token.id);
    
    const rmBook = (index) => {
        const new_books_user = books_user.filter((_,i) => (i !== index));
        setCart([...other_books, ...new_books_user]);
    }

    const getDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2,0)
        const month = String(date.getMonth()+1).padStart(2,0)
        return `${day}/${month}/${date.getFullYear()}`;

    }

    const buyBook = async () => {
        const total = books_user.reduce((a,c) => a += (c.price * c.quantity), 0);

        const books = books_user.map((book) => ({
            bookId: book.id,
            quantity: book.quantity 
        }));

        const date = getDate();

        const sale = { total, date, books }

        try {
            await api.post('/sale', sale);
            setCart([...other_books]);
            window.location.href='/sales';
        } catch (error) {
            console.log(error.response.data)
        }

    }

    return(
        <div>
            <Header />
                {books_user.length > 0 ? (
                    <Container>
                        <h1 className="my-3"><FaShoppingCart className="mb-1"/> Meu Carrinho</h1>
                        {books_user.map((book, index) => (
                            <div key={book.id}>
                            <p className="mt-2">{book.name}</p>
                            <p>Quantidade: {book.quantity}</p>
                            <p>Total: R$ {book.price * book.quantity} </p>
                            <Button className="btn-danger" onClick={() => rmBook(index)}><FaTrash className="mb-1"/> Remover</Button>
                            <hr />
                            </div>
                        ))}
                        <Button className="btn-success" onClick={() => buyBook()}><FaCheck /> Confirmar Compra</Button>
                    </Container>
                ) : (
                    <h1 className="my-3 text-center">Seu carrinho está vazio!</h1>
                )} 
                
            
        </div>
    )

}

export default Cart;