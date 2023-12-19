import PropTypes from "prop-types";
import { Form, Input, Segment } from "semantic-ui-react";

function SearchBar({ newSearch, setNewSearch, loadRepositories }) {
  const segmentStyle = {
    marginTop: "1.5rem",
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
          fluid
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          value={newSearch}
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
