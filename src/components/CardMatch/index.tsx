import { AxiosResponse } from "axios";
import * as C from "./styles";

type Props = {
  matchs: AxiosResponse<any, any>[];
}

export const CardMatch = ({ matchs }: Props) => {
  console.log("🚀 ~ file: index.tsx ~ line 9 ~ CardMatch ~ matchs", matchs);
  return (
    <C.Container>
      {matchs.map((match) => <span>A</span>)}
    </C.Container>
  );
}