import React, { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import * as C from "./styles";
import zoe from "../../assets/zoe.png";
import { useNavigate } from "react-router-dom"
import { PlayerData } from "../PlayerData";
import ServicoAPI from "../../service";

type Props = {
  summonner: String | undefined;
  setSummonner: React.Dispatch<React.SetStateAction<String | undefined>>;
  
}

export const HomePage = ({ summonner, setSummonner }: Props) => {
  const navigate = useNavigate();
  
  const [notFound, setNotFound] = useState<Boolean>(false);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPlayerData();
  }
  const fetchPlayerData = () => {
    const APICallString = ServicoAPI.getPlayerData(summonner)
    axios.get(APICallString).then(function(){
      navigate("/playerData");
      setNotFound(false);
    }).catch(function () {
      return setNotFound(true);
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
