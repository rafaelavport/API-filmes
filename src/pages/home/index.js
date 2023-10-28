import React, { useEffect, useState } from "react";
import { Container, Header, SearchContainer, SearchInput, SearchButton, StyledSelect, MovieList, MovieCard, MovieImage, Footer } from "./style";
import { Link } from 'react-router-dom';
import Carousel from './carousel.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const KEY = process.env.REACT_APP_KEY;

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [topMovies, setTopMovies] = useState([]);

  const searchMovies = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

    // Função para filtrar filmes por gênero selecionado
    const filterMoviesByGenre = () => {
        if (selectedGenre === "") {
          return movies;
        }
        return movies.filter((movie) => movie.genre_ids.includes(selectedGenre));
      };  

      useEffect(() => {
        document.title = "CineFlix";
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR&page=1`)
          .then((response) => response.json())
          .then((data) => {
            setTopMovies(data.results.slice(0, 10)); // Pegar os 10 primeiros filmes
          });
      }, [KEY]);

  useEffect(() => {
    // Obter a lista de gêneros
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      });

    // Obter a lista de filmes populares
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [KEY]);
  
  return (
    <Container>
      <Header>
        <h1>CineFlix</h1>
        <StyledSelect value={selectedGenre} onChange={(e) => setSelectedGenre(parseInt(e.target.value))}>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </StyledSelect>
        <SearchContainer>
          <SearchInput
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton onClick={searchMovies}>Buscar</SearchButton>
        </SearchContainer>
      </Header>

      <Carousel topMovies={topMovies} imagePath={imagePath} />
            
      <MovieList>
        {filterMoviesByGenre().map((movie) => (
          <MovieCard key={movie.id}>
            <Link to={`/${movie.id}`}>
              <MovieImage src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
            </Link>
          </MovieCard>
        ))}
      </MovieList>
      <Footer>
        <h5>CineFlix®</h5>
        <h6>2023</h6>
      </Footer>
    </Container>
  );
}

export default Home;


