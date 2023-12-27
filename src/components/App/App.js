import "./App.scss";
import { Container, Menu, Segment, Button } from "semantic-ui-react";
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

  const loadRepositories = async () => {
    // Avant l'appel à l'API => charger les données en passant loading dans state à "true"
    setLoading(true);
    try {
      const response = await axios.get(
        // `https://api.github.com/search/repositories?q=${newSearch}`
        `https://api.github.com/search/repositories?q=${newSearch}&sort=stars&order=desc&page=${currentPage}&per_page=30`
      );

      setRepositories(response.data.items);
      setTotalCount(response.data.total_count);

      // console.log(response.data.total_count);
      console.log(response.data.items);
      console.log(repositories);
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
    console.log("Hello ! Le composant App est rendu");
    loadRepositories();
    console.log("Chargement repositories 1er affichage OK");
  }, [currentPage]); // Appel API à chaque modif de currentPage

  return (
    <Container fluid>
      {/* <Segment> */}
      <Header />
      <Menu>
        <Menu.Item>
          <NavLink to="/">Recherche</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/faq">FAQ</NavLink>
        </Menu.Item>
      </Menu>
      {/* </Segment> */}
      <Routes>
        <Route
          path="/"
          element={
            loading ? ( // afficher <Loader>
              // Attention : Grace au trait d'union loader sur la page
              <div className="ui-segment">
                <div className="ui active dimmer">
                  <div className="ui huge text loader">Loading</div>
                </div>
              </div>
            ) : (
              // Sinon afficher <Fragment>
              <>
                <Message totalCount={totalCount} newSearch={newSearch} />
                <SearchBar
                  newSearch={newSearch}
                  setNewSearch={setNewSearch}
                  loadRepositories={loadRepositories}
                />
                {repositoriesError ? (
                  // Passer l’erreur à Message
                  <Segment>
                    <p>
                      Attention ! Une erreur est survenue :{" "}
                      {repositoriesError.message}
                    </p>
                  </Segment>
                ) : (
                  <ReposResults repositories={repositories} />
                )}
                <Segment>
                  <Button
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                    }}
                  >
                    précédent
                  </Button>
                  <Button
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                    }}
                  >
                    Suivant
                  </Button>
                </Segment>
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
                <p>En plus ils sont classés par nombre d'<span>&#11088;</span> </p>
                <p>C'est dingue quand même !</p>
              
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
    </Container>
  );
}

export default App;
