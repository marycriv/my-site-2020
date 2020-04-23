import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import HeaderContainer from './containers/HeaderContainer';
import ResumeContainer from './containers/ResumeContainer';
import AboutMeContainer from './containers/AboutMeContainer';

class App extends Component {
    // view options: "resume", "about me", "projects", "social media", "contact me"
  state={
    view: "about me"
  }

  // implement later
  // handleViewChange(viewChange) {
  //   this.setState({
  //     view: viewChange
  //   })
  // }

  render(){
    return(
    <Container>
      <HeaderContainer />
      {this.state.view === "resume" ? <ResumeContainer /> : <AboutMeContainer />}
      {/* <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div> */}
    </Container>
    )
  }
}

export default App;
