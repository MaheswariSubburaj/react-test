import React from 'react';

function getTitle(title) {
return title;
}

function App() {

  return (
    <div>
      <h1>Connectus Global {getTitle(2021)}</h1> 
    
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
  </div>
  );  
}

export default App;
