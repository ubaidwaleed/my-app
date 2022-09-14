import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [repos, setRepos] = useState({});

  useEffect(() => {
    async function getRepos() {
      const response = await fetch(
        "https:/api.github.com/users/mohammadmohsin/repos"
      );
      const data = await response.json();
      console.log(data);
      setRepos(data);
    }
    getRepos();
  }, []);

  return (
    <div className="App">
      <ul>
        {repos.map((repoObj, ind) => {
          return <li key={repoObj.ind}>{repoObj.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
