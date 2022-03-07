import React, { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import * as C from "./styles";
import zoe from "../../assets/zoe.png";
import { useNavigate } from "react-router-dom"
import { PlayerData } from "../PlayerData";

type Props = {
  dataPlayer: AxiosResponse<any, any> | undefined;
  setDataPlayer: React.Dispatch<React.SetStateAction<AxiosResponse<any, any> | undefined>>
  dataMatch: AxiosResponse<any, any> | undefined;
  setDataMatch: React.Dispatch<React.SetStateAction<AxiosResponse<any, any> | undefined>>
}

export const HomePage = ({ dataPlayer, setDataPlayer }: Props) => {
  const navigate = useNavigate();
  const API_KEY = "RGAPI-c54d4550-aa4c-41f2-b5d7-48e85cd8a3ec";
  const [summonner, setSummonner] = useState<String>();
  const [notFound, setNotFound] = useState<Boolean>(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPlayerData();
    fetchMatchData(dataPlayer?.data.puuid);
  }
  var APICallString =
    "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
    + summonner
    + "?api_key=" + API_KEY;
  const fetchPlayerData = () => {
    axios.get(APICallString).then(function (response) {
      setDataPlayer(response);
      setSummonner("");
      //navigate("/playerData");
      setNotFound(false);
    }).catch(function () {
      return setNotFound(true);
    })
  }

  const fetchMatchData = (puuid: string) => {
    APICallString = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=20&api_key=" + API_KEY;
    axios.get(APICallString).then(function (response) {
      let matchsId = response.data;
      //https://americas.api.riotgames.com/lol/match/v5/matches/BR1_2455531670?api_key=RGAPI-d956a71a-d813-4076-8642-4d27ed4279dd
      matchsId.map((match: any, index: number) => {
        APICallString = "https://americas.api.riotgames.com/lol/match/v5/matches/" + match + "?api_key=" + API_KEY;
        axios.get(APICallString).then(function (response) {
          console.log("🚀 ~ file: index.tsx ~ line 48 ~ axios.get ~ response", response)
        }).catch(function (error) {
          console.log("🚀 ~ file: index.tsx ~ line 42 ~ axios.get ~ error", error);
        })
      })
      axios.get(APICallString).then(function (response) {
        console.log("🚀 ~ file: index.tsx ~ line 54 ~ response", response)

      }).catch(function (error) {
        console.log("🚀 ~ file: index.tsx ~ line 42 ~ axios.get ~ error", error);
      })
    }).catch(function (error) {
      console.log("🚀 ~ file: index.tsx ~ line 42 ~ axios.get ~ error", error);
    })
  }
  const handleChangeNick = (e: ChangeEvent<HTMLInputElement>) => {
    setSummonner(e.target.value);
  }
  return (
    <C.Container>
      <C.MainContent>
        <div>
          <img src={zoe}></img>
        </div>
        <C.FormControl
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Summoner Name"
            onChange={handleChangeNick}
            value={summonner?.toString()}
          />
          <span>BR</span>
        </C.FormControl>
        {notFound ? <p>No player data</p> : <></>}
      </C.MainContent>
    </C.Container>
  )
}
