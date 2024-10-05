export default function changePage (page,PageLength,NumOfMovies,movieData) {
    let arrOfNewItems = [];

    arrOfNewItems = movieData.slice((page * PageLength) - PageLength , PageLength * page);

    return arrOfNewItems;
}