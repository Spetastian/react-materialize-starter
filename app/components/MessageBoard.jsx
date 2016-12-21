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

const fakeMessages = 
[
    {key:1, firstname: "Sebastian", lastname: "Lindström", body:"Hej"},
    {key:2, firstname: "Sebastian", lastname: "Lindström", body:"Hej2"},
    {key:3, firstname: "Sebastian", lastname: "Lindström", body:"Hej3"}
];

export default class MessageBoard extends Component {
    
    state = {
        messages: []
    }

    _handleOnMessageCreated = ({firstname, lastname, messageBody}) => {
        this.setState(
            {
                // Creating a new state for the messages property
                messages: 
                    [
                        // Using spread operator ( ... ) to add the old messages to a new array together with the new message as well
                        ...this.state.messages, 
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
