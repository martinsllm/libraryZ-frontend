import React, { useContext } from 'react';
import { DataContext } from '../../context/Context';
import Header from '../../components/Header';
import { Container, Button } from 'reactstrap';
import { FaShoppingCart, FaCheck, FaTrash } from 'react-icons/fa';

const Cart = () => {
    const { cart } = useContext(DataContext);

    return(
        <div>
            <Header />
            <Container>
                <h1 className="my-3"><FaShoppingCart className="mb-1"/> Meu Carrinho</h1>
                <p className="mt-2">{cart.name}</p>
                <p>Quantidade: {cart.quantity}</p>
                <p>Total: R$ {cart.price * cart.quantity} </p>
                <Button className="btn-success"><FaCheck /> Confirmar</Button>
                <Button className="btn-danger"><FaTrash className="mb-1"/>Excluir</Button>
                <hr />
            </Container>
        </div>
    )

}

export default Cart;