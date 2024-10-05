import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageLogic from './PagicLogic';
import Database from './Database';
import Displaymovies from './Displaymovies';
import changePage from './utils/paginationLogics';

const movieData = Database();

function App() {
  const [favouraite,setfavouraite] = useState(movieData.slice(0,4));
  const [currentPage,setCurrentPage] = useState(1);
  let PageLength=4;
  let NumOfMovies = movieData.length;

  const pagesData = {NumOfMovies,PageLength,goToPage,currentPage,previousPage,nextPage};

  function addToFavouraite (id) {
    setfavouraite(favouraite.map(e => {
      if(e.id === id){
        return {...e , isFavouraite: !e.isFavouraite };
      }else {
        return e;
      }
    }));
  }

  function goToPage(page) {
    setCurrentPage(page);

    setfavouraite(changePage(page,pagesData.PageLength,pagesData.NumOfMovies,movieData));
  }

  function previousPage(currentPage){
    const numofpages = Math.ceil(NumOfMovies/PageLength);

    if(currentPage === 1){
      setfavouraite(changePage( numofpages ,pagesData.PageLength,pagesData.NumOfMovies,movieData));
      setCurrentPage(numofpages);
    }else {
      setfavouraite(changePage((currentPage - 1),pagesData.PageLength,pagesData.NumOfMovies,movieData));
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage (currentPage) {
    const numofpages = Math.ceil(NumOfMovies/PageLength);

    if(currentPage === numofpages){
      setfavouraite(changePage( 1 ,pagesData.PageLength,pagesData.NumOfMovies,movieData));
      setCurrentPage(1)
    }else {
      setfavouraite(changePage((currentPage +1),pagesData.PageLength,pagesData.NumOfMovies,movieData));
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <h1 style={{ display:'flex',justifyContent:'center' }}>Vidly App</h1>
      <Displaymovies  addToFavouraite={addToFavouraite} favouraite={favouraite}/>
      <PageLogic pagesData = {pagesData}/>
    </>
  )
}

export default App
