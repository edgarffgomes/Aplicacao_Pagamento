import React from 'react'
import ReactDOM from 'react-dom'
import Main from "./components/Main"
import {BrowserRouter as Router, Route} from "react-router-dom"

const rootComponent = document.getElementById('root')
ReactDOM.render(
  <Router>
    <Route path="/" exact render = {() =>(
      <>
        <Main/>
      </>
    )}/>
  </Router>
  , rootComponent);

