const API_KEY = "444ec274fd2a9776a92cd8a6e5734d3b";
const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us` ,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27` ,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749` ,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,   
}

export default requests;