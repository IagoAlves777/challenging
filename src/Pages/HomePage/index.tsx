import React, { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import * as C from "./styles";
import zoe from "../../assets/zoe.png";
import { useNavigate } from "react-router-dom"
import { PlayerData } from "../PlayerData";
import ServicoAPI from "../../service";

type Props = {
  dataPlayer: AxiosResponse<any, any> | undefined;
  setDataPlayer: React.Dispatch<React.SetStateAction<AxiosResponse<any, any> | undefined>>
  matchs: any;
  setMatchs: React.Dispatch<any>;
}

export const HomePage = ({ dataPlayer, setDataPlayer, matchs, setMatchs }: Props) => {
  const navigate = useNavigate();
  const [summonner, setSummonner] = useState<String>();
  const [notFound, setNotFound] = useState<Boolean>(false);
  const [matchsId, setmatchsId] = useState<any>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //navigate("/playerData");
    fetchPlayerData();
  }
  useEffect(() => {
    fetchmatchsId();
  }, [dataPlayer])

  useEffect(() => {
    fetchmatchs();
  }, [matchsId])

  useEffect(() => {
    console.log("🚀 ~ file: index.tsx ~ line 39 ~ HomePage ~ matchs", matchs)
  }, [matchs])


  const fetchPlayerData = async () => {
    let APICallString = ServicoAPI.getPlayerData(summonner);
    setDataPlayer(await ServicoAPI.getData(APICallString));
    setSummonner("");
    setNotFound(false);
  }

  const fetchmatchsId = async () => {
    let APICallString = ServicoAPI.getAllmatchs(dataPlayer?.data.puuid);
    setmatchsId(await ServicoAPI.getData(APICallString));
  }

  const fetchmatchs = async () => {
    let partidas: AxiosResponse<any, any>[] = [];
    matchsId.data.map(async (match: any, index: number) => {
      let APICallString = ServicoAPI.getMatch(match);
      let partida = await ServicoAPI.getData(APICallString);
      partidas.push(partida)
    })
    setMatchs(partidas);
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
