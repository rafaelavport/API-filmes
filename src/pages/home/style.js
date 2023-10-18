import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    background-color: #141414; /* Cor de fundo semelhante à da HBO Max */

    h1 {
        text-align: center;
        margin: 4rem 0;
        color: #ffffff; /* Cor do texto branca */
        font-size: 2rem;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #282828; /* Cor de fundo semelhante à da HBO Max */
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    img {
        width: 180px;
        border-radius: 8px;
        margin-bottom: 1rem;
    }

    span {
        font-weight: bold;
        font-size: 1.2rem;
        text-align: center;
        color: #ffffff; /* Cor do texto branca */
    }

    a {
        transition: all 0.3s;
        text-decoration: none;
        color: #ffffff; /* Cor do texto branca */
    }

    a:hover {
        transform: scale(1.1);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: #ffffff;
    background-color: #ff0000; /* Cor semelhante à da HBO Max */
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 250ms;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
        background-color: #ff2222; /* Cor mais clara ao passar o mouse */
    }
`;

