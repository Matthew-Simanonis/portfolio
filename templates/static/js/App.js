import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import "./styles/App.css"

//Import Components
import Nav from './components/Nav'
import project from './components/project'


export default (
    function App () {
    return (
    <HashRouter>
     <div className="App">
         <div className="home">
            <Route path='/' component={Nav} />
            <Route path='/' component={project} />
        </div>
     </div>
    </HashRouter>
    )}
);