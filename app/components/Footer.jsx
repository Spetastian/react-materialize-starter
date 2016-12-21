import React, { Component } from 'react';
import { render } from 'react-dom';

/*
    A react component can also be just a plain pure function that just returns JSX.
    This is a lower order component or a "dumb" component since it has no affect on application state or has any specifi logic.
    It justs renders with the properties it gets.
*/
const Footer = () => 
    <footer className="page-footer orange">
        <div className="container">
        <div className="row">
            <div className="col l6 s12">
            <h5 className="white-text">Bacon!</h5>
            <p className="grey-text text-lighten-4">
            Bacon ipsum dolor amet landjaeger jowl drumstick porchetta fatback, shoulder spare ribs ham hock sausage. Capicola pancetta pork belly corned beef tail, pastrami tri-tip frankfurter flank. Pork belly chicken meatball, rump ham alcatra porchetta swine shank prosciutto meatloaf kevin salami pig ground round. Picanha pancetta sirloin, venison beef shank tenderloin turkey shankle. Salami hamburger jowl swine fatback boudin, doner rump turkey pork belly landjaeger. Venison chicken prosciutto, ball tip andouille rump ground round shankle chuck pork kevin turducken tail short ribs cupim. Sirloin tongue chicken, drumstick turkey meatloaf turducken short loin doner kevin brisket ground round jowl swine.
            </p>
            </div>
        </div>
        </div>
    </footer>

export default Footer;