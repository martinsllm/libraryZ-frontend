import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import api from '../../services/api';
import Header from '../../components/Header';
import { FaTicket } from "react-icons/fa6";


const Sales = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getBook() {
            const response = await api.get('/sale')
            setData(response.data);
        }

        getBook();
    },[]);


    return(
        <div>
            <Header />
            {data.length > 0 ? (
                    <Container>
                        <h1 className="my-3"><FaTicket className="mb-1"/> Meus Pedidos </h1>
                        {data.map((sale) => (
                            <div key={sale.id}>
                                <p>Compra nº {sale.id}</p>
                                <p>Data: {sale.date} </p>
                                <p>Total: R$ {sale.total} </p>
                                <span>Book(s): </span>
                                {sale.books.map((book) => (
                                    <span key={book.id}>{book.name}, </span>
                                ))}
                                <hr />
                            </div>
                        ))}
                        
                    </Container>
                ) : (
                    <h1 className="my-3 text-center">Nenhum pedido ainda!</h1>
                )} 
        </div>
    )

}

export default Sales;