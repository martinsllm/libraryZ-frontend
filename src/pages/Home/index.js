import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Paginator from '../../services/pagination';
import Header from '../../components/Header';
import Logo from '../../assets/livro.jpg';

const Home = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        async function getBooks() {
            const response = await api.get("/book")
            setData(response.data);
        }

        getBooks()
    }, []);

    
    const TOTAL_POSTS_PAGE = 12;
    const LAST_POST_INDEX = currentPage * TOTAL_POSTS_PAGE
    const FIRST_POST_INDEX = LAST_POST_INDEX - TOTAL_POSTS_PAGE
    const CURRENT_POST_INDEX = data.slice(FIRST_POST_INDEX, LAST_POST_INDEX);

    return (
        <div>
            <Header />
            <h3 className="my-3 text-center">Livros em estoque:</h3>
            <div className="cards">  
                {CURRENT_POST_INDEX.map(book => (
                    <figure style={{margin: '10px'}} key={book.id}>
                        <img src={Logo} alt="Livro" className="images" />
                        <a href={`/book/${book.id}`}><figcaption>{book.name}</figcaption></a>
                    </figure>
                ))}       
            </div>
            
            <Paginator postsPerPage={TOTAL_POSTS_PAGE} totalPosts={data.length} paginate={(page) => setCurrentPage(page)}/>
        </div>
    )}



export default Home;