import logo from './logo.svg';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';
import TeamCard from './TeamCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Mission 12 - ena0920</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="team-list">
        {teamsData.map((team) => (
          <TeamCard
            key={team.school}
            school={team.school}
            mascot={team.mascot}
            city={team.city}
            state={team.state}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
