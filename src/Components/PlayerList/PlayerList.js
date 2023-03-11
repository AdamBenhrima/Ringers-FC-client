import { TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PlayerList = ({ player }) => {
  const navigate = useNavigate();

  return (
    <TableRow
      className="player-list__values"
      onClick={() => navigate(`/team-home/player-profile/${player.id}`)}
    >
      <TableCell>{player.name}</TableCell>
      <TableCell>{player.position}</TableCell>
      <TableCell>{player.level}</TableCell>
    </TableRow>
  );
};

export default PlayerList;
