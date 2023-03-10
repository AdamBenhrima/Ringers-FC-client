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
import Footer from "./Components/Footer/Footer";

function App() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [messages, setMessages] = useState([]);

  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

  const getPlayers = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/players`
    );
    setPlayers(data);
  };

  useEffect(() => {
    getPlayers();
  }, []);

  const getTeams = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/teams`
    );
    setTeams(data);
  };

  useEffect(() => {
    getTeams();
  }, []);

  useEffect(() => {
    const fetchPlayers = async () => {
      let { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/players`
      );
      if (selectedLevel) {
        data = data.filter((player) => player.level === selectedLevel);
      }

      if (selectedPosition) {
        data = data.filter((player) => player.positionPlayed[selectedPosition]);
      }

      setPlayers(data);
    };
    fetchPlayers();
  }, [selectedLevel, selectedPosition]);

  useEffect(() => {
    const fetchTeams = async () => {
      let { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/teams`
      );
      if (selectedLevel) {
        data = data.filter((team) => team.level === selectedLevel);
      }

      if (selectedPosition) {
        data = data.filter((team) => team.positionNeeded[selectedPosition]);
      }

      setTeams(data);
    };
    fetchTeams();
  }, [selectedLevel, selectedPosition]);

  const getMessages = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/messages`
    );
    setMessages(data);
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleLevelFilter = (selectedLevel) => {
    setSelectedLevel(selectedLevel === "0" ? 0 : selectedLevel);
  };

  const handlePositionFilter = (selectedPosition) => {
    setSelectedPosition(selectedPosition === "0" ? 0 : selectedPosition);
  };

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
            element={
              <TeamMainPage
                players={players}
                handleLevelFilter={handleLevelFilter}
                handlePositionFilter={handlePositionFilter}
              />
            }
          />
          <Route
            path="/player-home"
            element={
              <PlayerMainPage
                teams={teams}
                handleLevelFilter={handleLevelFilter}
                handlePositionFilter={handlePositionFilter}
              />
            }
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
