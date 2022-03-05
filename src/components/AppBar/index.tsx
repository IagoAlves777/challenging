import * as C from "./styles";
import logo from "../../assets/logo.png";

export const AppBar = () => {
  return (
    <C.Container>
      <C.ListMenu>
        <img src={logo} alt="logo" />
        <li><a href="/">Home</a></li>
        <li><a href="/">Champions</a></li>
        <li><a href="/">A.R.A.M</a></li>
        <li><a href="/">U.R.F</a></li>
        <li><a href="/">Stats</a></li>
        <li><a href="/">Leaderboards</a></li>
        <li><a href="/">Pro Matches</a></li>
        <li><a href="/">Multi-Search</a></li>
      </C.ListMenu>
    </C.Container>
  );
}