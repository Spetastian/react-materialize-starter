import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MessageBoard from './components/MessageBoard';

/* 
    A component can be a class that inherits the Component class from react.
    A component class that inherits from React.Component should have
    a render functon that returns JSX-code.
    JSX-code can be a mix of standard HTML and your own react components.
*/
class App extends Component {
  render() {
    /*
      The title-property passed in the Header component below is the one that
      is received as {title} in Header.jsx.
    */
    return (
      <div>
        <Header title="Testing react with Materialize" />
        <br/>
        <MessageBoard />
        <br />
        <Footer />
      </div>
    );
  }
}

/* 
    Calling the render method from react-dom.
    The first argument is the "main" react component.
    The second argument is a HTML Node in which the main react component should be mounted.
*/
render(
  <App />,
  document.getElementById('app')
);
