import * as C from "./styles";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
export const AppBar = () => {
  const navigate = useNavigate();
  return (
    <C.Container>
      <C.ListMenu>
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Champions</Link></li>
        <li><Link to='/'>A.R.A.M</Link></li>
        <li><Link to='/'>U.R.F</Link></li>
        <li><Link to='/'>Stats</Link></li>
        <li><Link to='/'>Leaderboards</Link></li>
        <li><Link to='/'>Pro Matches</Link></li>
        <li><Link to='/'>Multi-Search</Link></li>
      </C.ListMenu>
    </C.Container>
  );
}