import { useEffect, useState } from "react";
import { Container, Header, MovieList, MovieCard, MovieImage, MovieTitle, MovieButton, Footer } from "./style";
import { Link } from "react-router-dom";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
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
      </Header>
      <MovieList>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <MovieImage src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
            <Link to={`/${movie.id}`}>
              <MovieButton>Detalhes</MovieButton>
            </Link>
          </MovieCard>
        ))}
      </MovieList>
      <Footer>
      <h5>CineFlix</h5>
      </Footer>
    </Container>
  );
}

export default Home;

