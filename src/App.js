import Header from "./Components/Header/Header";
import "./App.scss";
import Homepage from "./pages/HomePage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamSignupPage from "./pages/TeamSignupPage/TeamSignupPage";
import PlayerSignupPage from "./pages/PlayerSignupPage/PlayerSignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/team-signup-page" element={<TeamSignupPage />} />
          <Route path="/player-signup-page" element={<PlayerSignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
