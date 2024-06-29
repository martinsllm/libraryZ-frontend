import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import api from '../../services/api';
import Header from '../../components/Header';
import { FaTicket } from "react-icons/fa6";


const Sales = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getSales() {
            const response = await api.get('/sale')
            setData(response.data);
        }

        getSales();
    },[]);


    return(
        <div>
            <Header />
            {data.length > 0 ? (
                    <Container>
                        <h1 className="my-3"><FaTicket className="mb-1"/> Meus Pedidos </h1>
                        {data.map((sale) => (
                            <div key={sale.id}>
                                <p>Código: {sale.id}</p>
                                <p>Data: {sale.date} </p>
                                <p>Total: R$ {sale.total} </p>
                                <span>Livros(s): </span>
                                {sale.books.map((book) => (
                                    <span className="list" key={book.id}>{book.name}</span>
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