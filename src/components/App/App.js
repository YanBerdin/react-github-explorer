import "./App.scss";
import Header from "../Header/Header";
// import IndexPage from "../IndexPage/IndexPage";
import SearchBar from "../SearchBar/SearchBar";
import ReposResults from "../ReposResults/ReposResults";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const loadRepositories = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/search/repositories?q=React"
      );
      
      setRepositories(response.data.items);
      setSearchResults(response.data.total_count);

      console.log(response.data.total_count);
      console.log(response.data.items);
    } catch (error) {
      alert("Le serveur ne fonctionne plus, revenez plus tard.");
    }
  };


  // // Au premier rendu du composant App, je souhaite récupérer la liste des repositories
  // useEffect(() => {
  //   axios.get("https://api.github.com/search/repositories?q=React")
  //     .then((response) => {
  //       // Quand tout se passe bien, le callback passé à ".then"
  //       // est appelé.
  //       setRepositories(response.data.items);
  //     })
  //     .catch((err) => {
  //       console.err(err);
  //     });
  // }, []);


  // useEffect(() => {
  //   console.log("Hello ! Le composant App est rendu");
  // }, []);

  return (
    <div className="app">
      <button type="button" onClick={loadRepositories}>
        Charger les Repositories
      </button>
      <Header />
      <SearchBar />
      {/* <IndexPage /> */}
      <ReposResults repositories={repositories} searchResults={searchResults} />
    </div>
  );
}

export default App;

