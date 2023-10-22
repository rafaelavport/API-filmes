import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importe o Link corretamente

const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: #333; // Cor de fundo do carousel
`;

const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px; // Altura do carousel
  background-size: cover;
  background-position: center;
  color: #fff; // Cor do texto dentro do carousel
  background-image: 10px;
`;

const CarouselCaption = styled.div`
  background: rgba(0, 0, 0, 0.5); // Fundo escuro para o texto
  padding: 10px;
`;

const Carousel = ({ topMovies, imagePath }) => (
  <CarouselContainer id="movieCarousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      {topMovies.map((movie, index) => (
        <CarouselItem key={movie.id} className={`carousel-item${index === 0 ? " active" : ""}`} style={{ backgroundImage: `url(${imagePath}${movie.poster_path})`, width: 200 }}>
          <Link to={`/${movie.id}`}> {/* Use o Link aqui */}
            <CarouselCaption>
              <h3>{movie.title} </h3>
              <p>{movie.overview}</p>
            </CarouselCaption>
          </Link>
        </CarouselItem>
      ))}
    </div>
    <a className="carousel-control-prev" href="#movieCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Anterior</span>
    </a>
    <a className="carousel-control-next" href="#movieCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Próximo</span>
    </a>
  </CarouselContainer>
);

export default Carousel;
