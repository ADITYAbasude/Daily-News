
import './App.css';
import Navbar from './layout/Navbar'
import News from './layout/News'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/business"><News key="business" country="in" categories="business" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" country="in" categories="entertainment" /></Route>
          <Route exact path="/general"><News key="general" country="in" categories="general" /></Route>
          <Route exact path="/sports"><News key="sports" country="in" categories="sports" /></Route>
          <Route exact path="/health"><News key="health" country="in" categories="health" /></Route>
          <Route exact path="/science"><News key="science" country="in" categories="science" /></Route>
          <Route exact path="/technology"><News key="technology" country="in" categories="technology" /></Route>
          <Route exact path="/"><News key="general" country="in" categories="general" /></Route>

        </Switch>
      </Router>
    </>
  );
}

// export default App;
