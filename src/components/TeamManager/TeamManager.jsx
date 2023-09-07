import { useId, useState } from 'react';

function TeamManager() {
  const [teamName, setTeamName] = useState('');
  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem('teams');
    return savedTeams ? JSON.parse(savedTeams) : [];
  });
 const [uniqueId] = useState(useId())
  const handleCreateTeam = (e) => {
    e.preventDefault();
    const teamId = uniqueId
    const newTeam = {
      id: teamId,
      name: teamName,
      members: []
    };
    setTeams([...teams, newTeam]);
    setTeamName('');

    // Store updated teams list in localStorage
    localStorage.setItem('teams', JSON.stringify([...teams, newTeam]));
  };

  const handleJoinTeam = (teamId) => {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];

  // Find the team with the given teamId
  const targetTeam = teams.find(team => team.id === teamId);

  if (targetTeam) {
    // Check if the current user is already a member of the team
    const isUserAlreadyMember = targetTeam.members.includes(currentUser.id);

    if (!isUserAlreadyMember) {
      // Add the current user to the team's members list
      targetTeam.members.push(currentUser.id);

      // Update the teams list in localStorage
      localStorage.setItem('teams', JSON.stringify(teams));
    } else {
      console.log("User is already a member of this team");
    }
  } else {
    console.log("Team not found");
  }
  };

  return (
    <div>
      <h2>Create Team</h2>
      <form onSubmit={handleCreateTeam}>
        <div>
          <label>Team Name:</label>
          <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
        </div>
        <button type="submit">Create Team</button>
      </form>

      <h2>Join Team</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            {team.name}
            <button onClick={() => handleJoinTeam(team.id)}>Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamManager;
