import Header from "./Components/Header/Header";
import "./App.scss";
import Homepage from "./pages/HomePage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamSignupPage from "./pages/TeamSignupPage/TeamSignupPage";
import PlayerSignupPage from "./pages/PlayerSignupPage/PlayerSignupPage";
import TeamMainPage from "./pages/TeamMainPage/TeamMainPage";
import axios from "axios";
import { useEffect, useState } from "react";

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
          <Route path="/team-signup-page" element={<TeamSignupPage />} />
          <Route path="/player-signup-page" element={<PlayerSignupPage />} />
          <Route
            path="/team-home"
            element={<TeamMainPage players={players} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
