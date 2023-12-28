import "./App.scss";

import {
  Container,
  Menu,
  Segment,
  Button,
  Dimmer,
  Loader,
} from "semantic-ui-react";

import { NavLink, Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import ReposResults from "../ReposResults/ReposResults";
import Message from "../Message/Message";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [newSearch, setNewSearch] = useState("react");
  const [repositoriesError, setRepositoriesError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const segmentStyle = {
    margin: "0",
  };

  const loadRepositories = async () => {
    // Avant l'appel à l'API => charger les données en passant loading dans state à "true"
    setLoading(true);
    try {
      const response = await axios.get(
        // `https://api.github.com/search/repositories?q=${newSearch}`
        `https://api.github.com/search/repositories?q=${newSearch}&sort=stars&order=desc&page=${currentPage}&per_page=30`
      );
      // MAJ de la liste des repos dans State
      setRepositories(response.data.items);
      // MAJ Nbre de repos dans State
      setTotalCount(response.data.total_count);

      // console.log(response.data.items);
      // console.log(repositories);
    } catch (error) {
      alert("Le serveur ne fonctionne plus, revenez plus tard.");
      // Capture l'erreur
      setRepositoriesError(error);
    } finally {
      // le callback passé à finally est toujours appelé par axios
      // que la requête soit ok ou soit en erreur
      setLoading(false); //arrêter l’indicateur de chargement
    }
  };

  useEffect(() => {
    // console.log("App est rendu");
    loadRepositories();
    // console.log("Chargement repos 1er affichage");
  }, [currentPage]); // Appel API à chaque MAJ de currentPage

  return (
    <Container fluid className="app">
      <Segment>
        <Header />
        <Menu style={segmentStyle}>
          <Menu.Item>
            <NavLink to="/">Recherche</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/faq">FAQ</NavLink>
          </Menu.Item>
        </Menu>

        <Routes>
          <Route
            path="/"
            element={
              loading ? ( // afficher <Loader> pendant Loading
                <Segment className="ui-loader">
                  <Dimmer active>
                    <Loader size="huge">
                      <section>Loading</section>
                    </Loader>
                  </Dimmer>
                </Segment>
              ) : (
                // Sinon afficher <Fragment> Message + searchBar + Liste repos
                <>
                  <Message totalCount={totalCount} newSearch={newSearch} />
                  <SearchBar
                    newSearch={newSearch}
                    setNewSearch={setNewSearch}
                    loadRepositories={loadRepositories}
                  />
                  {repositoriesError ? (
                    // Passer l’erreur à <Message>
                    <Segment>
                      <p>
                        Attention ! Une erreur est survenue :
                        {repositoriesError.message}
                      </p>
                    </Segment>
                  ) : (
                    <>
                      <ReposResults repositories={repositories} />
                      <div className="pagination">
                        <Button
                          className="ui primary basic button"
                          onClick={() => {
                            setCurrentPage(currentPage - 1);
                          }}
                        >
                          <i className="angle double left icon"></i>
                          Préc.
                        </Button>
                        <Button
                          className="ui primary basic button top attached"
                          onClick={() => {
                            setCurrentPage(currentPage + 1);
                          }}
                        >
                          Suiv.
                          <i className="angle double right icon"></i>
                        </Button>
                      </div>
                    </>
                  )}
                </>
              )
            }
          />

          <Route
            path="/faq"
            element={
              <Segment>
                <p>A quoi ça sert ? </p>
                <p>A explorer les repositories sur GitHub</p>
                <p>
                  En plus ils sont classés par nombre d'<span>&#11088;</span>{" "}
                </p>
                <p>C'est fascinant !</p>
              </Segment>
            }
          />

          <Route
            path="*"
            element={
              <Segment>
                <h1>Oups, une erreur 404 : Cette page n'existe pas</h1>
              </Segment>
            }
          />
        </Routes>
      </Segment>
    </Container>
  );
}

export default App;
