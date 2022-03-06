import * as C from "./styles";
import lulu from '../../assets/load.gif';
import { Spinner } from "react-bootstrap";


export const LoadScreen = () => {
  return (
    <C.Container>
      <img src={lulu} alt="load" />
      <h1>Loading...</h1>
    </C.Container>
  );
}