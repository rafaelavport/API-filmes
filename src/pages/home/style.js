import styled from "styled-components";

export const Container = styled.div`
    background-color: #141414; /* Cor de fundo escura semelhante à da HBO Max */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    background-color: #1c1c1c; /* Cor de fundo do cabeçalho */
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 150px;
`;

export const MovieList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

export const Movie = styled.li`
    background-color: #1c1c1c; /* Cor de fundo do filme */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    img {
        width: 100%;
        border-radius: 8px 8px 0 0;
    }

    &:hover {
        transform: translateY(-5px);
    }

    span {
        font-weight: bold;
        font-size: 1.2rem;
        padding: 1rem;
        color: white;
    }

    a {
        text-decoration: none;
    }
`;

export const Btn = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    background-color: #ff5722; /* Cor laranja semelhante à da HBO Max */
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #ff4500; /* Cor laranja mais escura ao passar o mouse */
    }
`;


