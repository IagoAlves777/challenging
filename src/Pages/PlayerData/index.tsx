import { AxiosResponse } from "axios";
import { LoadScreen } from "../../components/LoadScreen";
import * as C from "./styles";
import { AppBar } from "../../components/AppBar";
type Props = {
  dataPlayer: AxiosResponse<any, any> | undefined;
  setDataPlayer: React.Dispatch<React.SetStateAction<AxiosResponse<any, any> | undefined>>
}
export const PlayerData = ({ dataPlayer, setDataPlayer }: Props) => {

  if (dataPlayer !== undefined) {
    return (
      <C.Container>
        <img src={"http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/" + dataPlayer.data.profileIconId + ".png"} alt="icon" />
        <h1>
          {dataPlayer.data.name}
        </h1>
        <h1>
          {dataPlayer.data.summonerLevel}
        </h1>
      </C.Container>
    );
  } else {
    return (
      <LoadScreen />
    );
  }
}