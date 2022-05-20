import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, Card, Gradient } from "../styles/index";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=8cdac6f133f54ab79a2041d03dea38c5&number=9"
    );
    const data = await api.json();
    // localStorage.setItem("popular", JSON.stringify(data.recipes));
    setPopular(data.recipes);
    console.log("Popular Recipes Data: ", data.recipes);
  };

  return (
    <div className="welcome">
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}
export default Popular;
