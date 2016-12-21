import React, { Component } from 'react';
import { render } from 'react-dom';

/*
    A react component can also be just a plain pure function that just returns JSX.
    This is a lower order component or a "dumb" component since it has no affect on application state or has any specifi logic.
    It justs renders with the properties it gets.
*/
const NavBar = ({title, text}) =>   
        <div className="col s4 m6">
            <div className="card small blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <p>{text}</p>
            </div>
            </div>
        </div>

export default NavBar;