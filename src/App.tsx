import { HomePage } from './Pages/HomePage';
import GlobalStyle from "./stylesGlobal";
import { AppBar } from './components/AppBar';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { PlayerData } from './Pages/PlayerData';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
function App() {
  const [dataPlayer, setDataPlayer] = useState<AxiosResponse<any, any>>();
  const [matchs, setmatchs] = useState<any>([]);
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route
          path='/'
          element={<HomePage
            dataPlayer={dataPlayer}
            setDataPlayer={setDataPlayer}
            matchs={matchs}
            setMatchs={setmatchs}
          />}
        >
        </Route>
        <Route
          path={'/playerData'}
          element={<PlayerData
            dataPlayer={dataPlayer}
            setDataPlayer={setDataPlayer}
          />}
        >
        </Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
