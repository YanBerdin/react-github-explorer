import "./App.scss";
import { Container, Menu, Segment, Loader } from "semantic-ui-react";
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

  const loadRepositories = async () => {
    // Avant l'appel à l'API, j'indique que je suis en train de charger les données
    // en passant loading du state à "true"
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${newSearch}`
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
      // que la requête ait fonctionné ou soit en erreur
      setLoading(false); //arrêter l’indicateur de chargement
    }
  };

  useEffect(() => {
    console.log("Hello ! Le composant App est rendu");
    loadRepositories();
    console.log("Chargement repositories 1er affichage OK");
  }, []);

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
            loading ? ( // Si loading => affiche <Loader>
            // Attention : Grace au trait d'union loader sur la page
              <div className="ui-segment"> 
                <div className="ui active dimmer">
                  <div className="ui huge text loader">Loading</div>
                </div>
              </div>
            ) : (
              // Sinon affiche <Fragment>
              <>
                <Message totalCount={totalCount} newSearch={newSearch} />
                <SearchBar
                  newSearch={newSearch}
                  setNewSearch={setNewSearch}
                  loadRepositories={loadRepositories}
                />
                {repositoriesError ? (
                  <Segment>
                    <p>{repositoriesError.message}</p> // Passer l’erreur à
                    Message
                  </Segment>
                ) : (
                  <ReposResults repositories={repositories} />
                )}
              </>
            )
          }
        />

        <Route
          path="/faq"
          element={
            <Segment>
              <ul>
                <li>A quoi ça sert ? </li>
                <li>A chercher des trucs</li>
                <li>C'est dingue quand même !</li>
              </ul>
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
