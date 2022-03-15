import axios, { AxiosResponse } from "axios";
import { LoadScreen } from "../../components/LoadScreen";
import * as C from "./styles";
import { AppBar } from "../../components/AppBar";
import ServicoAPI from "../../service";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner'
import { CardMatch } from "../../components/CardMatch";

type Props = {
  summonner: String | undefined;
}

export const PlayerData = ({ summonner }: Props) => {
  const [loading, setLoading] = useState(0);
  const [playerData, setPlayerData] = useState<AxiosResponse<any, any>>();
  const [matchsId, setMatchsId] = useState<AxiosResponse<any, any>>();
  const [matchs, setMatchs] = useState<AxiosResponse<any, any>[]>([]);
  //console.log("🚀 ~ file: index.tsx ~ line 18 ~ PlayerData ~ matchs", matchs)

  useEffect(() => {
    async function fetchPlayerData() {
      setLoading(1);
      let APICallString = ServicoAPI.getPlayerData(summonner);
      const res = await axios.get(APICallString).catch((e) => alert('HOUVE UM ERRO AO BUSCAR O INVOCADOR'));
      if (res && res.data) {
        setPlayerData(res)
      }
    }
    console.log("1 - fetchPlayerData")
    fetchPlayerData();
  }, [])

  useEffect(() => {
    async function fetchmatchsId() {
      let APICallString = ServicoAPI.getAllmatchs(playerData?.data.puuid);
      const res = await axios.get(APICallString).catch((e) => console.log(e));
      if (res && res.data) {
        setMatchsId(res);
      }
    }
    fetchmatchsId();
    console.log("2 - fetchmatchsId")
  }, [playerData])

  useEffect(() => {
    setLoading(0);
  }, [matchs])

  useEffect(() => {
    async function fetchmatchs() {
      let partidas: AxiosResponse<any, any>[] = [];
      matchsId?.data.map(async (match: any, index: number) => {
        let APICallString = ServicoAPI.getMatch(match);
        let partida = await axios.get(APICallString);
        partidas.push(partida);
      })
      setMatchs(partidas)
    }
    fetchmatchs();
    console.log("3 - fetchmatchs")
  }, [matchsId])

  return (
    <>
      {loading ?
        <div>
          <LoadScreen />
        </div> :
        <C.Container>
          <img src={"http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/" + playerData?.data.profileIconId + ".png"} alt="icon" />
          <h1>
            {playerData?.data.name}
          </h1>
          <h1>
            Lv {playerData?.data.summonerLevel}
          </h1>
          <CardMatch
            matchs={matchs}
          />
        </C.Container>
        
      }
    </>

  );
}