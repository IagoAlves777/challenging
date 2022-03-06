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
  const [dataMatch, setDataMatch] = useState<AxiosResponse<any, any>>();
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route
          path='/'
          element={<HomePage
            dataPlayer={dataPlayer}
            setDataPlayer={setDataPlayer}
            dataMatch={dataMatch}
            setDataMatch={setDataMatch}
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
