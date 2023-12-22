import PropTypes from "prop-types";
import { Card, Icon, Image, Segment } from "semantic-ui-react";

function ReposResults({ repositories }) {
  // const searchResult = searchResults.length;
  // console.log(repositories);

  return (
    // console.log(totalCount);
    console.log(repositories),
    (
      <Segment>
        <Card.Group itemsPerRow={5} centered={true}>
          {repositories.map((repository) => (
            // <a
            //   key={repository.id}
            //   href={repository.html_url}
            //   target="_blank"
            //   rel="noopener noreferrer"
            // >
            <Card
              key={repository.id}
              raised={true}
              color="grey"
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={repository.owner.avatar_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{repository.name}</Card.Header>
                <Card.Meta>
                  <Icon name="user" /> {repository.owner.login}
                </Card.Meta>
                <Card.Meta>Type :{repository.owner.type}</Card.Meta>
                <Card.Description>{repository.description}</Card.Description>
              </Card.Content>
            </Card>
            // </a>
          ))}
        </Card.Group>
      </Segment>
    )
  );
}

ReposResults.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default ReposResults;
