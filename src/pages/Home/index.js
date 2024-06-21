import React, { Component } from 'react';
import api from '../../services/api';
import Paginator from '../../services/pagination';
import Header from '../../components/Header';
import Logo from '../../assets/livro.jpg';

class Home extends Component {
    state = {
        books: [],
        currentPage:1
    }

    async componentDidMount() {
        const response = await api.get("/book")
        this.setState({ books: response.data });
    }

    render() {
        const TOTAL_POSTS_PAGE = 12;
        const LAST_POST_INDEX = this.state.currentPage * TOTAL_POSTS_PAGE
        const FIRST_POST_INDEX = LAST_POST_INDEX - TOTAL_POSTS_PAGE
        const CURRENT_POST_INDEX = this.state.books.slice(FIRST_POST_INDEX, LAST_POST_INDEX);

        return (
            <div>
                <Header />
                <h3 className="my-3 text-center">Livros em estoque:</h3>
                <div class="cards">  
                    {CURRENT_POST_INDEX.map(book => (
                        <figure style={{margin: '10px'}}>
                            <img src={Logo} alt="Livro" class="images" />
                            <a href=''><figcaption>{book.name}</figcaption></a>
                        </figure>
                    ))}       
                </div>
               
                <Paginator postsPerPage={TOTAL_POSTS_PAGE} totalPosts={this.state.books.length} paginate={(page) => this.setState({ currentPage: page })}/>
             </div>
        )}

}

export default Home;