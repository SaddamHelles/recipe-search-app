import styled from "styled-components";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}
const FormStyle = styled.form`
  margin: 2rem 8rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(30deg, #ffd535, #f48b30);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    outline: none;
    border-radius: 1rem;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
