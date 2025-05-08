import React from 'react';
import './App.css';

//Here we IMPORT THE CLASS FILE //
import Header from './componentes/Header';

//Here we IMPORT THE SONGS FILE //
import Songs from './componentes/Songs';

function App() {
  return (
    <div className="App">
      
      <header className ="App-header">
        <Header /> 
      </header>

      <div className='App-songs'>
        <Songs />
      </div>
      
        
    </div>
  );
}

export default App;
