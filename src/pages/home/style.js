import styled from "styled-components";

export const Container = styled.div`
  background-color: #141414;
  color: white;
  font-family: monospace;
`;

export const Header = styled.header`
  background-color: #141414;
  height: 90px;
  padding: 20px;
  display: flex;
  margin-left: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: absolute;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  margin-top: 40px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  margin-top: 40px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledSelect = styled.select`
  padding: 7px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  color: #333;
  margin-left: 51vw;
  margin-top: 2.5vh;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

export const MovieCard = styled.div`
  border: 2px solid #333;
  margin:20px;
  border-radius: 10px;
  width: 15vw;
  height: 30vh;
  transition: transform 0.5s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    border: 2px solid white;
    transition: transform 0.5s;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

export const MovieButton = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 3vh 3.2vw;
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