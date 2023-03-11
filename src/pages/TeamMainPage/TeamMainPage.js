import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlayerList from "../../Components/PlayerList/PlayerList";
import "./TeamMainPage.scss";

const createData = (name, position, level, id) => {
  return { name, position, level, id };
};

const TeamMainPage = ({ players, handleLevelFilter, handlePositionFilter }) => {
  const navigate = useNavigate();

  const rows = players.map((player) => {
    console.log(player);

    const keys = Object.keys(player.positionPlayed);
    const value = Object.values(player.positionPlayed);

    const positions = value.map((value, i) => {
      if (value) {
        return <p>{keys[i]}</p>;
      }
    });
    return createData(player.playerName, positions, player.level, player.id);
  });
  return (
    <>
      <div className="player-list">
        <h1 className="player-list__title">Player List</h1>
        <div className="player-list__box">
          <div className="player-list__filters">
            <h4>Filter:</h4>
            <div className="player-list__filter-wrapper">
              <select
                className="player-list__filtered-value"
                onChange={(e) => handlePositionFilter(e.target.value)}
                name="positionPlayed"
                id="position"
              >
                <option value={0}>Position</option>
                <option value="Goalkeeper">Goalkeeper</option>
                <option value="Defender">Defender</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Forward">Forward</option>
              </select>
              <select
                className="player-list__filtered-value"
                onChange={(e) => handleLevelFilter(e.target.value)}
                name="level"
                id="level"
              >
                <option value={0}>Level</option>
                <option value="Casual">Casual</option>
                <option value="Competitive Amateur">Competitive Amateur</option>
                <option value="Semi-pro">Semi-pro</option>
              </select>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Player Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Playing Level</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    onClick={() =>
                      navigate(`/team-home/player-profile/${row.id}`)
                    }
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.position}</TableCell>
                    <TableCell>{row.level}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="player-list__key">
            <h4 className="player-list__label">Player Name</h4>
            <h4 className="player-list__label">Position</h4>
            <h4 className="player-list__label">Playing Level</h4>
          </div>
          {!players.length && (
            <div className="skeleton__wrapper">
              <p>Backend is booting up...</p>
              <Skeleton
                className="skeleton"
                variant="rectangular"
                width="100%"
                height={50}
              />
              <Skeleton
                className="skeleton"
                variant="rectangular"
                width="100%"
                height={50}
              />
              <Skeleton
                className="skeleton"
                variant="rectangular"
                width="100%"
                height={50}
              />
            </div>
          )}
          {players.map((player) => {
            return <PlayerList player={player} key={player.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TeamMainPage;
