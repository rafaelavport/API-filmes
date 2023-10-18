import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    background-color: #f0f0f0; /* Cor de fundo mais clara */
    font-family: Arial, sans-serif;
    text-align: center;

    h1 {
        font-size: 2.5rem;
        margin: 2rem 0;
        color: #333; /* Cor do texto mais escura */
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 0;
    padding: 0;
`;

export const Movie = styled.li`
    background-color: #fff;
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
        color: #333;
    }

    a {
        text-decoration: none;
    }
`;

export const Btn = styled.button`
    margin-top: 10px;
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-color: #ff5722; /* Cor laranja */
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #ff4500; /* Cor laranja mais escura ao passar o mouse */
    }
`;


