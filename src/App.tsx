import { ChangeEvent, useState } from 'react';
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import HomePage from './Pages/HomePage';
import GlobalStyle from "./stylesGlobal";
function App() {
  const [summonner, setSummonner] = useState<String>();
  const [PlayerData, setPlayerData] = useState<AxiosResponse<any, any>>();
  const API_KEY = "RGAPI-c2988b70-574f-45e3-b0be-b52f84b26b86";

  var APICallString =
    "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
    + summonner
    + "?api_key=" + API_KEY;


  function refrashData() {
    axios.get(APICallString).then(function (response) {
      setPlayerData(response);
    }).catch(function (error) {
      console.log(error);
    })
    setSummonner("");
  }

  const handleChangeNick = (e: ChangeEvent<HTMLInputElement>) => {
    setSummonner(e.target.value);
  }
  return (
    <>
      <HomePage />
      <GlobalStyle />
    </>
  )
}

export default App
