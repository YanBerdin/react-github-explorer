import PropTypes from "prop-types";
import { Segment } from "semantic-ui-react";

function Message({ totalCount, newSearch }) {
  return (
    <Segment>
      <p>
        La recherche a retourné {totalCount} résultat
        {totalCount > 1 ? "s" : ""}
      </p>
    </Segment>
  );
}

Message.propTypes = {
  totalCount: PropTypes.number.isRequired,
};

export default Message;
