import Header from "./Components/Header/Header";
import "./App.scss";
import Homepage from "./pages/HomePage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamSignupPage from "./pages/TeamSignupPage/TeamSignupPage";
import PlayerSignupPage from "./pages/PlayerSignupPage/PlayerSignupPage";
import TeamMainPage from "./pages/TeamMainPage/TeamMainPage";
import axios from "axios";
import { useEffect, useState } from "react";
import PlayerProfile from "./pages/PlayerProfile/PlayerProfile";
import PlayerMainPage from "./pages/PlayerMainPage/PlayerMainPage";
import TeamProfile from "./pages/TeamProfile/TeamProfile";

function App() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [messages, setMessages] = useState([]);

  const getPlayers = async () => {
    const { data } = await axios.get("http://localhost:8080/players");
    setPlayers(data);
  };

  useEffect(() => {
    getPlayers();
  }, []);

  const getTeams = async () => {
    const { data } = await axios.get("http://localhost:8080/teams");
    setTeams(data);
  };

  useEffect(() => {
    getTeams();
  }, []);

  const getMessages = async () => {
    const { data } = await axios.get("http://localhost:8080/messages");
    setMessages(data);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/team-signup-page"
            element={<TeamSignupPage getTeams={getTeams} />}
          />
          <Route
            path="/player-signup-page"
            element={<PlayerSignupPage getPlayers={getPlayers} />}
          />
          <Route
            path="/team-home"
            element={<TeamMainPage players={players} />}
          />

          <Route
            path="/player-home"
            element={<PlayerMainPage teams={teams} />}
          />
          <Route
            path="/team-home/player-profile/:playerId"
            element={<PlayerProfile players={players} />}
          />
          <Route
            path="/player-home/team-profile/:teamId"
            element={<TeamProfile teams={teams} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
