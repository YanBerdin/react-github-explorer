import PropTypes from "prop-types";
import { Form, Input, Segment } from "semantic-ui-react";

/**
 * Represents a search bar component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.newSearch - The current search value.
 * @param {function} props.setNewSearch - The function to update the search value.
 * @param {function} props.loadRepositories - The function to load repositories.
 * @returns {JSX.Element} The search bar component.
 */
function SearchBar({ newSearch, setNewSearch, loadRepositories }) {
  const segmentStyle = {
    margin: "0",
    padding: "0rem 0rem 0rem 0rem",
  };

  return (
    <Segment style={segmentStyle}>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          loadRepositories();
        }}
      >
        <Input
          required
          fluid
          name="search-form"
          // icon="search"
          action={{ icon: "search" }}
          // iconPosition="left"
          actionPosition="left"
          placeholder="Search..."
          value={newSearch} // sanitized by React
          onChange={(event) => {
            setNewSearch(event.target.value);
          }}
        />
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  newSearch: PropTypes.string.isRequired,
  setNewSearch: PropTypes.func.isRequired,
  loadRepositories: PropTypes.func.isRequired,
};

export default SearchBar;
