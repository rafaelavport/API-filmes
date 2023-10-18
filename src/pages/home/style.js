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
  background-color: #2a2a2a;
  border: 1px solid #333;
  margin: 15px;
  border-radius: 10px;
  width: 200px;
  transition: transform 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
  margin: 10px;
  color: #fff;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MovieButton = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 10px auto;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff0f24;
  }
`;

export const Footer = styled.footer`
  background-color: #141414;
  color: #8c8c8c;
  padding: 20px;
  text-align: center;
`;


