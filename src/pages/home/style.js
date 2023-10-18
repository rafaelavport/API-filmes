import styled from "styled-components";

export const Container = styled.div`
  background-color: #141414;
  color: white;
  font-family: Arial, sans-serif;
`;

export const Header = styled.header`
  background-color: #141414;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

export const MovieCard = styled.div`
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 5px;
  margin: 10px;
  width: 200px;
`;

export const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
  margin: 10px;
`;

export const MovieButton = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  background-color: #141414;
  color: #8c8c8c;
  padding: 20px;
  text-align: center;
`;


