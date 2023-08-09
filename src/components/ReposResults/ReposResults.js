import PropTypes from "prop-types";
import { Card, Image, Segment } from "semantic-ui-react";

function ReposResults({ repositories }, { totalCount }) {
  // const searchResult = searchResults.length;
  // console.log(repositories);

  return (
    // console.log(totalCount);
    // console.log(repositories),
    <>
      <Segment>
        <Card.Group itemsPerRow={3}>
          {repositories.map((repository) => (
            <Card key={repository.id}>
              <Image
                // src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQbQyOvDfqAk1lKBbLm03Tedg8EC8CYQxeVBal3yW9g4Zyb8NwIgtD4zeiz6O-Be8bb"
                src={repository.owner.avatar_url}
                wrapped
                ui={false}
              />

              <Card.Content>
                <Card.Header>{repository.name}</Card.Header>
                <Card.Meta>{repository.owner.login}</Card.Meta>
                <Card.Description>{repository.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Segment>
      {/* <div className="ReposResults">
        <p>La recherche a donné {totalCount} résultats</p>

        {repositories.map((repository) => (
          <ul key={repository.id} className="ReposResults-p">
            <img src={repository.owner.avatar_url} alt="Un repository" />

            <li> {repository.name} </li>
            <li> {repository.owner.login} </li>
            <li> {repository.full_name} </li>
          </ul>
        ))}
      </div> */}
    </>
  );
}

ReposResults.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default ReposResults;
