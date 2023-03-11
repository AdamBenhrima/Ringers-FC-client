import { TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TeamList = ({ team }) => {
  const navigate = useNavigate();

  return (
    <TableRow
      className="team-list__values"
      onClick={() => navigate(`/player-home/team-profile/${team.id}`)}
    >
      <TableCell>{team.name}</TableCell>
      <TableCell>{team.position}</TableCell>
      <TableCell>{team.level}</TableCell>
    </TableRow>
  );
};

export default TeamList;
