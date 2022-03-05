import React from "react";
import * as C from "./styles";
import zoe from "../../assets/zoe.png";
import { AppBar } from "../../components/AppBar";

function HomePage() {
  return (
    <C.Container>
      <AppBar/>
      <C.MainContent>
        <div>
          <img src={zoe}></img>
        </div>
        <C.FormControl>
          <input
            type="text"
            placeholder="Summoner Name"
          />
        </C.FormControl>
      </C.MainContent>
    </C.Container>
  )
}

export default HomePage;