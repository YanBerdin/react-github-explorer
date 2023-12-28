import PropTypes from "prop-types";
import { Card, Icon, Image, Segment } from "semantic-ui-react";

import "./ReposResults.scss";

function ReposResults({ repositories }) {
  // const searchResult = searchResults.length;
  // console.log(repositories);

  const segmentStyle = {
    margin: "0",
  };

  return (
    // console.log(totalCount);
    // console.log(repositories),
    <Segment style={segmentStyle}>
      <Card.Group itemsPerRow={5} centered={true} className="CardGroup">
        {repositories.map((repository) => (
          <Card
            key={repository.id}
            raised={true}
            color="grey"
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="Card"
          >
            <Card.Content>
              <Image
                // className="avatar"
                size="tiny"
                // avatar={true}
                floated="right"
                src={repository.owner.avatar_url}
                wrapped={false}
              />
              <Card.Header>{repository.name} </Card.Header>
              <Card.Meta>
                <Icon name="star" /> {repository.stargazers_count}
              </Card.Meta>
              <Card.Meta>
                <Icon name="user" /> {repository.owner.login}
              </Card.Meta>
              <Card.Meta>{repository.owner.type}</Card.Meta>
              <Card.Description>{repository.description}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Segment>
  );
}

ReposResults.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default ReposResults;
