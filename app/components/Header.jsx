import React, { Component } from 'react';
import { render } from 'react-dom';

/*
    A react component can also be just a plain pure function that just returns JSX.
    This is a lower order component or a "dumb" component since it has no affect on application state or has any specifi logic.
    It justs renders with the properties it gets.
*/
const NavBar = ({title}) => 
    <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">{title}</a>
        <ul className="right hide-on-med-and-down">
            <li><a href="#">Header Link</a></li>
        </ul>

        <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Header Link</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
    </nav>

export default NavBar;