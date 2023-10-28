import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importe o Link corretamente
import ('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: #333; // Cor de fundo do carousel
`;

const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Posição à esquerda e à direita */
  height: 300px; /* Altura do carousel */
  background-color: #000; /* Fundo preto */
  color: #fff; /* Cor do texto dentro do carousel */
  padding: 20px; /* Espaçamento interno */

  // Estilize a imagem do filme à esquerda
  .movie-image {
    border-radius: 10px;
    width: 300px; /* Largura da imagem */
    height: 100%; /* Altura igual à do contêiner */
    margin-left: 150px;
    background-size: cover; /* Para preencher a largura */
    background-position: left center; /* Alinhar à esquerda */
  }

  .movie-info {
    font-family: 'Bebas-Neue', sans-serif;
    width: calc(100% - 150px); /* Largura do restante para título e sinopse */
    padding-right: 170px;
    padding-left: 60px; /* Espaçamento à esquerda do título e sinopse */
  }
  h4{
    margin-bottom: 25vh;
  }
`;

const Carousel = ({ topMovies, imagePath }) => (
  <CarouselContainer id="movieCarousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      {topMovies.map((movie, index) => (
        <CarouselItem key={movie.id} className={`carousel-item${index === 0 ? " active" : ""}`}>
                <h4>Recomendação do dia: </h4>
          <div className="movie-image" style={{ backgroundImage: `url(${imagePath}${movie.poster_path})` }}></div>
          <div className="movie-info">
            <Link to={`/${movie.id}`}>
              <h1>{movie.title}</h1>
            </Link>
            <p>{movie.overview}</p>
          </div>
        </CarouselItem>
      ))}
    </div>
  </CarouselContainer>
);

export default Carousel;
