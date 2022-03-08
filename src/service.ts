import axios from "axios";

const API_KEY = "RGAPI-ac8e83ee-6985-45fd-bbde-c81d95244931";

class ServicoAPI {
  static getPlayerData(player: String | undefined): string {
    const APICallString =
      "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +player+"?api_key="+API_KEY;
    return APICallString;
  }

  static getAllmatchs(puuid: string): string{
    const APICallString = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/"+puuid+"/ids?start=0&count=20&api_key="+API_KEY; 
    return APICallString;
  }

  static getMatch(match: any): string{
    const APICallString = "https://americas.api.riotgames.com/lol/match/v5/matches/" + match + "?api_key=" + API_KEY;
    return APICallString;
  }

  static getData = async (call: string) => {
    const res = await axios.get(call);
    return res;
  }

}

export default ServicoAPI;
