import React from 'react';

const Paginator = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        
            <ul className="pagination" style={{position: "relative"}}>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">{number}</button>
                    </li>
                ))}
            </ul>
        
    );
}

export default Paginator;