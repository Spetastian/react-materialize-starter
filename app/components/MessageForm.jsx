import React, { Component } from 'react';
import { render } from 'react-dom';

/* 
    A component can be a class that inherits the Component class from react.
    A component class that inherits from React.Component should have
    a render functon that returns JSX-code.
    JSX-code can be a mix of standard HTML and your own react components.
*/
class MessageForm extends Component {
    
    // Define what properties this component takes and what types they are.
    static propTypes = {
        onMessageCreated: React.PropTypes.func.isRequired
    }

    // Set initial component state
    state = {
        firstname: "",
        lastname: "",
        messageBody: ""
    }

    /*
        We need this event handlers to bind the form values to the component state.
        Works differently if you use e.g Redux for state management.
    */
    _onFirstnameChange = (event) => {
        this.setState({firstname: event.target.value});
    }

    _onLastnameChange = (event) => {
        this.setState({lastname: event.target.value});
    }

    _onBodyChange = (event) => {
        this.setState({messageBody: event.target.value});
    }

    _addMessageButtonClicked = (event) => {
        event.preventDefault();

        // Executing callback to tell parent that we pressed "Add message"
        this.props.onMessageCreated(this.state);

        // Reseting the state and thus clearing the form
        this.setState({
            firstname: "",
            lastname: "",
            messageBody: ""
        });
    }

    render(){
        return (
        <div className="row">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <input onChange={this._onFirstnameChange} value={this.state.firstname} placeholder="Enter your first name" id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                    <input onChange={this._onLastnameChange} value={this.state.lastname} placeholder="Enter your last name" id="last_name" type="text" className="validate" />
                    <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input onChange={this._onBodyChange}  value={this.state.messageBody} id="message" placeholder="Enter your message" type="text" className="validate" />
                    <label htmlFor="message">Mesage</label>
                    </div>
                </div>
                <div className="row">
                    <a className="waves-effect waves-light btn" onClick={this._addMessageButtonClicked}>Add message</a>
                </div>
            </div>
        </div>
        );
    }
}

export default MessageForm;
