import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Search from "./pages/search"
import Saved from "./pages/saved"
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  )
}

export default App;
