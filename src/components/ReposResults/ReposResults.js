function ReposResults({ repositories }, { searchResults }) {
  
  // const searchResult = searchResults.length; 
  
  return (

// console.log(searchResult),

    <div className="ReposResults">
     
      <p>La recherche a donné "A DYNAMISER" résultats</p>


      {repositories.map((repository) => (
        <ul key={repository.id} className="ReposResults-p">
          <img src={repository.owner.avatar_url} alt="Un repository" />

          <li> {repository.name} </li>
          <li> {repository.owner.login} </li>
          <li> {repository.full_name} </li>
        </ul>
      ))}
    </div>
  );
}

export default ReposResults;
