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
  const [summonner, setSummonner] = useState<String>();
  const [matchs, setmatchs] = useState<any>([]);
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route
          path='/'
          element={<HomePage
            summonner={summonner}
            setSummonner={setSummonner}
          />}
        >
        </Route>
        <Route
          path={'/playerData'}
          element={<PlayerData
          summonner={summonner}
          />}
        >
        </Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
