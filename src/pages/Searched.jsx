import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=8cdac6f133f54ab79a2041d03dea38c5&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipe(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searchedRecipe.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={""} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Searched;
