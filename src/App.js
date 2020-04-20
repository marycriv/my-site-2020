import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <Container>
      <HeaderContainer />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </Container>
  );
}

export default App;
