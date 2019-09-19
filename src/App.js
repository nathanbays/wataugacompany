import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pageHeader">The Watauga Company</div>
        <div className="email">
          <a
            title="Email Nathan@TheWataugaCompany.com" 
            className="label" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="mailto:Nathan@TheWataugaCompany.com">Nathan@TheWataugaCompany.com
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
