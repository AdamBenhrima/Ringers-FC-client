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
import TeamList from "../../Components/TeamList/TeamList";
import "./PlayerMainPage.scss";

const createData = (name, position, level, id) => {
  return { name, position, level, id };
};

const PlayerMainPage = ({ teams, handleLevelFilter, handlePositionFilter }) => {
  const navigate = useNavigate();

  const rows = teams.map((team) => {
    console.log(team);

    const keys = Object.keys(team.positionNeeded);
    const value = Object.values(team.positionNeeded);

    const positions = value.map((value, i) => {
      if (value) {
        return <p>{keys[i]}</p>;
      }
    });
    return createData(team.teamName, positions, team.level, team.id);
  });

  return (
    <>
      <div className="team-list">
        <h1 className="team-list__title">Team List</h1>
        <div className="team-list__box">
          <div className="team-list__filters">
            <h4>Filter:</h4>
            <div className="team-list__filter-wrapper">
              <select
                className="team-list__filtered-value"
                onChange={(e) => {
                  handlePositionFilter(e.target.value);
                }}
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
                className="team-list__filtered-value"
                onChange={(e) => {
                  console.log(e.target.value);
                  handleLevelFilter(e.target.value);
                }}
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
                  <TableCell>Team Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Playing Level</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    onClick={() =>
                      navigate(`/player-home/team-profile/${row.id}`)
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

          <div className="team-list__key">
            <h4 className="team-list__label">Team Name</h4>
            <h4 className="team-list__label">Position</h4>
            <h4 className="team-list__label">Playing Level</h4>
          </div>
          {!teams.length && (
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
          {teams.map((team) => {
            return <TeamList team={team} key={team.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PlayerMainPage;
