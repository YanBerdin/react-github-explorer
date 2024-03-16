import PropTypes from "prop-types";
import { Segment } from "semantic-ui-react";

/**
 * Component for displaying a message with a total count.
 *
 * @param {Object} props - The component props.
 * @param {number} props.totalCount - The total count to be displayed.
 * @returns {JSX.Element} The rendered message component.
 */
function Message({ totalCount}) {
  const segmentStyle = {
    margin: "0",
  };

  return (
    <Segment style={segmentStyle}>
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
