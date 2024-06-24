import React, { useContext } from 'react';
import { DataContext } from '../../context/Context';
import Header from '../../components/Header';
import { Container, Button } from 'reactstrap';
import { FaShoppingCart, FaCheck, FaTrash } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';


const Cart = () => {
    const { cart } = useContext(DataContext);
    const token = jwtDecode(sessionStorage.getItem('@token'));

    const result = cart.filter(book => book.user === token.id)
    console.log(result)

    return(
        <div>
            <Header />
                {result.length > 0 ? (
                    <Container>
                        <h1 className="my-3"><FaShoppingCart className="mb-1"/> Meu Carrinho</h1>
                        {result.map(book => (
                            <div key={book.id}>
                            <p className="mt-2">{book.name}</p>
                            <p>Quantidade: {book.quantity}</p>
                            <p>Total: R$ {book.price * book.quantity} </p>
                            <Button className="btn-danger"><FaTrash className="mb-1"/> Remover</Button>
                            <hr />
                            </div>
                        ))}
                        <Button className="btn-success"><FaCheck /> Confirmar Compra</Button>
                    </Container>
                ) : (
                    <h1 className="my-3 text-center">Seu carrinho está vazio!</h1>
                )} 
                
            
        </div>
    )

}

export default Cart;