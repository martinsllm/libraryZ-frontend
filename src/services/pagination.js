import React from 'react';

const Paginator = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <div class="paginate">
            <ul className="pagination">
                <li className="page-item">
                    <span onClick={() => paginate(1)} className="page-link">{'<<'}</span>
                </li>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <span onClick={() => paginate(number)} className="page-link">{number}</span>
                        </li>
                    ))}
                <li className="page-item">
                    <span onClick={() => paginate(pageNumbers.length)} className="page-link">{'>>'}</span>
                </li>
            </ul> 
        </div> 
    );
}

export default Paginator;