import React, { Component } from 'react';
import { render } from 'react-dom';
import MessageForm from './MessageForm'
import MessageList from './MessageList'

/* 
    A component can be a class that inherits the Component class from react.
    A component class that inherits from React.Component should have
    a render functon that returns JSX-code.
    JSX-code can be a mix of standard HTML and your own react components.
*/
export default class MessageBoard extends Component {
    
    // Initial component state
    state = {
        messages: []
    }

    /* 
        Function that is passed as a callback to the MessageForm component below.
        The firstname, lastname, messageBody properties are sent when the 
        MessageFrom component executes the callback (se MessageForm.jsx).
    */
    _handleOnMessageCreated = ({firstname, lastname, messageBody}) => {
        this.setState(
            {
                // Creating a new state for the messages property
                messages: 
                    [
                        // Using spread operator ( ... ) to add the old messages to a new array together with the new message as well
                        ...this.state.messages, 

                        // ... and add a new entry to the messages array
                        {
                            firstname: firstname,
                            lastname: lastname,
                            body: messageBody
                        }
                    ]
                }
            )
    }

    render(){
        return (
            <div>
                <MessageForm onMessageCreated={this._handleOnMessageCreated}/>
                <MessageList messages={this.state.messages}/>
            </div>
        );
    }
}
