import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  h1{
    font-family: 'Press Start 2P', cursive;
    color:white;
  }

  body, input, button {
    
  }

  button {
    cursor: pointer;
  }
`;


