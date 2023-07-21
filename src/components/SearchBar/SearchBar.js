// import React from "react"
import { Form, Input, Segment } from "semantic-ui-react";

function SearchBar() {
  
  const segmentStyle = {
    marginTop: '1.5rem',
  };

  
  // Autre option pour le style
  // <Segment style={{ marginTop: '1.5rem' }}>
  return (
    <Segment style={segmentStyle}>

      <Form>
        {/*       <Input type="search" placeholder="Chercher un Repository..." /> */}
        <Input
          fluid
          icon="search"
          iconPosition="left"
          placeholder="Search..."
        />
      </Form>
    </Segment>
  );
}

{
  /* <form
className="SearchForm"
onSubmit={(event) => {
  event.preventDefault();
  addTask(newTaskLabel);
  this.setNewTaskLabel('');
}}
>
<input
  type="text"
  className="SearchForm-input"
  placeholder="Chercher un Repository..."
  value={newSearch}
  onChange={(event) => {
    this.setNewSearch(event.target.value);
  }}
/>
</form> */
}

/*
Autre méthode possible sans champ contrôlé :
on ne relie pas la valeur de l'input au state
et on ne la lira qu'au moment du submit

<form className="TodoForm" onSubmit={(event) => {
  addTask(event.target.querySelector('input').value)
}}>
  <input
    type="text"
    className="TodoForm-input"
    placeholder="Ajouter une tâche"
  />
</form>
*/

export default SearchBar;
