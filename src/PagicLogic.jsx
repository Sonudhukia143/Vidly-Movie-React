import { useState } from "react";
import './App.css';

export default function PageLogic ({pagesData}) {
    const {NumOfMovies,PageLength,goToPage,currentPage,previousPage,nextPage} = pagesData;

    const numOfPages = Math.ceil(NumOfMovies/PageLength);

    const pages = [];

    if(numOfPages === 1){
        return null;
    }else{
        for(let i =1; i <= numOfPages; i++){
            pages.push(<li key={i} className={currentPage === i?"page-item active":"page-item"}><a className="page-link" onClick={() => goToPage(i)}>{i}</a></li>);
        }
    }

    return (
        <span style={{display:'flex',justifyContent:'center'}}>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={() => previousPage(currentPage)}>Previous</a></li>
                    {
                        pages
                    }
                    <li className="page-item"><a className="page-link" onClick={() => nextPage(currentPage)}>Next</a></li>
                </ul>
            </nav>
        </span>
    )
}